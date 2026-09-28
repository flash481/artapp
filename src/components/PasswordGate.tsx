import { type FormEvent, type ReactNode, useState } from "react";
import {
  clearUnlockMarker,
  hasUnlockMarker,
  isPasswordHashConfigured,
  saveUnlockMarker,
  verifyPassword,
} from "../lib/password";

interface PasswordGateProps {
  hash: string | undefined;
  children: (lock: () => void) => ReactNode;
}

export function PasswordGate({ hash, children }: PasswordGateProps) {
  const configured = isPasswordHashConfigured(hash);
  const configuredHash = configured ? hash : "";
  const [unlocked, setUnlocked] = useState(() => configured && hasUnlockMarker(configuredHash));
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [checking, setChecking] = useState(false);

  if (!configured) {
    return (
      <main className="gate-screen">
        <section className="gate-card setup-card" aria-labelledby="setup-title">
          <p className="eyebrow">Sketchbook Lessons</p>
          <h1 id="setup-title">Password setup required</h1>
          <p>
            This course has no valid password hash configured yet. Add a SHA-256 hash as
            <code> VITE_COURSE_PASSWORD_HASH</code>, then restart the app or rebuild the site.
          </p>
          <p className="setup-hint">Create a hash with <code>npm run hash-password</code>.</p>
          <p className="security-note">This static password gate only discourages casual browsing. It is not real security.</p>
        </section>
      </main>
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!password || checking) return;
    setChecking(true);
    setMessage("");
    try {
      const accepted = await verifyPassword(password, configuredHash);
      if (accepted) {
        saveUnlockMarker(configuredHash);
        setPassword("");
        setUnlocked(true);
      } else {
        setMessage("That password did not match. Try again.");
      }
    } catch {
      setMessage("Password checking is unavailable in this browser. Try a current browser.");
    } finally {
      setChecking(false);
    }
  }

  function lock() {
    clearUnlockMarker(configuredHash);
    setUnlocked(false);
    setPassword("");
    setMessage("");
  }

  if (unlocked) {
    return children(lock);
  }

  return (
    <main className="gate-screen">
      <section className="gate-card" aria-labelledby="gate-title">
        <p className="eyebrow">A little time for drawing</p>
        <h1 id="gate-title">Open your sketchbook</h1>
        <p>Enter your course password to continue.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="course-password">Password</label>
          <input
            autoComplete="current-password"
            id="course-password"
            onChange={(event) => setPassword(event.currentTarget.value)}
            type="password"
            value={password}
            required
          />
          {message && <p className="form-message" role="alert">{message}</p>}
          <button className="primary-button gate-submit" disabled={checking} type="submit">
            {checking ? "Checking…" : "Continue"}
          </button>
        </form>
        <p className="security-note">This static password gate is for casual privacy, not real security.</p>
      </section>
    </main>
  );
}

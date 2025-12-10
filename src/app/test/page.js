"use client";
import { useState } from "react";

export default function Home() {
  const [rightSide, setRightSide] = useState(false);

  return (
    <section className="main-section">
      {/* SLIDING PANEL */}
      <div className={`panel ${rightSide ? "move-right" : "move-left"}`}>
        {rightSide ? (
          <div className="form-content">
            <h1>Sign Up</h1>
            <p>Create a new account</p>
          </div>
        ) : (
          <div className="form-content">
            <h1>Login</h1>
            <p>Sign in to your account</p>
          </div>
        )}
      </div>

      {/* CENTER TOGGLE BUTTON */}
      <button className="toggle-btn" onClick={() => setRightSide(!rightSide)}>
        Toggle
      </button>
    </section>
  );
}

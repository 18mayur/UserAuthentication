"use client";

import { useState } from "react";
import "./style.css";
import LoginForm from "../Components/LoginForm";
import SignupForm from "../Components/SignupForm";
import ToggleButton from "../Components/ToggleButton";

export default function LoginPage() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <main className="page">
      <div className="auth-card">
        {/* Toggle button inside the card */}
        <ToggleButton
          active={showSignup}
          onToggle={() => setShowSignup(!showSignup)}
        />

        {/* Sliding content */}
        <div className={`slider-track ${showSignup ? "slide-right" : ""}`}>
          {/* LEFT PANEL (LOGIN FORM) */}
          <div className="panel panel-left">
            <LoginForm />
          </div>

          {/* RIGHT PANEL (IMAGE → SIGNUP FORM AFTER SLIDE) */}
          <div className="panel panel-right">
            {!showSignup && <div className="image-panel" />}
            {showSignup && <SignupForm />}
          </div>
        </div>
      </div>
    </main>
  );
}

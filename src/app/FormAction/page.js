"use client";
import React, { useActionState } from "react";
import "./style.css";
import { action } from "../action";

const FormAction = () => {
  const [state, formAction, ispending] = useActionState(action, undefined);

  return (
    <>
      <form
        action={formAction}
        className="card shadow shadow-large shadow-hover"
      >
        <div className="card-header">Sign In</div>
        <div className="card-body">
          <div className="form-group">
            <input
              name="name"
              className="input-block"
              type="text"
              placeholder="Username"
              //   minlength="2"
            />
            {state?.message && (
              <p className={state.success ? "text-green-500" : "text-red-600"}>
                {state.message}
              </p>
            )}
          </div>
          <div className="form-group">
            <input
              name="email"
              className="input-block"
              type="email"
              placeholder="Email"
              //   minlength="2"
            />
          </div>
          <div className="form-group">
            <input
              name="password"
              className="input-block"
              type="password"
              placeholder="Password"
              autoComplete="false"
              //   minlength="4"
            />
          </div>
          <button
            disabled={ispending}
            className="btn-block background-secondary"
          >
            {ispending ? "Submitting" : "SignUp"}
          </button>
        </div>
      </form>
    </>
  );
};

export default FormAction;

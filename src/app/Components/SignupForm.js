"use client";
import Input from "./Input";
import { useActionState, useState } from "react";
import { signupAction } from "../signupAction";
import "./signup.css";
export default function SignupForm() {
  const InputData = [
    {
      type: "text",
      label: "Enter Your Name",
      name: "name",
    },
    {
      type: "email",
      label: "Enter Your Email",
      name: "email",
    },
    {
      type: "password",
      label: "Enter Password",
      name: "password",
    },
  ];
  const [state, formAction, ispending] = useActionState(
    signupAction,
    undefined
  );
  const [role, setRole] = useState("User");

  console.log(role);
  return (
    <form action={formAction}>
      <div className="flex flex-col !text-[#fff] pt-[5.35rem] gap-[1.125rem]  items-center">
        <div className="flex flex-col items-start gap-12">
          <div className="title-div flex flex-col items-start">
            <h2>SignUp </h2>
            <p className="text-[1.125rem] tracking-[1px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Input InputData={InputData} />
            <div className="input-container">
              <select
                name="role"
                required
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="" disabled hidden />
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
              <label className="label">Select Role</label>
              <div className="underline" />
            </div>
            {role === "Admin" ? (
              <div className="input-container">
                <select
                  name="team"
                  required
                >
                  <option value="" disabled hidden />
                  <option value="Accounts">Accounts</option>
                  <option value="Testing">Testing</option>
                  <option value="Server">Server</option>
                  <option value="Devlopment">Devlopment</option>
                </select>
                <label className="label">Select Team</label>
                <div className="underline" />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="btn flex flex-col gap-[4rem] w-full justify-center ">
          <div className="forgot-btn !text-[#fff] flex justify-between">
            <div className="flex gap-2 items-center">
              <label class="container2">
                <input type="checkbox" id="checkbox2" />
                <div class="checkmark"></div>
              </label>
              <label htmlFor="checkbox2">Remember me</label>
            </div>
            <span>Forgot Password?</span>
          </div>
          <button
            disabled={ispending}
            data-ripple-light="true"
            class="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle text-[1rem] font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            {ispending ? "Submitting" : "SignUp"}
          </button>
        </div>
      </div>
    </form>
  );
}

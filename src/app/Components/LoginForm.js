"use client";
import Input from "./Input";
// import { useActionState } from "react";
// import { action } from "../action";
export default function LoginForm() {
  const InputData = [
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
  // const [state, formAction, ispending] = useActionState(action, undefined);
  return (
    <form>
      <div className="flex flex-col pt-[8rem] gap-[1.125rem] items-center">
        <div className="flex flex-col items-start gap-12">
          <div className="title-div flex flex-col items-start">
            <h2>Login</h2>
            <p className="text-[1.125rem] tracking-[1px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Input InputData={InputData} />
          </div>
        </div>
        <div className="btn flex flex-col gap-[5rem] w-full justify-center ">
          <div className="forgot-btn flex  justify-between items-center">
            <div className="flex gap-2 items-center">
              <label class="container2">
                <input type="checkbox" id="checkbox" />
                <div class="checkmark"></div>
              </label>
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <span>Forgot Password?</span>
          </div>
          <button
            data-ripple-light="true"
            class="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle  text-[1rem] font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            login
          </button>
        </div>
      </div>
    </form>
  );
}

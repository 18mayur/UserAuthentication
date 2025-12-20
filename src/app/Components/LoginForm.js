"use client";
import Input from "./Input";
import { useEffect } from "react";
// import { loginAction } from "../loginAction";
import { useActionState } from "react";
import { loginAction } from "../(auth)/login/action";
// import { redirect } from "next/dist/server/api-utils";
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
    {
      type: "select",
      label: "Select Role",
      name: "role",
      options: ["user", "admin"],
    },
  ];
  const initialState = {
    success: null,
    message: "",
  };
  const [state, formAction2, ispending] = useActionState(
    loginAction,
    initialState
  );
  console.log("STATE FROM SERVER:", state.message);
  useEffect(() => {
    if (state.success === null) return;
    setTimeout(() => {
      if (state.success === true) {
        alert(state.message);
        window.location.href = "/home";
      } else if (state.success === false) {
        alert(state.message);
      }
    }, 1000);
  }, [state]);
  return (
    <form action={formAction2}>
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
            disabled={ispending}
            data-ripple-light="true"
            class="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle  text-[1rem] font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            {ispending ? "Checking" : "login"}
          </button>
        </div>
      </div>
    </form>
  );
}

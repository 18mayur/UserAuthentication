import React from "react";
import Input from "../Components/Input";
import "./style.css";
const login = () => {
  return (
    <>
      <div className="login-bg flex">
        <div className="overlay"></div>
        <div className="flex h-[100vh] flex-col form-div justify-start py-[4.75rem] px-[7rem] items-start w-[42%]">
          <div className="flex flex-col items-start gap-12">
            <div className="title-div flex flex-col items-start">
              <h2>Login</h2>
              <p className="text-[0.875rem] tracking-[1px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Input />
            </div>
          </div>

          <div className="btn flex flex-col w-full justify-center ">
            <div className="forgot-btn flex justify-between">
              <div className="flex">
                {/* <Checkbox/> */}
                <label class="container2">
                  <input type="checkbox" />
                  <div class="checkmark"></div>
                </label>
                <span>Remember me</span>
              </div>
              <span>Forgot Password?</span>
            </div>
            <button
              data-ripple-light="true"
              type="button"
              class="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;

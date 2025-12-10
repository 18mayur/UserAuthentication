import Input from "./Input";

export default function SignupForm() {
  const InputData = [
    {
      type: "text",
      label: "Enter Your Name",
    },
    {
      type: "email",
      label: "Enter Your Email",
    },
    {
      type: "password",
      label: "Enter Password",
    },
    {
      type: "text",
      label: "Role",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-start gap-12">
        <div className="title-div flex flex-col items-start">
          <h2>Login</h2>
          <p className="text-[0.875rem] tracking-[1px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Input InputData={InputData} />
        </div>
      </div>
      <div className="btn flex flex-col w-full justify-center ">
        <div className="forgot-btn flex justify-between">
          <div className="flex">
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
  );
}

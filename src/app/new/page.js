import React from "react";
import "./style.css";
const SignUp = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div class="auth-card">
            <div class="auth-left">
              <div class="brand">logo</div>

              <h1>Create an account</h1>
              <p>Sign up and get 30 day free trial</p>

              <form>
                <div>
                  <label>Full name</label>
                  <input type="text" placeholder="test" />
                </div>

                <div>
                  <label>Email</label>
                  <input type="email" placeholder="test@email.com" />
                </div>

                <div>
                  <label>Password</label>
                  <input type="password" placeholder="••••••••••" />
                </div>

                <button class="primary">Submit</button>

                <div class="social">
                  <button>Apple</button>
                  <button>Google</button>
                </div>
              </form>

              <div class="footer-links">
                <span>Have an account? Sign in</span>
                <span>Terms & Conditions</span>
              </div>
            </div>

            <div class="auth-right">
              <img src="./form-bg.png" alt="Nature image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

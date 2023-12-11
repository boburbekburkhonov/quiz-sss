import React from 'react';
import './Login.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Login = () => {
  return (
    <HelmetProvider>
      <section className='login-page'>
        <div className="container" id="container">
        <div className="form-container sign-up-container">

            <form action="#" id="contact-form" className="main-form needs-validation" role="form" noValidate>
                <h3>Create Account</h3>
                <div className="form-group">
                    <label>
                        <input type="text" id="form_user" className="my_form-control" required />
                        <small className="my_place">Username</small>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        <input type="text" id="form_email" className="my_form-control" required />
                        <small className="my_place">Your email</small>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        <input type="password" id="form_password" className="my_form-control" required />
                        <small className="my_place">Your password</small>
                        <div className="invalid-feedback">Please fill out this field.</div>

                    </label>
                </div>

                <div className="form-group text-center">
                    <button type="submit" className="btn btn-primary mt-2 mx-auto" >CREATE ACCOUNT</button>
                </div>



            </form>
        </div>

        <div className="form-container sign-in-container">

            <form action="#" id="contact-form" className="main-form needs-validation" role="form" noValidate>
                <h3>Sign In</h3>


                <div className="form-group">
                    <label>
                        <input type="text" id="form_email" className="my_form-control" required />
                        <small className="my_place">Your email</small>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        <input type="password" id="form_password" className="my_form-control" required />
                        <small className="my_place">Your password</small>
                        <div className="invalid-feedback">Please fill out this field.</div>

                    </label>
                </div>

                <div className="form-group text-center">
                    <button type="submit" className="btn btn-primary mt-2 mx-auto" >SIGN IN</button>
                </div>

                <div className="form-group mt-2 text-center">
                    <span className="forgot">Forgot password ?</span>
                </div>

            </form>

        </div>


        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    <button className="ghost" id="signIn">SIGN IN</button>

                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello World!</h1>
                    <p>Lorem ipsum dolor sit amet
                        sed do eiusmod tempor incididunt.</p>
                    <button className="ghost" id="signUp">CREATE ACCOUNT</button>
                </div>
            </div>
        </div>
        <Helmet>
              <script src="../../src/assets/login.js"></script>
        </Helmet>
    </div>
      </section>
    </HelmetProvider>
  );
};

export default Login;
import React from 'react';
import './Login.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Login = () => {
    const sigin = e => {
        e.preventDefault()

        const { username, name, password} = e.target

        console.log(username.value, name.value, password.value);

       fetch('http://localhost:3000/create/users', {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
               username: username.value,
               name: name.value,
               password: password.value
            }),
        })
        .then(res => res.json())
        .then(data => {
            if(data.status == 201){
                console.log(data);
                localStorage.setItem('userId', data.message.data._id)
                localStorage.setItem('userName', data.message.data.user_username)
                localStorage.setItem('name', data.message.data.user_name)
                window.location.href = "/list"
            }
        })
    }

  return (
    <HelmetProvider>
      <section className='login-page'>
        <div className="container" id="container">
        <div className="form-container sign-up-container">

            <form onSubmit={sigin} id="contact-form" className="main-form needs-validation">
                <h3>Akkount yaratish</h3>
                <div className="form-group mt-3">
                  <label>
                      <input name='username' type="text" id="form_user" className="my_form-control" required />
                      <small className="my_place">Username</small>
                      <div className="invalid-feedback">Please fill out this field.</div>
                  </label>
                </div>

                <div className="form-group">
                  <label>
                      <input name='name' type="text" id="form_user" className="my_form-control" required />
                      <small className="my_place">Name</small>
                      <div className="invalid-feedback">Please fill out this field.</div>
                  </label>
                </div>

                <div className="form-group mt-3">
                  <label>
                      <input name='password' type="password" id="form_password" className="my_form-control" required />
                      <small className="my_place">Your password</small>
                      <div className="invalid-feedback">Please fill out this field.</div>
                  </label>
                </div>
                <div className="form-group text-center mt-3">
                    <button type="submit" className="btn btn-primary mt-2 mx-auto">Kirish</button>
                </div>
            </form>
        </div>

        <div className="form-container sign-in-container">
            <form action="#" id="contact-form" className="main-form needs-validation" role="form" noValidate>
                <h3>Kirish</h3>

                <div className="form-group">
                    <label>
                        <input type="text" id="form_email" className="my_form-control" required />
                        <small className="my_place">Username</small>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </label>
                </div>

                <div className="form-group mt-3">
                    <label>
                        <input type="password" id="form_password" className="my_form-control" required />
                        <small className="my_place">Password</small>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </label>
                </div>

                <div className="form-group text-center mt-3">
                    <button type="submit" className="btn btn-primary mt-2 mx-auto" >Kirish</button>
                </div>
            </form>
        </div>

        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Akkauntga kirish</h1>
                    <p>Agar akkautingiz mavjud bo'lsa kirishingiz mumkin</p>
                    <button className="ghost" id="signIn">Kirish</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Akkaunt yaratish</h1>
                    <p>
                      Agar akkautingiz mavjud bo'lmasa yaratishingiz mumkin
                    </p>
                    <button className="ghost" id="signUp">Akkaunt yaratish</button>
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
import React, { useState } from 'react';
import './Login.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { api } from '../API/api.js';
import smart from '../../assets/logo.svg'


const Login = () => {
    const [error, setError] = useState('')
    const [errorSigin, setErrorSigin] = useState('')

    const sigin = e => {
        e.preventDefault()

        const { username, name, password } = e.target

       fetch(`${api}/create/users`, {
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
                localStorage.setItem('userId', data.message.data._id)
                localStorage.setItem('userName', data.message.data.user_username)
                localStorage.setItem('name', data.message.data.user_name)
                localStorage.setItem('token', data.message.access_token)
                window.location.href = "/list"
            }else {
                setErrorSigin(data.message)
            }
        })

        username.value = ''
        name.value = ''
        password.value = ''
    }

    const login = e => {
        e.preventDefault()

        const { username, password} = e.target

       fetch(`${api}/login/users`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
               username: username.value,
               password: password.value
            }),
        })
        .then(res => res.json())
        .then(data => {
            if(data.status == 200){
                localStorage.setItem('userId', data.message.data._id)
                localStorage.setItem('userName', data.message.data.user_username)
                localStorage.setItem('name', data.message.data.user_name)
                localStorage.setItem('token', data.message.access_token)
                window.location.href = "/list"
            }else {
                setError(data.message)
            }
        })

        username.value = ''
        password.value = ''
    }

  return (
    <HelmetProvider>
      <section className='login-page'>
        <div className="container" id="container">
        <div className="form-container sign-up-container">

            <form onSubmit={sigin} id="contact-form" className="main-form needs-validation">
                <div className='d-flex align-items-center w-100'>
                    <img src={smart} alt="smart" width={75} height={100} />
                    <h3 className='fs-5 m-0'>Akkount yaratish</h3>
                </div>
                <div className="form-group mt-3">
                  <label>
                      <input name='username' type="text" id="form_user" className="my_form-control" required />
                      <small className="my_place">Username</small>
                  </label>
                </div>

                <div className="form-group mt-3">
                  <label>
                      <input name='name' type="text" id="form_user" className="my_form-control" required />
                      <small className="my_place">Name</small>
                  </label>
                </div>

                <div className="form-group mt-3">
                  <label>
                      <input name='password' type="password" id="form_password" className="my_form-control" required />
                      <small className="my_place">Your password</small>
                  </label>
                </div>
                <div className="form-group text-center mt-3">
                    <span className='text-danger fs-6 fw-semibold'>{errorSigin}</span>
                    <button type="submit" className="btn btn-primary mt-2 mx-auto">Kirish</button>
                </div>
            </form>
        </div>

        <div className="form-container sign-in-container">
            <form onSubmit={login} id="contact-form" className="main-form needs-validation">
                <div className='d-flex align-items-center'>
                    <img src={smart} alt="smart" width={95} height={100} />
                    <h3 className='fs-5 m-0'>Kirish</h3>
                </div>

                <div className="form-group">
                    <label>
                        <input name='username' type="text" id="form_email" className="my_form-control" required />
                        <small className="my_place">Username</small>
                    </label>
                </div>

                <div className="form-group mt-3">
                    <label>
                        <input name='password' type="password" id="form_password" className="my_form-control" required />
                        <small className="my_place">Password</small>
                    </label>
                </div>

                <div className="form-group text-center mt-3">
                    <span className='text-danger fs-6 fw-semibold'>{error}</span>
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
import React,{ useState } from 'react';
import LoginHook from '../hooks/LoginHook';
import '../Login.css'
const Login = () => {
    const [ register, setRegister ] = useState(false)
    const {user, setUserData, signUp, logIn} = LoginHook()
    return (
            <div className="row">
                <div className="col-sm-6 login-section-wrapper">
                    <div className="brand-wrapper">
                    </div>  
                    <div className="login-wrapper my-auto">
                        <h1 className="login-title">{ register ? 'Sign Up' : 'Log in'}</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="email@example.com"
                                    onChange={ setUserData }
                                    value = { user.email }
                                    />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="enter your passsword"
                                    onChange={ setUserData }
                                    value = { user.password }
                                    />
                            </div>
                            {
                                register ? 
                                    <button
                                        name="signup"
                                        id="signup"
                                        className="btn btn-block login-btn"
                                        onClick={ signUp }
                                        >
                                            Signup
                                        </button> 
                                        :
                                    <>
                                        <button
                                            name="login"
                                            id="login"
                                            className="btn btn-block login-btn"
                                            onClick={logIn}
                                            >
                                                Login
                                            </button> 
                                        <a href="#!" className="forgot-password-link">Forgot password?</a>
                                        <p className="login-wrapper-footer-text">Don't have an account?
                                            <a href="#!" className="text-reset" onClick={ () => setRegister(true) }>Register here</a>
                                        </p>
                                    </>
                            }
                    </div>
                </div>
                <div className="col-sm-6 px-0 d-none d-sm-block">
                    <img src="https://image.freepik.com/foto-gratis/hombre-haciendo-trucos-skate-parque_23-2148259455.jpg" alt="login image" className="login-img"/>
                </div>
            </div>
    );
};

export default Login;
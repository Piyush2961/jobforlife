import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./styles.css";
const Login = (props) => {

    const{ 
           setEmail,
           setPassword, 
           handleLogin, 
           handleSignup, 
           hasAccount, 
           setHasAccount, 
           emailError, 
           passwordError 
        } = props;

    return(
        <section className="login">
            <div className="loginContainer">
                <heading>Job<spam>ForLife</spam></heading>
                <br></br>
                <label>Email Id<spam>*</spam></label>
                <input 
                  type="text" 
                  autoFocus 
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password<spam>*</spam></label>
                <input 
                  type="password"  
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>
                            Don't have a Account ? 
                            <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                        </p>
                        </>
                    ) : (
                        <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p>
                            Have an account ? 
                            <span onClick={() => setHasAccount(!hasAccount)}> Sign in</span>
                        </p>
                        </>
                    )}
                </div>
                <icons className="MyIcons">
                <a href="https://github.com/" target="_blank"><FaGithub/></a>&nbsp;&nbsp;
                <a href="https://www.linkedin.com/home" target="_blank"><FaLinkedinIn/></a>&nbsp;&nbsp;
                <a href="https://ads.twitter.com/login" target="_blank"><FaTwitter/></a>&nbsp;&nbsp;
                <a href="https://www.instagram.com/" target="_blank"><FaInstagram/></a>&nbsp;&nbsp;
                <a href="https://www.facebook.com/" target="_blank"><FaFacebook/></a>
                </icons>
            </div>
        </section>
    )
};

export default Login;

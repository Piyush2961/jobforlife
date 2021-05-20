import React from 'react';

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
                <label>Username</label>
                <input 
                  type="text" 
                  autoFocus 
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
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
                            <spam onClick={() => setHasAccount(!hasAccount)}> Sign in</spam>
                        </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
};

export default Login;
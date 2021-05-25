import React, { useState, useEffect } from "react";
import fire from "./fire";
import Login from "./Login";
import Hero from "./Hero";
import "./App.css";
import Loader from "react-loader-spinner";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("false");
  const [loading, setLoading] = useState(true);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    setLoading(true);
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(()=>setLoading(false))
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            console.log(err.message);
        }
      
      });
  };

  const handleSignup = () => {
    clearErrors();
    setLoading(true);
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(()=>setLoading(false))
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
            console.log(err.message);
        }
      });
  };

  const handleLogout = () => {
    setLoading(true);
    fire
      .auth()
      .signOut()
      .then(()=>setLoading(false))
      .catch((err) => {
        console.log(err);
      });
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
    setLoading(false);
  }, []);

  console.log(user, "user");

  return (
    <div className="App">
      <Loader
        type="Puff"
        type="Bars"
        color="#603bbb"
        height={80}
        width={80}
        visible={loading}
        className="loader"
      />
      {user ? (
        <Hero handleLogout={handleLogout} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
};

export default App;

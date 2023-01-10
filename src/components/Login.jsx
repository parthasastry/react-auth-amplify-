import React, { useState } from "react";
import { Auth } from "aws-amplify";

const Login = () => {
  const [signedinUser, setSignedInUser] = useState({});

  const signin = async () => {
    try {
      const user = await Auth.signIn(
        "parthasarathy.sastry@gmail.com",
        "#Test123"
      );
      console.log(user);
      setSignedInUser(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Login</h1>
      <button onClick={signin}>Login</button>
      <p>{signedinUser.username} signedin</p>
    </>
  );
};

export default Login;

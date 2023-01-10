import React, { useState } from "react";
import { Auth } from "aws-amplify";

const Logout = () => {
  const [msg, setMsg] = useState("");
  const [signedinUser, setSignedInUser] = useState({});

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user);
      setSignedInUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      const result = await Auth.signOut();
      console.log(result);
      setMsg(result);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return (
    <>
      <button onClick={checkUser}>Check User</button>
      {signedinUser ? (
        <button onClick={signOut}>Logout</button>
      ) : (
        <p>User has logged out</p>
      )}

      <p>{msg}</p>
    </>
  );
};

export default Logout;

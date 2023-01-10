import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";

const App = () => {
  return (
    <>
      <h1>Amplify Auth</h1>
      <Register />
      <hr />
      <Login />
      <hr />
      <Logout />
    </>
  );
};

export default App;

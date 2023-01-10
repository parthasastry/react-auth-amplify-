import { Auth } from "aws-amplify";
import { useState } from "react";

const Register = () => {
  const [newuser, setNewuser] = useState({});
  const [confirm, setConfirm] = useState(false);

  const signup = async () => {
    try {
      const { user } = await Auth.signUp({
        username: "parthasarathy.sastry@gmail.com",
        password: "#Test123",
        atributes: {
          email: "parthasarathy.sastry@gmail.com",
        },
      });
      console.log(user);
      setNewuser(user);
    } catch (error) {
      console.log(error);
    }
  };

  async function confirmSignUp() {
    try {
      const result = await Auth.confirmSignUp(
        "parthasarathy.sastry@gmail.com",
        "682244"
      );
      console.log(result);
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }
  return (
    <>
      <h1>Register</h1>
      <button onClick={signup}>Register</button>
      <div>{newuser.username} registered</div>

      <h1>Confirm SignUp</h1>
      <button onClick={confirmSignUp}>Confirm</button>
      <div>{newuser.username} registered</div>
    </>
  );
};

export default Register;

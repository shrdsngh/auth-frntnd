import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { toast } from "react-toastify";

// function getUsers() {
//   toast.info("🦄 Wow so easy!", {
//     position: "top-right",
//     autoClose: 2000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "light",
//     // transition: Bounce,
//   });
// }

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup() {
    return navigate("/signup");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      return toast.warn("Provide the required credentials!");
    }

    await axios
      .post("http://localhost:4545/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          toast.success("authorized!");

          localStorage.setItem("user", email);

          return navigate("/home");
        }
      })
      .catch((err) => {
        toast.error(err.response.data);
      })
      .finally(() => {
        setEmail("");
        setPassword("");
      });
  }

  return (
    <div>
      <Form className="container mt-5" onSubmit={handleSubmit} method="POST">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <Form.Text className="text-muted">
            We will never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div className="container my-2">
        <span>New user?</span>
        <button
          className="btn btn-info m-2 shadow-lime-200 rounded-e-sm"
          onClick={handleSignup}
        >
          Sign Up!
        </button>
      </div>
    </div>
  );
}

export default Login;

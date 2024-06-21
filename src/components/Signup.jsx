import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  function handleLogin() {
    return navigate("/login");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return toast.warn("enter the field values");

    if (password.length < 6) return toast.error("minimum 6 digits password!");

    if (password !== confirmPass) return toast.error("password did not match!");

    await axios
      .post("http://localhost:4545/signup", { email, password })
      .then((res) => {
        console.log(res);

        if (res.data === "new user created!") {
          toast.success(res.data);

          return navigate("/login");
        }

        return toast.warn(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Form className="container mt-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We will never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div className="container my-2">
        <span>Back to</span>
        <button className="btn btn-success m-2" onClick={handleLogin}>
          Login!
        </button>
      </div>
    </div>
  );
}

export default Signup;

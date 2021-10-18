import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

function AddUser() {

  
  
        const LoginRequest = async (email, password, setter) => {
        try {
          console.log("fetch invoked");
          const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });
      
          const data = await response.json();
          setter(data.username);
          console.log(data.username);
        } catch (error) {
          console.log(error);
        }
      };


    const Login = ({ email, password, setEmail, setPassword, setUsername, setUser }) => {
        const submitHandler = async (e) => {
          e.preventDefault();
          await LoginRequest(email, password, setUser);
      
          setEmail("");
          setPassword("");
        };

  return (
    <form >
      <Form.Group>
        <Form.Control
          type="text"
          placeholder=" Username "
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder=" Email Address "
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder=" Password "
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="success" type="submit" block="true" onSubmit={submitHandler}>
        Add User
      </Button>
    </form>
  );
}
}


export default AddUser;

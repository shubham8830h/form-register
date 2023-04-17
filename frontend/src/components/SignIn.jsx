import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import googleOneTap from "google-one-tap";

const options = {
  client_id: "842417619402-2ps6bdm49eij339ntjntju5", // required
  auto_select: false, // optional
  cancel_on_tap_outside: false, // optional
  context: "signin", // optional
};

const SignIn = () => {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  useEffect(() => {
    if (!loginData) {
      googleOneTap(options, async (response) => {
        console.log(response);
        const res = await fetch("/api/google-login", {
          method: "POST",
          body: JSON.stringify({
            token: response.credential,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        setLoginData(data);
        localStorage.setItem("loginData", JSON.stringify(data));
      });
    }
  }, [loginData]);

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>Welcome back to smile.</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember this device" />
          </Form.Group>
          <Container>
            {" "}
            <Button
              className="btn btn-primary btn-lg btn-block"
              variant="primary"
              type="submit"
            >
              SignIn
            </Button>
            <h1>Implement "Google One-Tap Login" In React and Node.js</h1>
            <div>
              {!loginData ? (
                <div>
                  <h3>hii
                    {loginData}
                    {/* You {loginData.name} logged in as basir.jaarzadeh@gmail.com */}
                  </h3>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <div>Not logged in</div>
              )}
            </div>
          </Container>
        </Form>
      </Container>
    </div>
  );
};

export default SignIn;

import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/config";
function Extra() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Access the newly created user
      const user = userCredential.user;

      // Do something with the user, such as redirecting to a success page
      console.log("Signup successful:", user);
    } catch (error) {
      // Handle signup errors
      console.error("Signup failed:", error.message);
    }
  };

  const handleFormLogin = async () => {
    try {
      const userLogin = await signInWithEmailAndPassword(auth, email, password);

      const loginUser = userLogin.user;
      console.log("login successfully", loginUser);
    } catch (err) {
      console.log("login failed");
    }
  };

  return (
    <div>
      <h4>Sign Up</h4>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleForm}>Sign up</button>
      <button onClick={handleFormLogin}>Login</button>
    </div>
  );
}

export default Extra;

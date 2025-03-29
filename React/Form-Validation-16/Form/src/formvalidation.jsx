import React, { useState } from "react";

export const FormValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [passerr, setPassError] = useState(false);

  function formData(e) {
    e.preventDefault(); // Move this to the start to prevent unwanted behavior

    if (email.length < 5 || password.length < 5) {
      alert("Please fill correctly");
    } else {
      alert("Thank you");
    }
  }

  function emailHandler(e) {
    let Element = e.target.value;
    setEmail(Element); 

    if (Element.length < 5) {
      console.log("Minimum 5 characters required");
      setError(true);
    } else {
      setError(false);
    }
  }

  function passHandler(e) {
    let Element = e.target.value;
    setPassword(Element); // Fix: Call setPassword correctly

    if (Element.length < 5) {
      setPassError(true);
    } else {
      setPassError(false);
    }
  }

  return (
    <>
      <h1>Basic Form</h1>
      <form onSubmit={formData}>
        <input
          type="text"
          placeholder="Enter email"
          onChange={emailHandler}
        />
        {error ? (
          <span style={{ color: "red" }}>Minimum 5 characters required</span>
        ) : null}

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter password"
          onChange={passHandler}
        />
        {passerr ? (
          <span style={{ color: "red" }}>Minimum 5 characters required</span>
        ) : null}

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormValidation;

import React, { useState } from "react";

const Signup = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (key, value) => {
    setState({ ...state, [key]: value });
  };

  const handleSubmit = () => {
    alert(state.username + state.password);
  };

  return (
    <div>
      <p>username: {state.username}</p>
      <p>password: {state.password}</p>
      <form>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => handleChange("username", e.target.value)}
          value={state.username || ""}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => handleChange("password", e.target.value)}
          value={state.password || ""}
        />
        <button onClick={handleSubmit}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;

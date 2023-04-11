import React, { useState } from "react";
import validation from "../Validation/validation";

const Form = ({ login }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default Form;

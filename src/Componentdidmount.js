import React, { useState, useEffect } from "react";
import { useForm } from "./useForm";
import { render } from "react-dom";

export const Componentdidmount = () => {
  const [val, handleChange] = useForm({
    username: "",
    email: "",
    password: ""
  });

  // useEffect must below the defined useState.
  useEffect(() => {
    // console.log("render from componentdidmount'll render once")
  }, []);

  // console.log(val.username, val.email, val.password);
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">Componentdidmount</span>
      </div>
      <input
        className="form-control"
        placeholder="username"
        type="text"
        name="username"
        value={val.username}
        onChange={handleChange}
      />
      <input
        className="form-control"
        placeholder="email"
        type="email"
        name="email"
        id="email1"
        value={val.email}
        onChange={handleChange}
      />
      <input
        className="form-control"
        placeholder="password"
        type="password"
        name="password"
        value={val.password}
        onChange={handleChange}
      />
    </div>
  );
};

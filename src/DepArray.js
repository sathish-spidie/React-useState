import React, { useEffect } from "react";
import { useForm } from "./useForm";

export const DepArray = () => {
  const [val, handleChange] = useForm({
    username: "",
    email: "",
    password: ""
  });
  useEffect(() => {
    // console.log("render from dep'll renders changes on user&email");
  }, [val.username, val.email]);
  // console.log(val.username, val.email, val.password);
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">DepArray</span>
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

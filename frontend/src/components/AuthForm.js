import React, { useState } from "react";

const AuthForm = ({ type, handleSubmit }) => {
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">{type === "signup" ? "Sign Up" : "Log In"}</h2>
      <form onSubmit={onSubmit}>
        {type === "signup" && (
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your name"
              onChange={onChange}
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your email"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your password"
            onChange={onChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {type === "signup" ? "Sign Up" : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;

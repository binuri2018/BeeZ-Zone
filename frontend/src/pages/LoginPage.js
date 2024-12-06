import React from "react";
import AuthForm from "../components/AuthForm";
import axios from "axios";

const LoginPage = () => {
  const handleLogin = async (formData) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);
      alert("Login Successful!");
      localStorage.setItem("token", response.data.token); // Save JWT
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed!");
    }
  };

  return <AuthForm type="login" handleSubmit={handleLogin} />;
};

export default LoginPage;

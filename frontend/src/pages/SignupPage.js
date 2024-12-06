import React from "react";
import AuthForm from "../components/AuthForm";
import axios from "axios";

const SignupPage = () => {
  const handleSignup = async (formData) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert("Signup Successful!");
      localStorage.setItem("token", response.data.token); // Save JWT
    } catch (error) {
      alert(error.response?.data?.message || "Signup Failed!");
    }
  };

  return <AuthForm type="signup" handleSubmit={handleSignup} />;
};

export default SignupPage;

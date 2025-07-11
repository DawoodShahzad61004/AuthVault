import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../subcomponents/inputField";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: formData.email.trim(),
      password: formData.password,
      rememberMe: document.getElementById("remember").checked,
    };
    console.log("Payload submitted:", payload);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#3b5bff] to-[#4d47ff] flex flex-col justify-center items-center shadow-xl text-white p-10">
        <h2 className="text-3xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[75%]">
          <InputField
            label="Email"
            name="email"
            type="text"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            labelWidth="w-[15%]"
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            labelWidth="w-[23%]"
          />

          <div className="flex items-center gap-2 text-sm mt-1">
            <input type="checkbox" id="remember" className="accent-white" />
            <label htmlFor="remember" className="text-white">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="bg-white text-[#3b5bff] font-semibold mt-2 ml-[25%] px-6 py-2 rounded-md hover:bg-gray-200 transition-all w-[10rem]"
          >
            Go
          </button>
        </form>

        <div className="text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="underline text-white font-medium">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InputField from "../subcomponents/inputField";
import BackgroundAnimations from "../subcomponents/BackgroundAnimation";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [bubbles, setBubbles] = useState([]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    const createBubble = () => {
      const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      let startX, startY, endX, endY;

      switch (side) {
        case 0: // from top
          startX = Math.random() * 100;
          startY = -10;
          endX = startX + (Math.random() - 0.5) * 30;
          endY = 110;
          break;
        case 1: // from right
          startX = 110;
          startY = Math.random() * 100;
          endX = -10;
          endY = startY + (Math.random() - 0.5) * 30;
          break;
        case 2: // from bottom
          startX = Math.random() * 100;
          startY = 110;
          endX = startX + (Math.random() - 0.5) * 30;
          endY = -10;
          break;
        case 3: // from left
          startX = -10;
          startY = Math.random() * 100;
          endX = 110;
          endY = startY + (Math.random() - 0.5) * 30;
          break;
      }

      const bubble = {
        id: Math.random(),
        startX,
        startY,
        endX,
        endY,
        size: Math.random() * 40 + 20, // 20-60px base size
        maxSize: Math.random() * 80 + 40, // 40-120px max size
        duration: Math.random() * 15 + 10, // 10-25 seconds for slow floating
        delay: Math.random() * 3,
        opacity: Math.random() * 0.4 + 0.2, // 0.2-0.6 opacity
        blur: Math.random() * 1.5 + 0.5, // 0.5-2px blur
        createdAt: Date.now(),
      };
      return bubble;
    };

    const generateInitialBubbles = () => {
      const newBubbles = Array.from({ length: 100 }, createBubble);
      setBubbles(newBubbles);
    };

    generateInitialBubbles();

    // Add MORE new bubbles more frequently (4 bubbles every 500ms instead of 2 every 1000ms)
    const interval = setInterval(() => {
      setBubbles((prev) => {
        const filtered = prev.filter(
          (bubble) =>
            Date.now() - bubble.createdAt <
            (bubble.duration + bubble.delay) * 10000
        );
        const newBubbles = Array.from({ length: 10 }, createBubble);
        return [...filtered, ...newBubbles];
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

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
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.startX}%`,
            top: `${bubble.startY}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: `radial-gradient(circle at 35% 35%, rgba(139, 92, 246, ${
              bubble.opacity
            }), rgba(99, 102, 241, ${
              bubble.opacity * 0.8
            }), rgba(59, 130, 246, ${bubble.opacity * 0.6}))`,
            filter: `blur(${bubble.blur}px)`,
            animation: `floatBubble ${bubble.duration}s ease-in-out infinite`,
            animationDelay: `${bubble.delay}s`,
            boxShadow: `0 0 30px rgba(99, 102, 241, ${bubble.opacity * 0.2})`,
            "--start-x": `${bubble.startX}%`,
            "--start-y": `${bubble.startY}%`,
            "--end-x": `${bubble.endX}%`,
            "--end-y": `${bubble.endY}%`,
            "--max-size": `${bubble.maxSize}px`,
          }}
        />
      ))}

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes floatBubble {
            0% {
              transform: translate(0, 0) scale(0.3);
              opacity: 0;
            }
            15% {
              opacity: 1;
              transform: translate(calc((var(--end-x) - var(--start-x)) * 0.15), calc((var(--end-y) - var(--start-y)) * 0.15)) scale(0.6);
            }
            50% {
              transform: translate(calc((var(--end-x) - var(--start-x)) * 0.5), calc((var(--end-y) - var(--start-y)) * 0.5)) scale(1);
              opacity: 1;
            }
            85% {
              transform: translate(calc((var(--end-x) - var(--start-x)) * 0.85), calc((var(--end-y) - var(--start-y)) * 0.85)) scale(1.2);
              opacity: 1;
            }
            100% {
              transform: translate(calc(var(--end-x) - var(--start-x)), calc(var(--end-y) - var(--start-y))) scale(0.8);
              opacity: 0;
            }
          }
        `,
        }}
      />

      <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#3b5bff] to-[#4d47ff] flex flex-col justify-center items-center shadow-xl text-white p-10 z-10">
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

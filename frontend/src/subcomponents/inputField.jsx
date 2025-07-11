import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

const InputField = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  labelWidth,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";

  return (
    <div className="flex flex-col gap-1">
      <div className={`bg-white p-2 rounded-md inline-block ${labelWidth}`}>
        <label htmlFor={name} className="text-sm text-gray-700 font-semibold">
          {label}
        </label>
      </div>
      <div className="bg-white rounded-md flex items-center border border-gray-300 px-2">
        <input
          type={isPasswordField && !showPassword ? "password" : "text"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="flex-1 px-2 py-2 text-gray-800 bg-white placeholder-gray-400 focus:outline-none"
          required
        />
        {isPasswordField && (
          <IconButton
            onClick={() => setShowPassword(!showPassword)}
            edge="end"
            size="small"
            sx={{ color: "#3b5bff" }}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default InputField;

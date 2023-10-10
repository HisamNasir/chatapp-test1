"use client";
import React from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="flex gap-2 border  transition-all duration-100 px-2 py-1 bg-gray-500 bg-opacity-25 text-sm items-center md:text-sm rounded-lg "
    >
      <FaSun /> / <FaMoon />
    </button>
  );
};

export default DarkModButton;
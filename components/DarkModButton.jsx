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
      className="bg-gray-800 flex dark:bg-gray-50 hover:bg-gray-600 gap-2 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-2 py-1 text-sm items-center md:text-sm rounded-lg "
    >
      <FaSun /> / <FaMoon />
    </button>
  );
};

export default DarkModButton;

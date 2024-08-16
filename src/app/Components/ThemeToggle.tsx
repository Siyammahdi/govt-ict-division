// src/components/ThemeToggle.tsx
"use client";

import { Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "light" | "dark") || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="m-8">
      <Switch
        isSelected={theme === "dark"}  // Bind the switch state to the theme
        onChange={toggleTheme}         // Toggle theme on switch change
        size="md"
        color="secondary"
        startContent={<LuSun />}
        endContent={<FaMoon />}
      />
    </div>
  );
}

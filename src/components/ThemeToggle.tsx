"use client";

import { useState, useEffect, FC, useRef } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const options = [
    {
      icon: (
        <Sun  />
      ),
      value: "light",
      description: "Light",
    },
    {
      icon: (
        <Moon  />
      ),
      value: "dark",
      description: "Dark",
    },
    {
      icon: <Laptop  />,
      value: "system",
      description: "System",
    },
  ];

  const getActiveIcon = () => {
    if (theme === "light") {
      return <Sun className="text-[#38BDF8] " />;
    } else if (theme === "dark") {
      return <Moon className="text-[#38BDF8] " />;
    } else if (theme === "system") {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (prefersDark) {
        return<Moon className="text-[#38BDF8] " />;
      } else {
        return <Sun className="text-[#38BDF8]" />;
      }
    }
  };

  const toggleTheme = (value: string) => {
    setTheme(value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setMounted(true);
  });

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div ref={dropdownRef} className="relative inline-block my-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="outline-none flex items-center "
        >
          {getActiveIcon()}
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-4 w-40  rounded-md bg-white shadow-lg dark:bg-slate-800">
            <div role="menu" aria-orientation="vertical">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    toggleTheme(option.value);
                    setIsOpen(false);
                  }}
                  className={`block w-full rounded-md px-4 py-2 ${
                    theme === option.value
                      ? "bg-white dark:bg-transparent dark:hover:bg-slate-700 text-[#38BDF8] font-semibold"
                      : "text-black hover:bg-slate-100 dark:text-white  dark:hover:bg-slate-700 font-semibold"
                  }`}
                  role="menuitem"
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={
                        theme === option.value
                          ? "text-[#38BDF8] dark:text-[#38BDF8] "
                          : "text-black dark:text-white"
                      }
                    >
                      {option.icon}
                    </span>
                    <span>{option.description}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ThemeToggle;

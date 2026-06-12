"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{
                scale: 0.85,
                rotate: 180,
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
            }}
        >
            <Button
                variant="outline"
                size="icon"
                className="relative h-6 p-3 w-6 overflow-hidden rounded-full"
                onClick={toggleTheme}
            >
                <Sun
                    className="
                        h-[1.2rem] w-[1.2rem]
                        rotate-0 scale-100
                        transition-all duration-500
                        dark:-rotate-90 dark:scale-0
                    "
                />

                <Moon
                    className="
                        absolute
                        h-[1.2rem] w-[1.2rem]
                        rotate-90 scale-0
                        transition-all duration-500
                        dark:rotate-0 dark:scale-100
                    "
                />

                <span className="sr-only">Toggle theme</span>
            </Button>
        </motion.div>
    );
}

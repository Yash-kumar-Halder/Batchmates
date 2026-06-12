"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function ScrollIndicator() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY < 50);
            // console.log(window.scrollY);
        };


        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 1,
                            duration: 1,
                        },
                    }}
                    exit={{
                        opacity: 0,
                        y: 20,
                        transition: {
                            delay: 0.3,
                            duration: 0.5,
                        },
                    }}
                    onClick={() => {
                        window.scrollTo({
                            top: window.innerHeight,
                            behavior: "smooth",
                        });
                    }}
                    className="absolute bottom-2 lg:bottom-10 left-1/2 z-30 -translate-x-1/2 cursor-pointer scale-[0.6] lg:scale-90"
                    aria-label="Scroll Down"
                >
                    <motion.div
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="flex flex-col items-center gap-3"
                    >
                        <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                            Scroll
                        </span>

                        <div className="flex h-12 w-7 justify-center rounded-full border border-neutral-500">
                            <motion.div
                                animate={{
                                    y: [0, 14, 0],
                                }}
                                transition={{
                                    duration: 1.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="mt-2 h-2 w-2 rounded-full bg-orange-400"
                            />
                        </div>
                    </motion.div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}

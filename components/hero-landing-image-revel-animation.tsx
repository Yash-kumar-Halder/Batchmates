"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Caramel, Oregano } from "next/font/google";
import HeroLandingGroupPhoto from "@/public/hero-landing-group-photo.jpeg";
import { Play, Pause } from "lucide-react";

const caramel = Caramel({
    subsets: ["latin"],
    weight: ["400"],
});
const oregano = Oregano({
    subsets: ["latin"],
    weight: ["400"],
});

type Point = {
    x: number;
    y: number;
    radius: number;
};

export default function LiquidRevealHero() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const loopRef = useRef<((e: Event) => void) | null>(null);
    const isPlayingRef = useRef(false);
    const startRef = useRef(19);
    const endRef = useRef(63);
    const [isPlaying, setIsPlaying] = useState(false);

    // const playSegment = async () => {
    //     const audio = audioRef.current;
    //     if (!audio) return;

    //     const start = startRef.current;
    //     const end = endRef.current;

    //     audio.volume = 0.5;

    //     isPlayingRef.current = true;
    //     setIsPlaying(true); // 👈 UI update

    //     if (
    //         !audio.currentTime ||
    //         audio.currentTime < start ||
    //         audio.currentTime >= end
    //     ) {
    //         audio.currentTime = start;
    //     }

    //     await audio.play();

    //     const loop = () => {
    //         if (!isPlayingRef.current) return;

    //         if (audio.currentTime >= end) {
    //             audio.currentTime = start;
    //         }
    //     };

    //     audio.addEventListener("timeupdate", loop);
    //     loopRef.current = loop;
    // };

    const toggleAudio = async () => {
        const audio = audioRef.current;
        if (!audio) return;

        const start = startRef.current;
        const end = endRef.current;

        audio.volume = 0.5;

        // 👉 PAUSE
        if (isPlayingRef.current) {
            isPlayingRef.current = false;
            setIsPlaying(false);

            audio.pause();

            if (loopRef.current) {
                audio.removeEventListener("timeupdate", loopRef.current);
            }

            return;
        }

        // 👉 PLAY / RESUME
        isPlayingRef.current = true;
        setIsPlaying(true);

        if (audio.currentTime < start || audio.currentTime >= end) {
            audio.currentTime = start;
        }

        await audio.play();

        const loop = () => {
            if (!isPlayingRef.current) return;

            if (audio.currentTime >= end) {
                audio.currentTime = start;
            }
        };

        audio.addEventListener("timeupdate", loop);
        loopRef.current = loop;
    };

    const [trail, setTrail] = useState<Point[]>([]);

    const frameRef = useRef<number | null>(null);
    const svgRef = useRef<SVGSVGElement | null>(null);

    const previousMouse = useRef({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (frameRef.current) return;

            frameRef.current = requestAnimationFrame(() => {
                if (!svgRef.current) return;

                const svg = svgRef.current;
                const rect = svg.getBoundingClientRect();

                // convert to SVG space
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const dx = x - previousMouse.current.x;
                const dy = y - previousMouse.current.y;

                const velocity = Math.sqrt(dx * dx + dy * dy);

                previousMouse.current = { x, y };

                const radius = 160;

                setTrail((prev) => [{ x, y, radius }, ...prev].slice(0, 12));

                frameRef.current = null;
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section className="relative h-screen overflow-hidden bg-background">
            <svg
                ref={svgRef}
                className="pointer-events-none absolute inset-0 h-full w-full"
                width="100%"
                height="100%"
            >
                <defs>
                    <filter id="goo">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="35"
                            result="blur"
                        />

                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="
                                1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 40 -12
                            "
                            result="goo"
                        />

                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>

                    <mask id="liquid-mask">
                        <rect width="100%" height="100%" fill="black" />

                        {/* Static SVG Reveal */}
                        <image
                            href="/masks/mask.webp"
                            x="40%"
                            y="0%"
                            width="1700"
                            height="1000"
                            scale={5}
                            preserveAspectRatio="xMidYMid meet"
                            transform="translate(-550 -225)"
                            className="border border-red-500"
                        />
                        <image
                            href="/masks/mask.webp"
                            x="40%"
                            y="-3%"
                            width="1700"
                            height="1000"
                            scale={5}
                            preserveAspectRatio="xMidYMid meet"
                            transform="translate(-550 -225)"
                            className="border border-red-500 md:hidden"
                        />
                        <image
                            href="/masks/mask.webp"
                            x="40%"
                            y="-3%"
                            width="1700"
                            height="1000"
                            scale={5}
                            preserveAspectRatio="xMidYMid meet"
                            transform="translate(-550 -225)"
                            className="border border-red-500 md:hidden"
                        />

                        {/* Mouse Reveal */}
                        <g filter="url(#goo)">
                            {trail.map((point, index) => (
                                <circle
                                    key={index}
                                    cx={point.x}
                                    cy={point.y}
                                    r={Math.max(point.radius - index * 10, 0)}
                                    fill="white"
                                />
                            ))}
                        </g>
                    </mask>
                </defs>
            </svg>

            {/* <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                width="100%"
                height="100%"
            >
                <defs>
                    <mask id="wave-mask">
                        <rect width="100%" height="100%" fill="black" />

                        <path
                            d="
                    M 0 600
                    C 250 500, 450 700, 700 600
                    C 900 500, 1150 700, 1440 550
                    L 1440 900
                    L 0 900
                    Z
                "
                            fill="white"
                        />
                    </mask>
                </defs>
            </svg> */}

            <div className="absolute inset-0 bg-background" />

            <div
                className="absolute inset-0"
                style={{
                    mask: "url(#liquid-mask)",
                    WebkitMask: "url(#liquid-mask)",
                }}
            >
                <Image
                    src={HeroLandingGroupPhoto}
                    alt="Group Image"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <audio ref={audioRef} src="/audio/kahani.mp3" loop />

            <div className="relative z-20 flex h-full items-center justify-center mt-44">
                <div className="text-center">
                    <motion.h3
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1.4,
                            delay: 0.4,
                            ease: "easeOut",
                        }}
                        className={`${caramel.className} text-2xl lg:text-4xl tracking-wide text-orange-400 my-6 `}
                    >
                        A Jurney We&apos;ll Always Carry
                    </motion.h3>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1.2,
                            delay: 0.8,
                            ease: "easeOut",
                        }}
                        className={`${oregano.className} text-6xl lg:text-9xl font-bold`}
                    >
                        Batch 2k23-26
                    </motion.h1>

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 1.2,
                            ease: "easeOut",
                        }}
                        className="mt-4 text-xs lg:text-md text-neutral-500 px-10"
                    >
                        Three unforgettable years filled with friendships,{" "}
                        <br />
                        laughter, lessons, and memories that shaped our journey
                        and will stay with us forever.
                    </motion.p>
                    <motion.div
                        className="border rounded-md px-4 py-2 absolute mt-2 right-1/2 translate-x-1/2 z-30 cursor-pointer bg-white dark:bg-black flex items-center gap-2 text-xs lg:text-base"
                        onClick={toggleAudio}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div
                            key={isPlaying ? "pause" : "play"}
                            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            transition={{ duration: 0.25 }}
                        >
                            {isPlaying ? (
                                <Pause
                                    size={18}
                                    className="scale-80 md:scale-100"
                                />
                            ) : (
                                <Play
                                    size={18}
                                    className="scale-80 md:scale-100"
                                />
                            )}
                        </motion.div>

                        <span>{isPlaying ? "Pause song" : "Play song"}</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

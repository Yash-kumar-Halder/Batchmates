export default function Mouse3DIcon() {
    return (
        <svg
            width="60"
            height="60"
            viewBox="0 0 64 64"
            className="text-gray-800 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                {/* body gradient */}
                <radialGradient id="mouseBody" cx="50%" cy="40%" r="60%">
                    <stop
                        offset="0%"
                        stopColor="currentColor"
                        stopOpacity="0.9"
                    />
                    <stop
                        offset="60%"
                        stopColor="currentColor"
                        stopOpacity="0.6"
                    />
                    <stop
                        offset="100%"
                        stopColor="currentColor"
                        stopOpacity="0.2"
                    />
                </radialGradient>

                {/* shadow */}
                <filter id="shadow">
                    <feDropShadow
                        dx="0"
                        dy="2"
                        stdDeviation="3"
                        floodOpacity="0.3"
                    />
                </filter>
            </defs>

            {/* mouse body */}
            <ellipse
                cx="32"
                cy="32"
                rx="14"
                ry="22"
                fill="url(#mouseBody)"
                filter="url(#shadow)"
            />

            {/* scroll wheel */}
            <rect
                x="30"
                y="20"
                width="4"
                height="10"
                rx="2"
                fill="currentColor"
                opacity="0.7"
            />

            {/* highlight */}
            <ellipse
                cx="28"
                cy="26"
                rx="4"
                ry="8"
                fill="white"
                opacity="0.15"
            />
        </svg>
    );
}

"use client";

import LenisProvider from "./lenis-provider";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <LenisProvider>
                {children}
                </LenisProvider>
        </ThemeProvider>
    );
}

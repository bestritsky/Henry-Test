"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type HypeMode = "vision" | "reality";

interface HypeContextType {
    mode: HypeMode;
    toggleMode: () => void;
    isReality: boolean;
}

const HypeContext = createContext<HypeContextType | undefined>(undefined);

export function HypeProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<HypeMode>("vision");

    const toggleMode = () => {
        setMode((prev) => (prev === "vision" ? "reality" : "vision"));
    };

    return (
        <HypeContext.Provider
            value={{
                mode,
                toggleMode,
                isReality: mode === "reality",
            }}
        >
            {children}
        </HypeContext.Provider>
    );
}

export function useHype() {
    const context = useContext(HypeContext);
    if (context === undefined) {
        throw new Error("useHype must be used within a HypeProvider");
    }
    return context;
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useHype } from "@/context/HypeContext";
import { cn } from "@/lib/utils";
import { Shield, Zap, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const { isReality, toggleMode } = useHype();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 reality-transition",
                scrolled
                    ? "bg-void-black/80 backdrop-blur-xl border-b border-white/5 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-lg bg-photon-blue/10 border border-photon-blue/20 flex items-center justify-center group-hover:border-photon-blue/50 transition-colors">
                            <span className="text-photon-blue font-bold text-xl">HB</span>
                        </div>
                        <div className="absolute -inset-1 bg-photon-blue/20 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-display font-bold text-lg tracking-tight">Henry Bestritsky</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-photon-blue/60 font-mono">
                            {isReality ? "Protocol: Reality" : "Protocol: Vision"}
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="#services">Services</NavLink>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#insights">Insights</NavLink>

                    <div className="h-6 w-px bg-white/10" />

                    {/* Hype Switch */}
                    <button
                        onClick={toggleMode}
                        className="relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-all group overflow-hidden"
                    >
                        <div className={cn(
                            "absolute inset-0 bg-gradient-to-r from-photon-blue/20 to-photon-purple/20 transition-opacity duration-500",
                            isReality ? "opacity-0" : "opacity-100"
                        )} />
                        <div className={cn(
                            "absolute inset-0 bg-matrix-green/10 transition-opacity duration-500",
                            isReality ? "opacity-100" : "opacity-0"
                        )} />

                        <div className="relative flex items-center gap-2">
                            <Zap className={cn("w-3.5 h-3.5 transition-colors", isReality ? "text-matrix-green" : "text-photon-blue")} />
                            <span className="text-xs font-mono font-medium uppercase tracking-wider">
                                {isReality ? "REALITY" : "VISION"}
                            </span>
                        </div>
                    </button>

                    <Link
                        href="#contact"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-photon-blue text-white font-semibold text-sm hover:scale-105 transition-transform active:scale-95 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                    >
                        <Phone className="w-4 h-4" />
                        Let&apos;s Talk
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-void-black/95 backdrop-blur-2xl border-b border-white/10 py-8 px-6 flex flex-col gap-6 md:hidden"
                    >
                        <MobileNavLink href="#services" onClick={() => setMobileMenuOpen(false)}>Services</MobileNavLink>
                        <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
                        <MobileNavLink href="#insights" onClick={() => setMobileMenuOpen(false)}>Insights</MobileNavLink>
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <span className="text-xs font-mono uppercase text-white/40 tracking-wider">Switch Protocol</span>
                            <HypeToggleButton isReality={isReality} toggleMode={toggleMode} />
                        </div>
                        <Link
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-photon-blue text-white font-bold"
                        >
                            <Phone className="w-4 h-4" />
                            Let&apos;s Talk
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-sm font-medium text-white/60 hover:text-white transition-colors relative group"
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-photon-blue transition-all group-hover:w-full" />
        </Link>
    );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
    return (
        <Link href={href} onClick={onClick} className="text-xl font-display font-medium text-white">
            {children}
        </Link>
    );
}

function HypeToggleButton({ isReality, toggleMode }: { isReality: boolean; toggleMode: () => void }) {
    return (
        <button
            onClick={toggleMode}
            className={cn(
                "relative flex items-center gap-3 px-4 py-2 rounded-lg border transition-all",
                isReality ? "bg-matrix-green/10 border-matrix-green/30 text-matrix-green" : "bg-photon-blue/10 border-photon-blue/30 text-photon-blue"
            )}
        >
            <Zap className="w-4 h-4" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
                {isReality ? "REALITY" : "VISION"}
            </span>
        </button>
    );
}

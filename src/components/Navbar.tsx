"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
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
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
                scrolled
                    ? "bg-void-black/90 backdrop-blur-xl border-b border-white/5 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-lg bg-photon-blue/10 border border-photon-blue/20 flex items-center justify-center group-hover:border-photon-blue/50 transition-colors">
                            <span className="text-photon-blue font-bold text-xl">HB</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-display font-bold text-lg tracking-tight">Henry Bestritsky</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                            AI Strategy & Implementation
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="#services">Services</NavLink>
                    <NavLink href="#msp">For MSPs</NavLink>
                    <NavLink href="#rescue">AI Rescue</NavLink>

                    <div className="h-6 w-px bg-white/10" />

                    <Link
                        href="#contact"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-photon-blue text-white font-semibold text-sm hover:scale-105 transition-transform active:scale-95 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                    >
                        <Phone className="w-4 h-4" />
                        Schedule a Call
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
                        <MobileNavLink href="#msp" onClick={() => setMobileMenuOpen(false)}>For MSPs</MobileNavLink>
                        <MobileNavLink href="#rescue" onClick={() => setMobileMenuOpen(false)}>AI Rescue</MobileNavLink>
                        <Link
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-photon-blue text-white font-bold"
                        >
                            <Phone className="w-4 h-4" />
                            Schedule a Call
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

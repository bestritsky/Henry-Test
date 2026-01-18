"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, TrendingDown, CheckCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-photon-blue/5 blur-[150px] rounded-full" />
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)`,
                        backgroundSize: `60px 60px`
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl">
                    {/* The Hook - 95% Failure Rate */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
                            <TrendingDown className="w-4 h-4 text-red-500" />
                            <span className="text-sm font-semibold text-red-400">
                                95% of enterprise AI projects fail
                            </span>
                        </div>
                        <span className="text-white/30 text-sm hidden sm:inline">— MIT Research, 2025</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
                    >
                        Stop asking{" "}
                        <span className="text-white/40">&ldquo;What AI tool?&rdquo;</span>
                        <br />
                        Start asking{" "}
                        <span className="text-photon-blue">&ldquo;How much can I trust?&rdquo;</span>
                    </motion.h1>

                    {/* Subhead */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl leading-relaxed"
                    >
                        I&apos;ve built and sold a $142M technology company. I&apos;ve seen the wreckage of reckless AI deployments.
                        Now I help executives, MSPs, and PE firms implement AI that actually works—with the skeptical pragmatism
                        that separates transformation from expensive failure.
                    </motion.p>

                    {/* Trust Signals */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-x-8 gap-y-3 mb-12 text-sm text-white/50"
                    >
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-photon-blue" />
                            <span>Former CEO, Binary Tree (Acquired by Quest)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-photon-blue" />
                            <span>25+ Years Enterprise Technology</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-photon-blue" />
                            <span>AI Strategy & Rescue Operations</span>
                        </div>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-start gap-4"
                    >
                        <a
                            href="#services"
                            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-photon-blue text-white font-bold text-lg shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all"
                        >
                            See How I Can Help
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#rescue"
                            className="flex items-center gap-2 px-8 py-4 rounded-xl border border-red-500/30 text-red-400 font-semibold hover:bg-red-500/10 transition-all"
                        >
                            AI Project in Crisis?
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

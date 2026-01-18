"use client";

import React, { useState } from "react";
import { useHype } from "@/context/HypeContext";
import { cn } from "@/lib/utils";
import { Phone, AlertTriangle, ShieldAlert, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function RedPhone() {
    const { isReality } = useHype();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-24 bg-void-black border-y border-white/5 relative overflow-hidden">
            {/* Urgent Pulsing Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 blur-[120px] rounded-full animate-pulse-glow" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/5 text-red-500 mb-8"
                >
                    <ShieldAlert className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-mono font-bold tracking-[0.2em]">Priority Rescue Line</span>
                </motion.div>

                <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto">
                    Is your AI project <span className="text-red-500">bleeding cash</span> or technical credibility?
                </h2>

                <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                    The 95% failure rate is real. If your implementation has stalled, hallucinated into a PR disaster, or exceeded its budget by 3x, trigger the triage protocol.
                </p>

                <button
                    onClick={() => setIsOpen(true)}
                    className="group relative flex items-center justify-center gap-3 mx-auto px-10 py-5 rounded-full bg-red-600 text-white font-bold text-xl shadow-[0_0_50px_rgba(239,68,68,0.3)] hover:scale-105 active:scale-95 transition-all"
                >
                    <Phone className="w-6 h-6 animate-bounce" />
                    INITIATE RESCUE PROTOCOL
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Rescue Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-void-black/90 backdrop-blur-xl"
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-lg bg-[#0d0d11] border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 text-white/40 hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">Triage Report</h3>
                                <p className="text-sm text-white/40 font-mono tracking-tight uppercase underline underline-offset-4 decoration-red-500">Security: TOP SECRET / EXECUTIVE ONLY</p>
                            </div>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Primary Symptom</label>
                                    <select className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-red-500/50">
                                        <option>Stalled Implementation</option>
                                        <option>Technical Debt Explosion</option>
                                        <option>Model Hallucinations/Safety</option>
                                        <option>Total Executive Disconnect</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Monthly AI Burn Rate</label>
                                    <input type="text" placeholder="$0.00" className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-red-500/50" />
                                </div>

                                <div>
                                    <label className="block text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Secure Email/Signal</label>
                                    <input type="email" placeholder="executive@corp.com" className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-red-500/50" />
                                </div>

                                <button className="w-full py-4 rounded-xl bg-red-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all">
                                    SEND SOS
                                </button>
                            </form>

                            <p className="mt-8 text-[10px] text-white/20 text-center uppercase tracking-[0.2em]">
                                End-to-end encrypted protocol. Response time: &lt; 4 hours.
                            </p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}

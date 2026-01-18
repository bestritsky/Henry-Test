"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { AlertTriangle, X, ArrowRight, Clock, DollarSign, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function RedPhone() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id="rescue" className="py-24 bg-void-black relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 blur-[100px] rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 mb-8"
                    >
                        <AlertTriangle className="w-4 h-4" />
                        <span className="text-sm font-semibold">AI Rescue Operations</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl md:text-5xl font-bold mb-6"
                    >
                        Is your AI project <span className="text-red-400">in trouble</span>?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg mb-12 max-w-2xl mx-auto"
                    >
                        Stalled implementation. Ballooning costs. Vendor finger-pointing.
                        The board wants answers. I&apos;ve been in these rooms before.
                        Let&apos;s figure out what&apos;s actually broken and whether it can be saved.
                    </motion.p>

                    {/* Warning Signs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                    >
                        <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                            <Clock className="w-8 h-8 text-red-400/60 mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Timeline Slipping</h3>
                            <p className="text-sm text-white/40">
                                &ldquo;We&apos;re 6 months in and still in &apos;pilot&apos; phase&rdquo;
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                            <DollarSign className="w-8 h-8 text-red-400/60 mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Budget Overrun</h3>
                            <p className="text-sm text-white/40">
                                &ldquo;We&apos;ve spent 3x what was quoted and it still doesn&apos;t work&rdquo;
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                            <Users className="w-8 h-8 text-red-400/60 mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Team Disconnect</h3>
                            <p className="text-sm text-white/40">
                                &ldquo;Nobody can explain why it&apos;s not working&rdquo;
                            </p>
                        </div>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        onClick={() => setIsOpen(true)}
                        className="group flex items-center justify-center gap-3 mx-auto px-10 py-5 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 font-bold text-lg hover:bg-red-500/30 transition-all"
                    >
                        Request Triage Assessment
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>
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
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="relative w-full max-w-lg bg-[#0a0a0c] border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-white/40 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">Triage Request</h3>
                                <p className="text-sm text-white/50">
                                    Tell me what&apos;s happening. I&apos;ll respond within 24 hours with an honest assessment
                                    of whether I can help.
                                </p>
                            </div>

                            <form className="space-y-5">
                                <div>
                                    <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">
                                        What&apos;s the main symptom?
                                    </label>
                                    <select className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-red-500/50 appearance-none">
                                        <option>Implementation has stalled</option>
                                        <option>Costs are out of control</option>
                                        <option>Model outputs are unreliable</option>
                                        <option>Team/vendor conflict</option>
                                        <option>Board/exec pressure</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">
                                        Approximate spend to date
                                    </label>
                                    <select className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-red-500/50 appearance-none">
                                        <option>Under $50K</option>
                                        <option>$50K - $100K</option>
                                        <option>$100K - $250K</option>
                                        <option>$250K - $500K</option>
                                        <option>Over $500K</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="you@company.com"
                                        className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-red-500/50"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl bg-red-500 text-white font-bold hover:bg-red-400 transition-colors"
                                >
                                    Send Request
                                </button>
                            </form>

                            <p className="mt-6 text-[11px] text-white/30 text-center">
                                All information is confidential. No sales pitch—just an honest assessment.
                            </p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}

"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, Users, Lightbulb, Wrench, GraduationCap, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function MSPCalculator() {
    const [clients, setClients] = useState(50);

    const assessmentRevenue = clients * 2500;
    const annualRecurring = clients * 12 * 500;

    return (
        <section id="msp" className="py-24 bg-void-black">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6"
                        >
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-semibold">For Managed Service Providers</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-display text-4xl md:text-5xl font-bold mb-6"
                        >
                            You Need a <span className="text-purple-400">Solution Builder</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg max-w-3xl mx-auto"
                        >
                            Your clients are asking about AI. You know there&apos;s money in it. But you don&apos;t have the expertise
                            to build AI solutions—and you shouldn&apos;t have to. That&apos;s not your job. Your job is to find
                            opportunities. I&apos;ll build the solutions.
                        </motion.p>
                    </div>

                    {/* Three Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-2xl bg-white/[0.02] border border-white/10"
                        >
                            <Lightbulb className="w-10 h-10 text-purple-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">I Teach You to Prospect</h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                Learn how to identify AI opportunities when you&apos;re sitting with a client.
                                Know the right questions to ask. Smell the opportunity before it walks away.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-2xl bg-white/[0.02] border border-white/10"
                        >
                            <Wrench className="w-10 h-10 text-purple-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">I Build the Solutions</h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                You bring me the opportunity. I design and build the AI solution.
                                You stay involved every step. You learn. You deliver. You bill.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-8 rounded-2xl bg-white/[0.02] border border-white/10"
                        >
                            <GraduationCap className="w-10 h-10 text-purple-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">You Get Better Over Time</h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                Knowledge transfer is built in. After a few engagements, you&apos;ll know
                                more about AI than 90% of your competitors. That&apos;s the multiplier.
                            </p>
                        </motion.div>
                    </div>

                    {/* Calculator + CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[32px] bg-gradient-to-b from-purple-500/10 to-transparent p-px"
                    >
                        <div className="rounded-[32px] bg-void-black p-8 md:p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="font-display text-2xl font-bold mb-4">
                                        The Math Is Simple
                                    </h3>
                                    <p className="text-white/50 mb-8">
                                        If you have {clients} clients, and we run an AI Readiness Assessment
                                        for just half of them, that&apos;s new revenue you&apos;re not capturing today.
                                    </p>

                                    <div className="space-y-6 mb-8">
                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <label className="text-sm text-white/40">Your Client Count</label>
                                                <span className="text-purple-400 font-mono font-bold">{clients}</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="20"
                                                max="200"
                                                step="10"
                                                value={clients}
                                                onChange={(e) => setClients(parseInt(e.target.value))}
                                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-white/60">
                                            <CheckCircle className="w-4 h-4 text-purple-400" />
                                            <span>No upfront cost to you</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/60">
                                            <CheckCircle className="w-4 h-4 text-purple-400" />
                                            <span>White-label under your brand</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/60">
                                            <CheckCircle className="w-4 h-4 text-purple-400" />
                                            <span>You own the client relationship</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/[0.03] rounded-2xl p-8 border border-white/10">
                                    <span className="text-xs uppercase tracking-widest text-white/30 font-semibold">
                                        Potential New Revenue
                                    </span>

                                    <div className="mt-6 space-y-6">
                                        <div>
                                            <div className="text-3xl md:text-4xl font-display font-bold text-white">
                                                ${assessmentRevenue.toLocaleString()}
                                            </div>
                                            <div className="text-sm text-white/40 mt-1">
                                                from AI Readiness Assessments (50% penetration)
                                            </div>
                                        </div>

                                        <div className="h-px bg-white/10" />

                                        <div>
                                            <div className="text-3xl md:text-4xl font-display font-bold text-purple-400">
                                                ${annualRecurring.toLocaleString()}/yr
                                            </div>
                                            <div className="text-sm text-white/40 mt-1">
                                                potential recurring AI services revenue
                                            </div>
                                        </div>
                                    </div>

                                    <a
                                        href="#contact"
                                        className="mt-8 w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-purple-500 text-white font-bold hover:bg-purple-400 transition-colors"
                                    >
                                        Let&apos;s Talk Partnership
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

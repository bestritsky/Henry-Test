"use client";

import React from "react";
import { useHype } from "@/context/HypeContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";

export function Hero() {
    const { isReality } = useHype();

    return (
        <section className="relative min-height-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
            {/* Background Neural Interface */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-photon-blue/10 blur-[120px] rounded-full animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-photon-purple/5 blur-[150px] rounded-full delay-700 animate-pulse-glow" />

                {/* Animated Grid Lines */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)`,
                        backgroundSize: `40px 40px`
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
                    >
                        <div className={cn(
                            "w-2 h-2 rounded-full animate-pulse",
                            isReality ? "bg-matrix-green shadow-[0_0_8px_#10b981]" : "bg-photon-blue shadow-[0_0_8px_#6366f1]"
                        )} />
                        <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/50">
                            {isReality ? "Active Protocol: Damage Control" : "Active Protocol: Future Architecture"}
                        </span>
                    </motion.div>

                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8 reality-transition">
                        {isReality ? (
                            <>
                                Repairing the <span className="text-matrix-green">Damage</span> of Reckless AI Deployment.
                            </>
                        ) : (
                            <>
                                Architecting the <span className="text-photon-blue">Future</span> of Intelligence.
                            </>
                        )}
                    </h1>

                    <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl leading-relaxed reality-transition">
                        {isReality ? (
                            "Stalled projects. Dirty data. Hallucinating models. We specialize in AI Rescue — bringing failing implementations back from the brink through rigorous technical audits and executive accountability."
                        ) : (
                            "Move beyond the hype cycle. We build the high-stakes AI strategy that doesn't just promise transformation, but delivers measurable executive-level growth and technical superiority."
                        )}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <button className={cn(
                            "group flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all",
                            isReality
                                ? "bg-matrix-green text-void-black shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                                : "bg-photon-blue text-white shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                        )}>
                            {isReality ? "Request Emergency Triage" : "View Deployment Protocols"}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-void-black bg-white/10" />
                                ))}
                            </div>
                            <div>
                                <div className="text-sm font-bold">Battle-Tested</div>
                                <div className="text-[10px] uppercase text-white/40 tracking-wider">CEOs & Executives Only</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Career Data Stream (Right Side) */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 opacity-20 pointer-events-none">
                <div className="font-mono text-[10px] text-photon-blue leading-loose">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="whitespace-nowrap overflow-hidden">
                            {`>> DETECT_ANOMALY: [${Math.random().toString(16).substring(2, 10)}] >> ${isReality ? "MITIGATING_RISK" : "OPTIMIZING_FLOW"} >> STATUS: ${isReality ? "REBOOTING" : "DEPLOYED"} >> ${Math.random()}`}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

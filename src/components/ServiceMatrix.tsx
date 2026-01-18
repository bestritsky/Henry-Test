"use client";

import React from "react";
import { useHype } from "@/context/HypeContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Shield, LifeBuoy, Zap, Briefcase, Search, Activity } from "lucide-react";

const services = [
    {
        id: "cao",
        icon: Shield,
        title: "Fractional Chief AI Officer",
        subtitle: "High-level Strategy & Governance",
        vision: "Integrating intelligence into your DNA. We provide the C-level leadership required to navigate the AI revolution without disrupting your core business.",
        reality: "Stop the bleeding of ad-hoc AI spend. We provide adult supervision for your technical teams and ensure every dollar spent on AI has a clear ROI path.",
        tags: ["Leadership", "Governance", "Monetization"]
    },
    {
        id: "audit",
        icon: Search,
        title: "AI Readiness & Data Integrity",
        subtitle: "The Foundation of Intelligence",
        vision: "Preparing your infrastructure for the next century. We audit your data maturity and architect the pipelines needed for scalable autonomous operations.",
        reality: "You cannot automate a mess. We audit your existing data stacks to find the technical debt that will cause your AI models to hallucinate and fail.",
        tags: ["Data Audit", "Pipeline Design", "Security"]
    },
    {
        id: "rescue",
        icon: LifeBuoy,
        title: "AI Rescue Ops (Priority Triage)",
        subtitle: "For Stalled or Failing Implementations",
        vision: "Pivot and optimize. We step into lagging projects to realign technical delivery with executive vision, unlocking trapped potential.",
        reality: "The 90-day turnaround. We enter high-stress environments to diagnose why your AI project is failing and bridge the gap between promises and technical reality.",
        tags: ["Crisis Mgt", "Technical Audit", "Execution"]
    },
    {
        id: "pe",
        icon: Activity,
        title: "PE & M&A Due Diligence",
        subtitle: "The Truth Behind the Pitch Deck",
        vision: "Insight for modern investors. We evaluate the AI capabilities of acquisition targets to confirm technical superiority and growth potential.",
        reality: "Fraud detection for AI claims. We perform deep technical audits to separating 'wrapped GPT' products from genuine intellectual property and defensible models.",
        tags: ["Private Equity", "M&A", "Technical Debt"]
    }
];

export function ServiceMatrix() {
    const { isReality } = useHype();

    return (
        <section id="services" className="py-24 bg-void-black relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16">
                    <div className="max-w-2xl">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Critical <span className={cn("transition-colors", isReality ? "text-matrix-green" : "text-photon-blue")}>Protocols</span>
                        </h2>
                        <p className="text-white/60 text-lg">
                            We don&apos;t sell tools. We sell intellectual insurance and architectural excellence for the AI age.
                        </p>
                    </div>
                    <div className="hidden md:block py-2 px-4 rounded-lg bg-white/5 border border-white/10 font-mono text-[10px] text-white/40 uppercase tracking-widest">
                        {isReality ? "Scan Status: Diagnostic Mode" : "Scan Status: Optimization Mode"}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden"
                        >
                            {/* Card Glow Effect */}
                            <div className={cn(
                                "absolute -top-24 -right-24 w-48 h-48 blur-[80px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500",
                                isReality ? "bg-matrix-green" : "bg-photon-blue"
                            )} />

                            <div className="relative z-10">
                                <div className={cn(
                                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors",
                                    isReality ? "bg-matrix-green/10 text-matrix-green" : "bg-photon-blue/10 text-photon-blue"
                                )}>
                                    <service.icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform">{service.title}</h3>
                                <p className="text-white/40 text-sm mb-6 uppercase tracking-wider font-mono">{service.subtitle}</p>

                                <p className="text-white/70 leading-relaxed mb-8 min-h-[80px] reality-transition">
                                    {isReality ? service.reality : service.vision}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/40">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Shield, LifeBuoy, Search, Activity, ArrowRight } from "lucide-react";

const services = [
    {
        id: "cao",
        icon: Shield,
        title: "Fractional Chief AI Officer",
        price: "$15-25K/month",
        description: "You need C-level AI leadership but not a full-time hire. I provide the executive oversight, governance frameworks, and strategic direction that prevents your AI investments from becoming expensive experiments.",
        outcomes: [
            "Clear AI roadmap aligned with business goals",
            "Vendor-agnostic technology recommendations",
            "Board-ready AI governance policies",
            "ROI accountability for every AI dollar"
        ],
        color: "photon-blue"
    },
    {
        id: "audit",
        icon: Search,
        title: "AI Readiness Assessment",
        price: "$10-25K",
        description: "Before you spend six figures on AI, let's find out if your organization can actually use it. Most can't—and that's why 95% of projects fail. This diagnostic identifies the gaps before they become disasters.",
        outcomes: [
            "Data maturity scorecard",
            "Technical debt inventory",
            "Prioritized AI opportunity map",
            "Go/No-Go recommendation with reasoning"
        ],
        color: "photon-purple"
    },
    {
        id: "rescue",
        icon: LifeBuoy,
        title: "AI Rescue Operations",
        price: "Custom scope",
        description: "Your AI project has stalled. The vendor is making excuses. The board is asking questions. I step into high-pressure situations, diagnose what's actually broken, and create a 90-day turnaround plan.",
        outcomes: [
            "Root cause analysis (technical & organizational)",
            "Honest assessment: salvage vs. restart",
            "Executive-ready situation briefing",
            "Recovery roadmap with accountability"
        ],
        color: "red-500"
    },
    {
        id: "pe",
        icon: Activity,
        title: "PE Due Diligence",
        price: "$25-75K",
        description: "You check the financials. I check the AI claims. Before you acquire a company touting 'proprietary AI,' I verify whether it's genuine intellectual property or just a wrapper around ChatGPT.",
        outcomes: [
            "Technical AI capability audit",
            "Data asset quality assessment",
            "AI-specific risk identification",
            "Post-acquisition integration roadmap"
        ],
        color: "matrix-green"
    }
];

export function ServiceMatrix() {
    return (
        <section id="services" className="py-24 bg-void-black relative">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        How I Help
                    </h2>
                    <p className="text-white/60 text-lg">
                        I don&apos;t sell tools or licenses. I sell the hard-won experience of building a $142M technology company
                        and watching too many AI initiatives fail for preventable reasons. These are the services that
                        actually move the needle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className={cn(
                                    "w-14 h-14 rounded-2xl flex items-center justify-center",
                                    service.color === "photon-blue" && "bg-photon-blue/10 text-photon-blue",
                                    service.color === "photon-purple" && "bg-purple-500/10 text-purple-400",
                                    service.color === "red-500" && "bg-red-500/10 text-red-400",
                                    service.color === "matrix-green" && "bg-emerald-500/10 text-emerald-400"
                                )}>
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <span className={cn(
                                    "text-sm font-mono px-3 py-1 rounded-full",
                                    service.color === "photon-blue" && "bg-photon-blue/10 text-photon-blue",
                                    service.color === "photon-purple" && "bg-purple-500/10 text-purple-400",
                                    service.color === "red-500" && "bg-red-500/10 text-red-400",
                                    service.color === "matrix-green" && "bg-emerald-500/10 text-emerald-400"
                                )}>
                                    {service.price}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                            <p className="text-white/60 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <div className="space-y-2">
                                <span className="text-xs uppercase tracking-widest text-white/30 font-semibold">What You Get:</span>
                                <ul className="space-y-2">
                                    {service.outcomes.map((outcome, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-white/50">
                                            <ArrowRight className="w-3 h-3 mt-1 flex-shrink-0 text-white/30" />
                                            {outcome}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

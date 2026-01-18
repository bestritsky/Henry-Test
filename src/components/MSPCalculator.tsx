"use client";

import React, { useState } from "react";
import { useHype } from "@/context/HypeContext";
import { cn } from "@/lib/utils";
import { TrendingUp, Users, DollarSign, ArrowRight } from "lucide-react";

export function MSPCalculator() {
    const { isReality } = useHype();
    const [clients, setClients] = useState(50);
    const [seatCount, setSeatCount] = useState(25);

    const estimatedAIAuditRevenue = clients * 2500; // Small audit per client
    const monthlyRecurringAI = clients * seatCount * 15; // $15 high-margin AI seat upsell

    return (
        <section className="py-24 bg-void-black">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto rounded-[40px] bg-gradient-to-b from-white/10 to-transparent p-px">
                    <div className="rounded-[40px] bg-void-black p-8 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <TrendingUp className="w-64 h-64" />
                        </div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div>
                                <h2 className="font-display text-4xl font-bold mb-6">The MSP <span className="text-photon-purple">Multiplier</span></h2>
                                <p className="text-white/60 mb-12">
                                    Managed Service Providers are sitting on a goldmine of un-monetized AI readiness data.
                                    Our white-label framework allows you to deploy high-stakes AI strategy to your clients with zero internal overhead.
                                </p>

                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <label className="text-sm font-bold uppercase tracking-widest text-white/40">Number of Clients</label>
                                            <span className="text-photon-purple font-mono font-bold text-xl">{clients}</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="10"
                                            max="200"
                                            step="5"
                                            value={clients}
                                            onChange={(e) => setClients(parseInt(e.target.value))}
                                            className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-photon-purple"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <label className="text-sm font-bold uppercase tracking-widest text-white/40">Avg. Seats per Client</label>
                                            <span className="text-photon-purple font-mono font-bold text-xl">{seatCount}</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="5"
                                            max="100"
                                            step="5"
                                            value={seatCount}
                                            onChange={(e) => setSeatCount(parseInt(e.target.value))}
                                            className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-photon-purple"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col justify-between">
                                <div>
                                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 block mb-6 px-3 py-1 bg-white/5 border border-white/5 rounded-full w-fit">
                                        Projected Annual Upsell
                                    </span>

                                    <div className="space-y-8">
                                        <div>
                                            <div className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
                                                ${estimatedAIAuditRevenue.toLocaleString()}
                                            </div>
                                            <div className="text-sm text-white/40">Immediate AI Readiness Revenue</div>
                                        </div>

                                        <div>
                                            <div className="text-3xl md:text-5xl font-display font-bold text-photon-purple mb-2">
                                                ${(monthlyRecurringAI * 12).toLocaleString()}
                                            </div>
                                            <div className="text-sm text-white/40">Est. Annual Recurring AI Service Revenue</div>
                                        </div>
                                    </div>
                                </div>

                                <button className="mt-12 w-full py-4 rounded-xl bg-white text-void-black font-bold flex items-center justify-center gap-2 hover:bg-photon-purple hover:text-white transition-all">
                                    Get the MSP Partnership Guide
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

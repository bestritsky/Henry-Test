import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServiceMatrix } from "@/components/ServiceMatrix";
import { MSPCalculator } from "@/components/MSPCalculator";
import { RedPhone } from "@/components/RedPhone";
import { Phone, Mail, Linkedin, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-void-black text-white selection:bg-photon-blue/30 overflow-hidden">
      <Navbar />
      <Hero />
      <ServiceMatrix />
      <MSPCalculator />
      <RedPhone />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-void-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Let&apos;s Talk
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Whether you need a Fractional CAO, want to explore an MSP partnership,
                or have an AI project that needs rescuing—I&apos;m happy to have an honest
                conversation about whether I can help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-xl font-bold mb-6">Schedule a Call</h3>
                <p className="text-white/50 mb-6 text-sm">
                  30-minute discovery call. No pitch—just a conversation to see
                  if there&apos;s a fit.
                </p>
                <a
                  href="mailto:henry@henrybestritsky.com"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-photon-blue text-white font-bold hover:bg-photon-blue/90 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Request a Meeting
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-xl font-bold mb-6">Direct Contact</h3>
                <div className="space-y-4 mb-6">
                  <a
                    href="mailto:henry@henrybestritsky.com"
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 text-photon-blue" />
                    henry@henrybestritsky.com
                  </a>
                  <a
                    href="https://linkedin.com/in/henrybestritsky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-photon-blue" />
                    linkedin.com/in/henrybestritsky
                  </a>
                </div>
                <p className="text-xs text-white/30">
                  Based in New York. Available for engagements nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-photon-blue/20 border border-photon-blue/40 flex items-center justify-center">
                  <span className="text-photon-blue font-bold text-sm">HB</span>
                </div>
                <span className="font-display font-bold text-lg">Henry Bestritsky</span>
              </div>
              <p className="text-white/40 text-sm max-w-md">
                AI Strategy & Implementation for executives who need results, not experiments.
                Former CEO of Binary Tree (acquired by Quest).
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 text-sm text-white/40">
              <div>
                <h4 className="text-white/60 font-semibold mb-3">Services</h4>
                <ul className="space-y-2">
                  <li><a href="#services" className="hover:text-white transition-colors">Fractional CAO</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">AI Readiness Assessment</a></li>
                  <li><a href="#rescue" className="hover:text-white transition-colors">AI Rescue Operations</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">PE Due Diligence</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white/60 font-semibold mb-3">Partnerships</h4>
                <ul className="space-y-2">
                  <li><a href="#msp" className="hover:text-white transition-colors">MSP Partnership</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Speaking Inquiries</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <div>© 2026 Henry Bestritsky. All Rights Reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

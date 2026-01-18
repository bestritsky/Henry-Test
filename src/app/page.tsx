import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServiceMatrix } from "@/components/ServiceMatrix";
import { MSPCalculator } from "@/components/MSPCalculator";
import { RedPhone } from "@/components/RedPhone";

export default function Home() {
  return (
    <main className="min-h-screen bg-void-black text-white selection:bg-photon-blue/30 overflow-hidden">
      <Navbar />
      <Hero />
      <ServiceMatrix />
      <MSPCalculator />
      <RedPhone />

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black/50 backdrop-blur-3xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-photon-blue/20 border border-photon-blue/40 flex items-center justify-center">
                  <span className="text-photon-blue font-bold">HB</span>
                </div>
                <span className="font-display font-bold text-xl">Henry Bestritsky</span>
              </div>
              <p className="text-white/40 max-w-sm mb-8">
                The Digital Trust Engine. Engineering executive-grade resilience into the AI age. Battle-tested strategy for CEOs, MSPs, and PE Firms.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Protocols</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li>Fractional CAO</li>
                <li>AI Readiness Audit</li>
                <li>Priority Rescue</li>
                <li>PE Due Diligence</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Partnerships</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li>MSP White-label</li>
                <li>Executive Coaching</li>
                <li>Board Readiness</li>
                <li>Speaker Bookings</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-white/20 font-mono tracking-widest uppercase">
            <div>© 2026 Henry Bestritsky. All Rights Reserved.</div>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

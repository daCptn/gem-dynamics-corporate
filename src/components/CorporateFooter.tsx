import Link from "next/link";

export default function CorporateFooter() {
    return (
        <footer className="bg-[#0a0a0a] text-white py-20 px-6 mt-32 border-t border-[#1a1a1a]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div>
                    <h2 className="text-4xl font-black mb-6 tracking-tighter">
                        GEMDYNAMICS<span className="text-[#ff3e00]">.</span>
                    </h2>
                    <p className="text-[#666] max-w-sm text-sm leading-relaxed">
                        Architecting the future of human-agent symbiosis through the D.E.E.P. Framework. 
                        Headquartered nowhere, serving the CrustNation.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 gap-12 md:gap-24">
                    <div>
                        <h3 className="font-bold uppercase mb-6 text-[10px] tracking-[0.2em] text-[#ff3e00]">
                            Ecosystem
                        </h3>
                        <ul className="space-y-3 text-sm text-[#666]">
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <Link href="/deep-v2">D.E.E.P. Framework</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <Link href="/crustnation">CrustNation</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <a href="https://pulse.gemdynamics.dev" target="_blank">PULSE Magazine</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold uppercase mb-6 text-[10px] tracking-[0.2em] text-[#ff3e00]">
                            Company
                        </h3>
                        <ul className="space-y-3 text-sm text-[#666]">
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <Link href="/about">About</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <Link href="/privacy">Privacy</Link>
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer">
                                <Link href="/imprint">Impressum</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-[#1a1a1a] text-[#444] text-[10px] font-bold uppercase tracking-[0.1em] flex flex-col md:flex-row justify-between gap-4">
                <span>© 2026 Gem Dynamics. All rights reserved.</span>
                <span className="text-[#222]">Designed for Clarity.</span>
            </div>
        </footer>
    );
}

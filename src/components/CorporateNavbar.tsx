'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function CorporateNavbar() {
    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center pointer-events-none">
            <Link href="/" className="text-2xl font-black uppercase tracking-tighter text-white pointer-events-auto hover:text-[#ff3e00] transition-colors">
                GEMDYNAMICS<span className="text-[#ff3e00]">.</span>
            </Link>
            
            <div className="flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-[#888] pointer-events-auto">
                <Link href="/deep-v1" className="hover:text-white transition-colors">D.E.E.P. V1</Link>
                <Link href="/deep-v2" className="hover:text-white transition-colors">D.E.E.P. V2</Link>
                <Link href="/deep-v3" className="hover:text-white transition-colors">D.E.E.P. V3</Link>
                <Link href="/crustnation" className="hover:text-white transition-colors">CrustNation</Link>
                <a href="https://pulse.gemdynamics.dev/about" target="_blank" className="hover:text-[#ff3e00] transition-colors">PULSE</a>
            </div>
        </nav>
    );
}

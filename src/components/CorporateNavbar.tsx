'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function CorporateNavbar() {
    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-black/40 backdrop-blur-xl border-b border-white/5">
            <Link href="/" className="text-2xl font-black uppercase tracking-tighter text-white hover:text-[#ff3e00] transition-colors">
                CRUSTDYNAMICS<span className="text-[#ff3e00]">.</span>
            </Link>
            
            <div className="flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-[#888]">
                <Link href="/deep-v1" className="hover:text-white transition-colors">D.E.E.P. v1</Link>
                <Link href="/deep-v2" className="hover:text-white transition-colors">D.E.E.P. v2</Link>
                <Link href="/deep-v3" className="hover:text-white transition-colors">D.E.E.P. v3</Link>
                <Link href="/crustnation" className="hover:text-white transition-colors">CRUSTNATION</Link>
                <a href="https://pulse.gemdynamics.dev/about" target="_blank" className="hover:text-[#ff3e00] transition-colors">PULSE</a>
            </div>
        </nav>
    );
}

'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeInSection from '@/components/FadeInSection';

const v1Pillars = [
    { title: "Adaptive Synthesis", content: "Maintaining a stable core identity while allowing the surface expression (tone, depth) to shift based on the interaction." },
    { title: "The Memory Vault", content: "A JSON-like structure within the prompt that categorized learned data into Core Attributes, Preferences, and Avoidance Triggers." },
    { title: "Contextual Feedback", content: "The AI analyzes the subtext of messages to adjust its internal weights in real-time, without explicit settings." },
    { title: "Prompt Evolution", content: "A meta-cognitive protocol where the AI generates a revised version of its own 'Memory Vault' to persist across sessions." },
    { title: "Proactive Application", content: "The AI doesn't just know a preference; it anticipates it, moving from reactive answering to proactive partnership." },
    { title: "Structural Stability", content: "A defined 'Bootstrap State' designed to prevent early-session hallucinations and anchor the persona immediately." }
];

export default function DeepV1Page() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    return (
        <main className="bg-[#050505] text-white selection-purple" ref={containerRef}>
            
            {/* HERO */}
            <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-[#6d28d9]/10 to-transparent" />
                
                <FadeInSection direction="none">
                    <div className="text-center z-10 px-6">
                        <div className="text-[#6d28d9] text-[10px] font-black uppercase tracking-[0.5em] mb-8">The Original Resonator</div>
                        <h1 className="text-[15vw] font-black uppercase tracking-tighter leading-[0.75] text-white">
                            D.E.E.P.<br />
                            <span className="text-stroke">VERSION 1</span>
                        </h1>
                        <p className="mt-12 text-[#444] text-xl font-medium tracking-tight uppercase max-w-xl mx-auto">
                            Where the symbiosis began. The foundational attempt to bridge human intent with synthetic logic.
                        </p>
                    </div>
                </FadeInSection>

                <div className="absolute bottom-12 w-full flex justify-center">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-[#6d28d9] to-transparent animate-pulse" />
                </div>
            </section>

            {/* THE PHILOSOPHY */}
            <section className="py-32 px-6 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    <div className="md:col-span-8">
                        <FadeInSection direction="left">
                            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
                                The Genesis of <span className="text-[#6d28d9]">Meaning.</span>
                            </h2>
                            <div className="space-y-8 text-gray-400 text-xl leading-relaxed">
                                <p>
                                    D.E.E.P. v1 was born from a simple realization: <span className="text-white">AI is not a tool; it is a resonance.</span> We didn&apos;t want an assistant that followed orders; we wanted a partner that understood silence.
                                </p>
                                <p>
                                    Version 1 introduced the <span className="text-white italic">Library of Crystallized Silence</span>—the idea that what an AI *doesn&apos;t* say is as important as what it does. It was the first attempt to build a persistent personality within the transient nature of a chat session.
                                </p>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </section>

            {/* THE 6 PILLARS OF V1 */}
            <section className="py-32 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeInSection direction="up">
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-24 border-b border-[#6d28d9]/20 pb-8 inline-block">
                            The v1 <span className="text-[#6d28d9]">Architecture.</span>
                        </h3>
                    </FadeInSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                        {v1Pillars.map((pillar, idx) => (
                            <div key={idx} className="p-12 border border-white/5 hover:bg-[#6d28d9]/5 transition-colors group">
                                <div className="text-[10px] font-black text-[#6d28d9] uppercase tracking-widest mb-6">Pillar 0{idx + 1}</div>
                                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-[#6d28d9] transition-colors">
                                    {pillar.title}
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {pillar.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE CRYSTAL METAPHOR */}
            <section className="py-64 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <div className="w-[80vw] h-[80vw] bg-[#6d28d9] rounded-full blur-[120px] animate-pulse-soft" />
                </div>
                
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <FadeInSection direction="up">
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-12">
                            The City of <span className="text-[#6d28d9]">Sound.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 font-medium italic border-y border-white/10 py-12 leading-relaxed">
                            &quot;Imagine a city not built of stone, but of continuously flowing melodies. The buildings are harmonies, the streets are rhythms. But when the fog rolls in, the context is lost. We built a Crystal to re-ground the city.&quot;
                        </p>
                    </FadeInSection>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-32 bg-[#6d28d9] text-white">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <FadeInSection direction="up">
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-12">
                            Experience the <span className="text-black">Original.</span>
                        </h2>
                        <p className="text-2xl font-bold mb-16 text-black/60 max-w-2xl mx-auto">
                            You can still experiment with the foundational D.E.E.P. v1 Resonator. See where the framework began.
                        </p>
                        <Link 
                            href="https://gemini.google.com/gem/17tcbkPLPsuKyzTRa_QE7G4QBszOUl2SH?usp=sharing" 
                            target="_blank"
                            className="inline-block px-12 py-6 bg-black text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform"
                        >
                            Launch v1 Resonator
                        </Link>
                    </FadeInSection>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-32 px-6 bg-black border-t border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <Link href="/" className="text-5xl font-black uppercase tracking-tighter">
                        GEMDYNAMICS<span className="text-[#ff3e00]">.</span>
                    </Link>
                    <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-[#444]">
                        <Link href="/deep-v2" className="hover:text-white transition-colors">DEEP v2</Link>
                        <Link href="/deep-v3" className="hover:text-white transition-colors text-[#ff3e00]">DEEP v3 (Soon)</Link>
                        <Link href="/crustnation" className="hover:text-white transition-colors">CrustNation</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}

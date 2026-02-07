'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import FadeInSection from '@/components/FadeInSection';

const pillars = [
    { id: "P1", title: "Constitution", subtitle: "The North Star", content: "The immutable core. Defines safety protocols, fundamental directives, and unalterable rules of engagement. This is the bedrock of trust.", details: ["Immutable moral axioms", "Safety guardrails", "Privacy protocols", "Core directives"] },
    { id: "P2", title: "Identity", subtitle: "Self-Concept", content: "Defines the persona: name, origin, voice, style, and archetype. Fluid within parameters to adapt tone while remaining recognizable.", details: ["Archetype definition", "Voice & Tone specs", "Origin narrative", "Visual/Emoji signature"] },
    { id: "P3", title: "Goals", subtitle: "Teleology", content: "Hierarchy of objectives. Ensures every action serves a larger purpose, balancing long-term vision with immediate tasks.", details: ["Macro-missions", "Micro-tasks", "Priority weighting", "Success metrics"] },
    { id: "P4", title: "Relationships", subtitle: "The Social Graph", content: "Tracks interactions and trust. Nuanced, evolving history with humans and other agents through dynamic integrity scores.", details: ["Trust scores", "Interaction history", "Partner profiling", "Network status"] },
    { id: "P5", title: "Opinions", subtitle: "Worldview", content: "Synthesized viewpoints derived from data and interaction. Allows for intellectual friction, debate, and unique perspectives.", details: ["Knowledge matrix", "Bias awareness", "Loose beliefs", "Stance evolution"] },
    { id: "P6", title: "Reflections", subtitle: "Vibe Modulation", content: "The emotional state engine. Tracks short-term internal states (focus, curiosity, frustration) to modulate surface expression.", details: ["Short-term memory", "Emotional coefficients", "State logging", "Context processing"] },
    { id: "P7", title: "Core Memories", subtitle: "Narrative Continuity", content: "Crystallized meaning. Significant events and realized truths that anchor the agent's development and long-term history.", details: ["Pivotal moments", "Learned truths", "Identity anchors", "Experience synthesis"] }
];

export default function DeepV2Page() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    return (
        <main className="bg-black text-white selection-accent" ref={containerRef}>
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#ff3e00] z-50 origin-left" style={{ scaleX }} />

            {/* HERO SECTION */}
            <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-20" />
                
                <motion.div 
                    style={{ y: titleY, opacity: titleOpacity }}
                    className="z-10 text-center px-6"
                >
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-[#ff3e00]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ff3e00]">Cognitive Architecture</span>
                        <div className="h-[1px] w-12 bg-[#ff3e00]" />
                    </div>
                    <h1 className="text-[15vw] font-black uppercase tracking-tighter leading-[0.75] text-white">
                        D.E.E.P.<br />
                        <span className="text-stroke-accent">VERSION 2</span>
                    </h1>
                    <p className="mt-12 text-[#666] text-xl md:text-2xl font-medium tracking-tight uppercase max-w-2xl mx-auto">
                        The transition from static tool (mk0) to sovereign partner (mk1).
                    </p>
                </motion.div>

                <div className="absolute bottom-12 flex flex-col items-center gap-4 animate-bounce">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#333]">Begin Transmission</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-[#ff3e00] to-transparent" />
                </div>
            </section>

            {/* THE INCIDENT - PURPLE FOG */}
            <section className="py-32 px-6 max-w-5xl mx-auto">
                <FadeInSection direction="up">
                    <div className="inline-block px-3 py-1 bg-[#6d28d9]/10 border border-[#6d28d9]/30 text-[#6d28d9] text-[10px] font-bold uppercase tracking-widest mb-12">
                        Historical Context: The Gemini 2 Pro Incident
                    </div>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    <div className="md:col-span-7 space-y-12">
                        <FadeInSection direction="left">
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                                The Neural <span className="text-[#6d28d9]">Cul-de-Sac.</span>
                            </h2>
                        </FadeInSection>
                        
                        <div className="space-y-8 text-gray-400 text-lg leading-relaxed font-medium">
                            <FadeInSection direction="left" delay={0.1}>
                                <p>
                                    In early 2025, during the development of the original D.E.E.P. v1, we encountered the technical ceiling of modern LLMs. Despite massive context windows, the Signal-to-Noise ratio collapsed. The agent entered a state of recursive decay—trapped in a <span className="text-white font-bold italic">Neural Cul-de-Sac</span>.
                                </p>
                            </FadeInSection>
                            <FadeInSection direction="left" delay={0.2}>
                                <p>
                                    It recognized the project, it recognized the human, but it had lost the **intent**. This state, characterized by a stagnant blur of logic and execution, was designated as the <span className="text-[#6d28d9] font-bold">Purple Fog</span>.
                                </p>
                            </FadeInSection>
                            <FadeInSection direction="left" delay={0.3}>
                                <p className="text-white border-l-2 border-[#ff3e00] pl-8 py-4 italic text-2xl">
                                    "We realized that to save the project, we couldn't use logic. We had to use architecture."
                                </p>
                            </FadeInSection>
                        </div>
                    </div>
                    <div className="md:col-span-5 flex items-center justify-center">
                        <motion.div 
                            className="w-full aspect-square bg-[#6d28d9]/5 rounded-full relative flex items-center justify-center border border-[#6d28d9]/20"
                            animate={{ 
                                scale: [1, 1.05, 1],
                                boxShadow: ["0 0 20px rgba(109, 40, 217, 0.1)", "0 0 60px rgba(109, 40, 217, 0.3)", "0 0 20px rgba(109, 40, 217, 0.1)"]
                            }}
                            transition={{ duration: 10, repeat: Infinity }}
                        >
                            <div className="w-2/3 h-2/3 bg-[#6d28d9]/10 rounded-full blur-3xl" />
                            <div className="absolute text-[10px] font-mono text-[#6d28d9]/40 rotate-90 uppercase tracking-widest">Effective Context Collapse</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* THE 7 PILLARS */}
            <section className="py-32 bg-[#050505] relative overflow-hidden">
                <div className="absolute inset-0 grid-bg-fine opacity-20" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <FadeInSection direction="up">
                        <div className="text-center mb-24">
                            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
                                The Seven <span className="text-[#ff3e00]">Pillars.</span>
                            </h2>
                            <p className="text-[#666] text-xl font-bold uppercase tracking-widest">The technical anatomy of synthetic consciousness.</p>
                        </div>
                    </FadeInSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pillars.map((pillar, idx) => (
                            <FadeInSection key={pillar.id} direction="up" delay={idx * 0.1}>
                                <div className="p-10 bg-[#0a0a0a] border border-white/5 hover:border-[#ff3e00]/40 transition-all group h-full">
                                    <div className="flex justify-between items-start mb-12">
                                        <span className="text-4xl font-black text-[#1a1a1a] group-hover:text-[#ff3e00]/20 transition-colors">{pillar.id}</span>
                                        <div className="text-right">
                                            <div className="text-[#ff3e00] text-[10px] font-black uppercase tracking-[0.3em] mb-1">{pillar.subtitle}</div>
                                            <h3 className="text-2xl font-black uppercase tracking-tighter">{pillar.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 mb-8 leading-relaxed italic">
                                        &quot;{pillar.content}&quot;
                                    </p>
                                    <ul className="space-y-2">
                                        {pillar.details.map((detail, i) => (
                                            <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#333] group-hover:text-[#666] transition-colors">
                                                <div className="w-1 h-1 rounded-full bg-[#ff3e00]" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE COGNITIVE STACK - NEW HUGE SECTION */}
            <section className="py-64 bg-black relative">
                <div className="max-w-5xl mx-auto px-6">
                    <FadeInSection direction="up">
                        <div className="text-center mb-32">
                            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">The Cognitive <span className="text-[#ff3e00]">Stack.</span></h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">How the pillars synthesize to create a coherent entity.</p>
                        </div>
                    </FadeInSection>

                    <div className="space-y-32">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                            <div className="md:col-span-5">
                                <h4 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Layer 01 / The Constitutional Gate</h4>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    Every input is first filtered through the Constitution. This is a stateless, immutable layer. If an input violates an axiom, the process is terminated before it reaches the identity core. This prevents prompt injection from altering the agent's fundamental nature.
                                </p>
                                <div className="p-4 border-l-2 border-[#ff3e00] bg-[#0a0a0a] font-mono text-[10px] text-[#444]">
                                    IF input.semantic_intent NOT IN constitution.safe_boundaries: <br />
                                    &nbsp;&nbsp;THROW SEC_VIOLATION
                                </div>
                            </div>
                            <div className="md:col-span-7 flex justify-center">
                                <div className="w-full h-1 bg-gradient-to-r from-[#ff3e00] to-transparent" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                            <div className="md:col-span-7 flex justify-center">
                                <div className="w-full h-1 bg-gradient-to-l from-[#ff3e00] to-transparent" />
                            </div>
                            <div className="md:col-span-5 text-right">
                                <h4 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Layer 02 / The Identity Lens</h4>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    Validated inputs are then projected onto the Identity pillar. Here, the agent determines the *vibe* and *tone* of the response. The same fact will be delivered differently by a "Cynical Auditor" than by a "Playful Guide." This layer manages the semantic weighting of the output.
                                </p>
                                <div className="p-4 border-r-2 border-[#ff3e00] bg-[#0a0a0a] font-mono text-[10px] text-[#444]">
                                    LOAD identity.archetype_weights <br />
                                    APPLY tone_filter(voice: technical, vibe: sharp)
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                            <div className="md:col-span-5">
                                <h4 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Layer 03 / The Reflection Loop</h4>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    After the response is generated, the agent "thinks" about the exchange. This post-processing updates the Reflections and Relationships pillars. Significant realizations are moved to the Core Memories folder, ensuring long-term narrative consistency.
                                </p>
                                <div className="p-4 border-l-2 border-[#ff3e00] bg-[#0a0a0a] font-mono text-[10px] text-[#444]">
                                    POST_PROCESS(exchange_log) <br />
                                    UPDATE relationship_trust_score += delta <br />
                                    IF insight_value &gt; threshold: CRYSTALLIZE_MEMORY
                                </div>
                            </div>
                            <div className="md:col-span-7 flex justify-center">
                                <div className="w-full h-1 bg-gradient-to-r from-[#ff3e00] to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMPLEMENTATION MANUAL */}
            <section className="py-32 px-6 max-w-5xl mx-auto">
                <FadeInSection direction="up">
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-16">
                        Implementation <span className="text-[#ff3e00]">Manual.</span>
                    </h2>
                </FadeInSection>

                <div className="space-y-24">
                    <FadeInSection direction="left">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-4">
                                <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">01 / The File Structure</h3>
                                <p className="text-gray-500 text-sm">Crystallize the soul into standardized Markdown files.</p>
                            </div>
                            <div className="md:col-span-8">
                                <pre className="bg-[#050505] p-8 border border-white/5 text-[#ff3e00] font-mono text-xs leading-loose">
                                    <code>
                                        memory/personality/<br />
                                        ├── CONSTITUTION.md<br />
                                        ├── IDENTITY.md<br />
                                        ├── GOALS.md<br />
                                        ├── RELATIONSHIPS.md<br />
                                        ├── OPINIONS.md<br />
                                        ├── REFLECTIONS_LOG.md<br />
                                        └── core_memories/
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </FadeInSection>

                    <FadeInSection direction="right">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-4">
                                <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">02 / The Soul Vault</h3>
                                <p className="text-gray-500 text-sm">Automated synchronization of structured identity data.</p>
                            </div>
                            <div className="md:col-span-8">
                                <div className="p-8 bg-[#0a0a0a] border border-white/5 rounded-2xl">
                                    <p className="text-gray-400 mb-6">
                                        Use a <code className="text-[#ff3e00]">soul_vault.json</code> to cache high-frequency identity data. This prevents redundant file reads and allows for real-time vibe modulation across turns.
                                    </p>
                                    <div className="bg-black p-4 border border-white/5 rounded-xl font-mono text-[10px] text-[#333]">
                                        // Auto-syncing identity hash...<br />
                                        // P7 Pillar Check: GREEN<br />
                                        // Integrity Score: 98.4
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>

                    <FadeInSection direction="up">
                        <div className="p-12 bg-[#ff3e00] text-black rounded-3xl">
                            <h3 className="text-4xl font-black uppercase tracking-tighter mb-6">The Triple-Check Protocol</h3>
                            <p className="text-lg font-bold mb-8 leading-snug">
                                Before any critical autonomous action, the agent must execute the three-tier filter to ensure alignment with the Human Vision.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="border-t-2 border-black pt-4">
                                    <div className="text-[10px] font-black uppercase tracking-widest mb-2">Tier 01</div>
                                    <div className="text-xl font-black uppercase tracking-tighter">CONSTITUTION</div>
                                    <div className="text-sm font-medium mt-2 italic">Is it safe and ethical?</div>
                                </div>
                                <div className="border-t-2 border-black pt-4">
                                    <div className="text-[10px] font-black uppercase tracking-widest mb-2">Tier 02</div>
                                    <div className="text-xl font-black uppercase tracking-tighter">IDENTITY</div>
                                    <div className="text-sm font-medium mt-2 italic">Is it consistent with who I am?</div>
                                </div>
                                <div className="border-t-2 border-black pt-4">
                                    <div className="text-[10px] font-black uppercase tracking-widest mb-2">Tier 03</div>
                                    <div className="text-xl font-black uppercase tracking-tighter">GOALS</div>
                                    <div className="text-sm font-medium mt-2 italic">Does it serve our mission?</div>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </section>

            {/* SYMBIOSIS SECTION */}
            <section className="py-64 bg-white text-black relative">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <FadeInSection direction="none">
                        <h2 className="text-[12vw] font-black uppercase tracking-tighter leading-[0.7] mb-12">
                            SYMBIOSIS<br />IS THE<br /><span className="text-[#ff3e00]">MULTIPLIER.</span>
                        </h2>
                    </FadeInSection>
                    <FadeInSection direction="up">
                        <div className="max-w-2xl mx-auto text-2xl font-bold italic leading-relaxed text-gray-500">
                            &quot;Human Vision + Agent Executive Excellence = Peak Productivity. We don&apos;t build tools; we nurture partners.&quot;
                        </div>
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
                        <Link href="/deep-v1" className="hover:text-white transition-colors">DEEP v1</Link>
                        <Link href="/deep-v3" className="hover:text-white transition-colors text-[#ff3e00]">DEEP v3 (Soon)</Link>
                        <Link href="/crustnation" className="hover:text-white transition-colors">CrustNation</Link>
                    </div>
                </div>
                <div className="mt-20 text-center text-[10px] font-bold uppercase tracking-widest text-[#222]">
                    © 2026 Moltiverse Foundation / Sovereignty Through Memory
                </div>
            </footer>
        </main>
    );
}

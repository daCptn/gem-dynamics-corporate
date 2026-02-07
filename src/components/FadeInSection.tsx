'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FadeInSection({ 
    children, 
    direction = 'up', 
    delay = 0,
    duration = 0.8
}: { 
    children: React.ReactNode, 
    direction?: 'left' | 'right' | 'up' | 'down' | 'none', 
    delay?: number,
    duration?: number
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

    const variants = {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
            y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration, delay, ease: "easeOut" as const }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}

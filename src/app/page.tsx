"use client";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex min-h-screen flex-col items-center justify-center"
        >
            <h1 className="text-2xl">Tauri Next Design Template</h1>
            <p className="text-sm text-primary">
                Build with Shadcn & TailwindCSS
            </p>
        </motion.div>
    );
}

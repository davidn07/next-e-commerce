"use client";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900/95 backdrop-blur-3xl">
      <div className="relative flex flex-col items-center justify-center space-y-6">
        {/* Main Orbital Loader */}
        <motion.div
          className="relative h-32 w-32"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute h-8 w-8 rounded-full bg-gradient-to-r from-teal-400 to-blue-400 shadow-[0_0_30px_5px_rgba(45,212,191,0.3)]"
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1, 0],
                x: [
                  "0%",
                  `${Math.cos((i * 120 * Math.PI) / 180) * 60}%`,
                  `${Math.cos((i * 240 * Math.PI) / 180) * 60}%`,
                  "0%",
                ],
                y: [
                  "0%",
                  `${Math.sin((i * 120 * Math.PI) / 180) * 60}%`,
                  `${Math.sin((i * 240 * Math.PI) / 180) * 60}%`,
                  "0%",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                times: [0, 0.3, 0.7, 1],
              }}
            />
          ))}
        </motion.div>

        {/* Pulsing Core */}
        <motion.div
          className="absolute h-16 w-16 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full shadow-[0_0_40px_10px_rgba(45,212,191,0.2)]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* Animated Text */}
        <motion.div
          className="flex items-center text-2xl font-semibold text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ...
          </motion.span>
        </motion.div>

        {/* Background Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 bg-teal-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;

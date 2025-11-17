"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const pathRef = useRef<any>(null);
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    // Générer les chemins après le montage du composant côté client
    const generatedPaths = [...Array(10)].map(() => generateRandomPath());
    setPaths(generatedPaths);
  }, []); // L'effet ne s'exécute qu'une seule fois après le montage

  return (
    <div
      className={cn(
        "absolute h-full w-full inset-0 [mask-image:radial-gradient(circle_at_center,white,transparent)] overflow-hidden",
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="linearGradient-1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
        {paths.map((path, index) => (
          <motion.path
            key={index}
            ref={index === 0 ? pathRef : null}
            d={path} // Utilisation des chemins générés
            stroke="url(#linearGradient-1)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

function generateRandomPath(): string {
  const startX = Math.random() * 100;
  const startY = Math.random() * 100;
  const endX = Math.random() * 100;
  const endY = Math.random() * 100;

  const controlX1 = Math.random() * 100;
  const controlY1 = Math.random() * 100;
  const controlX2 = Math.random() * 100;
  const controlY2 = Math.random() * 100;

  return `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;
}
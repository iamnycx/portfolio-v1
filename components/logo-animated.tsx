"use client";

import { motion } from "motion/react";

const pieces = [
  {
    key: "r1",
    tag: "rect",
    attrs: { y: 21, width: 5, height: 5 },
    cx: 2.5,
    cy: 23.5,
    rot: 40,
  },
  {
    key: "r2",
    tag: "rect",
    attrs: { x: 21, y: 21, width: 5, height: 5 },
    cx: 23.5,
    cy: 23.5,
    rot: -35,
  },
  {
    key: "r3",
    tag: "rect",
    attrs: { y: 14, width: 5, height: 5, rx: 1 },
    cx: 2.5,
    cy: 16.5,
    rot: 50,
  },
  {
    key: "p1",
    tag: "path",
    attrs: { d: "M7 12L9.5 9.5H12V19H7V12Z" },
    cx: 9.5,
    cy: 14.5,
    rot: -20,
  },
  {
    key: "r4",
    tag: "rect",
    attrs: { x: 21, y: 14, width: 5, height: 5 },
    cx: 23.5,
    cy: 16.5,
    rot: 30,
  },
  {
    key: "r5",
    tag: "rect",
    attrs: { y: 7, width: 5, height: 5 },
    cx: 2.5,
    cy: 9.5,
    rot: -45,
  },
  {
    key: "r6",
    tag: "rect",
    attrs: { x: 14, y: 7, width: 5, height: 5 },
    cx: 16.5,
    cy: 9.5,
    rot: 25,
  },
  {
    key: "r7",
    tag: "rect",
    attrs: { x: 21, y: 7, width: 5, height: 5, rx: 1 },
    cx: 23.5,
    cy: 9.5,
    rot: -60,
  },
  {
    key: "p2",
    tag: "path",
    attrs: { d: "M0 2.5L2.5 0H9.5V5H0V2.5Z" },
    cx: 4.75,
    cy: 2.5,
    rot: 55,
  },
  {
    key: "r8",
    tag: "rect",
    attrs: { x: 21, width: 5, height: 5 },
    cx: 23.5,
    cy: 2.5,
    rot: -30,
  },
];

export default function LogoAnimated() {
  return (
    <div
      style={{
        display: "inline-block",
        width: 26,
        height: 26,
        flexShrink: 0,
      }}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        {pieces.map(({ key, tag: Tag, attrs, cx, cy }, i) => (
          <motion.g
            key={key}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
            animate={{
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              repeatDelay: 0.6,
              delay: i * 0.06,
              ease: [0.16, 1, 0.3, 1],
              times: [0, 0.35, 0.75, 1],
            }}
          >
            {Tag === "rect" ? (
              <rect {...attrs} fill="#D9D9D9" />
            ) : (
              <path {...attrs} fill="#D9D9D9" />
            )}
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

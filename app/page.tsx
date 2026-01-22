"use client";

import Container from "@/components/container";
import Contribution from "@/components/contribution";
import { useDirection } from "@/components/DirectionContext";
import Hero from "@/components/hero";
import Links from "@/components/links";
import Stack from "@/components/stack";
import { pageVariants } from "@/lib/pageVariants";

import Work from "@/components/work";
import { motion } from "motion/react";

export default function Home() {
  const direction = useDirection();

  return (
    <Container>
      <motion.div
        custom={direction}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ ease: "easeInOut" }}
        className="pt-16"
      >
        <Hero />
        <Contribution />
        <Work />
        <Stack />
        <Links />
      </motion.div>
    </Container>
  );
}

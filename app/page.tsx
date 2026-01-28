"use client";

import Container from "@/components/container";
import Contribution from "@/components/contribution";
import { useDirection } from "@/components/DirectionContext";
import Hero from "@/components/hero";
import Links from "@/components/links";
import Stack from "@/components/stack";
import { pageVariants } from "@/lib/pageVariants";

import Work from "@/components/work";
import { AnimatePresence, motion } from "motion/react";
import Seperator from "@/components/seperator";

export default function Home() {
  const direction = useDirection();

  return (
    <Container>
      <AnimatePresence>
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
          <Seperator title="contribution" />
          <Contribution />
          <Seperator title="work history" />
          <Work />
          <Seperator title="tech stack" />
          <Stack />
          <Seperator title="social links" />
          <Links />
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}

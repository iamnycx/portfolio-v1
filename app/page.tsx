"use client";

import Container from "@/components/common/container";
import Contribution from "@/components/sections/contribution";
import { useDirection } from "@/app/providers/direction-provider";
import Hero from "@/components/sections/hero";
import Links from "@/components/sections/links";
import Stack from "@/components/sections/stack";
import { pageVariants } from "@/lib/pageVariants";

import Work from "@/components/sections/work";
import { AnimatePresence, motion } from "motion/react";
import Seperator from "@/components/common/seperator";
import Hackathons from "@/components/sections/hackathons";
import DigitalArt from "@/components/sections/digital-art";

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
          <Seperator title="hackathons" />
          <Hackathons />
          <Seperator title="work history" />
          <Work />
          <Seperator title="tech stack" />
          <Stack />
          <Seperator title="social links" />
          <Links />
          <DigitalArt />
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}

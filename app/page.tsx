"use client";

import Container from "@/components/common/container";
import Contribution from "@/components/sections/contribution";
import Hero from "@/components/sections/hero";
import Links from "@/components/sections/links";
import Stack from "@/components/sections/stack";

import Work from "@/components/sections/work";
import Seperator from "@/components/common/seperator";
import Hackathons from "@/components/sections/hackathons";
import DigitalArt from "@/components/sections/digital-art";
import FeaturedProjects from "@/components/sections/featured-projects";

export default function Home() {
  return (
    <Container>
      <div className="pt-16">
        <Hero />
        <Seperator title="contribution" />
        <Contribution />
        <Seperator title="featured projects" />
        <FeaturedProjects />
        <Seperator title="hackathons" />
        <Hackathons />
        <Seperator title="work history" />
        <Work />
        <Seperator title="tech stack" />
        <Stack />
        <Seperator title="social links" />
        <Links />
        <DigitalArt />
      </div>
    </Container>
  );
}

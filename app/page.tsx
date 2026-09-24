import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { BigIdea } from "@/components/sections/BigIdea";
import { Pillars } from "@/components/sections/Pillars";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ChildProfile } from "@/components/sections/ChildProfile";
import { SharedAccess } from "@/components/sections/SharedAccess";
import { WhatItIsNot } from "@/components/sections/WhatItIsNot";
import { FamilySetup } from "@/components/sections/FamilySetup";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";

export default function Home() {
  return (
    <>
      <AnalyticsEvents />
      <Nav />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <BigIdea />
        <Pillars />
        <HowItWorks />
        <ChildProfile />
        <SharedAccess />
        <WhatItIsNot />
        <FamilySetup />
        <WaitlistSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

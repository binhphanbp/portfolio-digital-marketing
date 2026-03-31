import HomeSection from "../components/Home";
import AboutSection from "../components/About";
import ProjectsSection from "../components/Projects";
import WorkSection from "../components/Work";
import ServicesSection from "../components/Services";

import ContactSection from "../components/Contact";
import ScrollRevealWrapper from "../components/ScrollRevealWrapper";

export default function Home() {
  return (
    <ScrollRevealWrapper>
      <main className="main">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <WorkSection />
        <ServicesSection />

        <ContactSection />
      </main>
    </ScrollRevealWrapper>
  );
}

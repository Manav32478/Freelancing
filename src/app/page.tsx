import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import AmbientCanvas from "@/components/AmbientCanvas";
import Preloader from "@/components/Preloader";
import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Founders from "@/components/Founders";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Process from "@/components/Process";
import Principles from "@/components/Principles";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <AmbientCanvas />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Founders />
        <Services />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Process />
        <Principles />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

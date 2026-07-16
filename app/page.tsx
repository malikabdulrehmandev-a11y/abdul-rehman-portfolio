'use client';

import Navbar from '../components/Navbar';
import ScrollProgress from '../components/ScrollProgress';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import ExperienceSection from '../components/ExperienceSection';
import PortfolioSection from '../components/PortfolioSection';
import EducationSection from '../components/EducationSection';
import ResumeSection from '../components/ResumeSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <ScrollProgress />
      <div id="topProgress"></div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ExperienceSection />
      <PortfolioSection />
      <EducationSection />
      <ResumeSection />
      <section id="testimonials" className="py-24 px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-indigo-600">Testimonials</p>
            <h2 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white">Feedback from collaborations and clients.</h2>
          </div>
          <Testimonials />
        </div>
      </section>
      <ContactSection />
      <Footer />
    </main>
  );
}

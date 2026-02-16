import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-[family-name:var(--font-geist-sans)]">
      <main className="mx-auto max-w-3xl px-6">
        <Hero />
        <Education />
        <Experience />
        <Certifications />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}

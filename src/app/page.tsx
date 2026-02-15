import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { SelectedWork } from "@/components/SelectedWork";
import { VisualJournal } from "@/components/VisualJournal";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <section className="py-8 border-y" style={{ borderColor: "var(--divider)" }} aria-hidden>
        <Marquee speed={40}>
          <span className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold tracking-tighter text-muted/30 mx-8">
            Ying Chung
          </span>
          <span className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold tracking-tighter text-muted/20 mx-8">
            ✦
          </span>
        </Marquee>
      </section>
      <SelectedWork />
      <VisualJournal />
      <Footer />
    </main>
  );
}

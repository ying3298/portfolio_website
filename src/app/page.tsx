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
      <Marquee />
      <SelectedWork />
      <VisualJournal />
      <Footer />
    </main>
  );
}

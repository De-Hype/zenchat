import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import NotUserHeader from "@/Components/NonUserHeader";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NotUserHeader />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}

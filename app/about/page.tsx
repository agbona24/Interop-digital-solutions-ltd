import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us - Interop Digital Solutions",
  description: "Learn about Interop Digital Solutions - your strategic partner in digital transformation with 15+ years of experience.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
}

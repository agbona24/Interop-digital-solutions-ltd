import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us - Interop Digital Solutions",
  description: "Get in touch with Interop Digital Solutions. Let's start a conversation about your next project.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

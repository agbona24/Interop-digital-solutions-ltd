import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Services - Interop Digital Solutions",
  description: "Comprehensive IT services including API Development, UI/UX Design, Testing, Deployment, Security, Database, AI, IoT, and Cloud solutions.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
    </main>
  );
}

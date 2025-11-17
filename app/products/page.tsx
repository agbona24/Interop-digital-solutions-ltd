import Navigation from "@/components/Navigation";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Products - Interop Digital Solutions",
  description: "Innovative products including Process Automation, Payment Solutions, Commerce Platform, and Geo Services.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Products />
      </div>
      <Footer />
    </main>
  );
}

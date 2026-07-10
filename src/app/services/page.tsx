import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-24  pb-24">
      <ServicesHero />
      <ServicesGrid />
    </main>
  );
}
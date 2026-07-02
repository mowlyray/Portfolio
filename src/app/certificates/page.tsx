import CertificateHero from "@/components/certificates/CertificateHero";
import CertificateGrid from "@/components/certificates/CertificateGrid";

export default function CertificatesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-32 mt-16">

      <CertificateHero />

      <CertificateGrid />

    </main>
  );
}
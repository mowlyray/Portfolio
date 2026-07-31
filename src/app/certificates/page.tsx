import CertificateHero from "@/components/certificates/CertificateHero";
import CertificateGrid from "@/components/certificates/CertificateGrid";

export const metadata = {
  title: "Certificates",
  description:
    "Professional certifications earned by Mowly, reflecting continuous learning in web development and AI.",
};

export default function CertificatesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-32">

      <CertificateHero />

      <CertificateGrid />

    </main>
  );
}
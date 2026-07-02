import ContactSection from "@/components/contact/ContactSection";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Mowly. Feel free to reach out for software engineering opportunities or collaborations.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-28 pb-24">
      <ContactSection />
    </main>
  );
}
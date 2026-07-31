import About from "@/components/about/About";

export const metadata = {
  title: "About",
  description:
    "Learn about Mowly's journey from programming fundamentals to becoming a MERN Stack & Next.js Developer.",
};

export default function AboutPage() {
  return (
    <main className="pt-28">
      <About />
    </main>
  );
}
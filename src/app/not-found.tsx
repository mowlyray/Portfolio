import Link from "next/link";

import Container from "@/components/common/container";
import AnimatedBorderButton from "@/components/common/AnimatedBorderButton";

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center pt-28 pb-24">
      <Container className="flex flex-col items-center text-center">
        <span className="text-sm font-medium uppercase tracking-[0.25em] text-sky-300/70">
          Error 404
        </span>

        <h1 className="mt-6 text-5xl font-black text-white md:text-7xl">
          Page Not Found
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or may have
          been moved.
        </p>

        <Link href="/" className="mt-10">
          <AnimatedBorderButton>Back to Home</AnimatedBorderButton>
        </Link>
      </Container>
    </main>
  );
}

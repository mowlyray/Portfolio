"use client";

import { useEffect } from "react";

import Container from "@/components/common/container";
import AnimatedBorderButton from "@/components/common/AnimatedBorderButton";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center pt-28 pb-24">
      <Container className="flex flex-col items-center text-center">
        <span className="text-sm font-medium uppercase tracking-[0.25em] text-sky-300/70">
          Something Went Wrong
        </span>

        <h1 className="mt-6 text-4xl font-black text-white md:text-6xl">
          Unexpected Error
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
          An unexpected error occurred while loading this page. Please try
          again.
        </p>

        <AnimatedBorderButton className="mt-10" onClick={() => reset()}>
          Try Again
        </AnimatedBorderButton>
      </Container>
    </main>
  );
}

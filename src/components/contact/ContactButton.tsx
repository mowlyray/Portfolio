"use client";

import { SendHorizontal, LoaderCircle } from "lucide-react";

interface ContactButtonProps {
  loading: boolean;
}

export default function ContactButton({
  loading,
}: ContactButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="
        mt-8
        inline-flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        bg-cyan-400
        px-6
        py-4
        font-semibold
        text-slate-950
        transition
        hover:bg-cyan-300
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      {loading ? (
        <>
          <LoaderCircle
            size={20}
            className="animate-spin"
          />
          Sending...
        </>
      ) : (
        <>
          <SendHorizontal size={20} />
          Send Message
        </>
      )}
    </button>
  );
}
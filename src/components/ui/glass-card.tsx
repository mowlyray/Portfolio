import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        shadow-[0_10px_50px_rgba(0,0,0,.35)]
        transition-all
        duration-500
        hover:border-sky-400/30
        hover:bg-white/[0.06]
        hover:-translate-y-2
        hover:shadow-[0_20px_80px_rgba(14,165,233,.15)]
        `,
        className
      )}
    >
      {children}
    </div>
  );
}
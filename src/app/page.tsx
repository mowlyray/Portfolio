import AuroraBackground from "@/components/ui/AuroraBackground";
import MouseGlow from "@/components/effects/MouseGlow";

export default function Home() {
  return (
    <AuroraBackground>
      <MouseGlow />

      <main className="min-h-screen"></main>
    </AuroraBackground>
  );
}
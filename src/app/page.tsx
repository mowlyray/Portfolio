import AuroraBackground from "@/components/ui/AuroraBackground";
import MouseGlow from "@/components/effects/MouseGlow";
import CustomCursor from "@/components/effects/CustomCursor";

export default function Home() {
  return (
    <AuroraBackground>
      <MouseGlow />
      <CustomCursor />

      <main className="min-h-screen"></main>
    </AuroraBackground>
  );
}
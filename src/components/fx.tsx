"use client";

import { useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import { useTheme } from "next-themes";
import Aurora from "@/components/bits/Aurora";
import ClickSpark from "@/components/bits/ClickSpark";
import Magnet from "@/components/bits/Magnet";
import Particles from "@/components/bits/Particles";
import RotatingText from "@/components/bits/RotatingText";
import ScrollVelocity from "@/components/bits/ScrollVelocity";
import ShinyText from "@/components/bits/ShinyText";
import SpotlightCard from "@/components/bits/SpotlightCard";

/** Theme-aware wrappers around the React Bits components (reactbits.dev). */

const accent = { light: "#047857", dark: "#34d399" };

const noop = () => () => {};

/** Light until hydrated, so server and client markup match. */
function useMode() {
  const { resolvedTheme } = useTheme();
  const hydrated = useSyncExternalStore(noop, () => true, () => false);
  return hydrated && resolvedTheme === "dark" ? "dark" : "light";
}

/** Card with a cursor-following emerald spotlight; colours come from the site tokens. */
export function GlowCard({ children, className }: { children: ReactNode; className?: string }) {
  const mode = useMode();
  return (
    <SpotlightCard
      theme={mode}
      spotlightColor={accent[mode]}
      intensity={mode === "dark" ? 0.18 : 0.5}
      spotlightSize={320}
      className={className}
      style={
        {
          "--spotlight-card-surface": "var(--surface)",
          "--spotlight-card-border": "var(--border)",
        } as CSSProperties
      }
    >
      {children}
    </SpotlightCard>
  );
}

export function HeroAurora() {
  const mode = useMode();
  return (
    <Aurora
      colorStops={mode === "dark" ? ["#064e3b", "#34d399", "#0d9488"] : ["#a7f3d0", "#34d399", "#5eead4"]}
      lightMode={mode === "light"}
      amplitude={1.1}
      blend={0.6}
      speed={0.6}
      opacity={mode === "dark" ? 0.75 : 0.55}
    />
  );
}

/** Slow drifting emerald particles behind the whole page. */
export function PageParticles() {
  const mode = useMode();
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <Particles
        particleColors={mode === "dark" ? ["#34d399", "#10b981", "#5eead4"] : ["#047857", "#059669", "#0d9488"]}
        lightMode={mode === "light"}
        particleCount={220}
        particleSpread={12}
        speed={0.12}
        particleBaseSize={150}
        alphaParticles
        drift="up"
        driftSpeed={0.6}
        twinkle={0.5}
        connections
        connectionDistance={120}
        hoverEffect="repel"
        opacity={mode === "dark" ? 0.9 : 0.85}
      />
    </div>
  );
}

export function Shiny({ text }: { text: string }) {
  const mode = useMode();
  return (
    <ShinyText
      text={text}
      color={mode === "dark" ? "#a1a1aa" : "#52525b"}
      shineColor={accent[mode]}
      speed={3}
    />
  );
}

export function Rotating({ texts, className }: { texts: string[]; className?: string }) {
  return (
    <RotatingText
      texts={texts}
      effect="slide"
      rotationInterval={2600}
      mainClassName={className}
      staggerDuration={0.02}
    />
  );
}

export function Magnetic({ children }: { children: ReactNode }) {
  return (
    <Magnet padding={60} magnetStrength={4}>
      {children}
    </Magnet>
  );
}

export function SkillsMarquee({ rows }: { rows: string[] }) {
  return (
    <div dir="ltr" className="overflow-hidden py-6 text-muted">
      <ScrollVelocity
        texts={rows}
        velocity={40}
        numCopies={4}
        separator=" · "
        fadeEdges
        outlineAlternate
        fontSize="clamp(1.75rem, 5vw, 3.5rem)"
        fontWeight={700}
      />
    </div>
  );
}

export function Sparks({ children }: { children: ReactNode }) {
  const mode = useMode();
  return <ClickSpark sparkColor={accent[mode]} sparkCount={10} sparkRadius={22}>{children}</ClickSpark>;
}

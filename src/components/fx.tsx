"use client";

import { useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import { useTheme } from "next-themes";
import Aurora from "@/components/bits/Aurora";
import ClickSpark from "@/components/bits/ClickSpark";
import Magnet from "@/components/bits/Magnet";
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

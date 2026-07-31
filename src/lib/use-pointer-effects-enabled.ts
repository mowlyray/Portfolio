import { useSyncExternalStore } from "react";

const COARSE_POINTER = "(pointer: coarse)";
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function getSnapshot() {
  return (
    !window.matchMedia(COARSE_POINTER).matches &&
    !window.matchMedia(REDUCED_MOTION).matches
  );
}

function getServerSnapshot() {
  return false;
}

function subscribe(callback: () => void) {
  const pointerQuery = window.matchMedia(COARSE_POINTER);
  const motionQuery = window.matchMedia(REDUCED_MOTION);

  pointerQuery.addEventListener("change", callback);
  motionQuery.addEventListener("change", callback);

  return () => {
    pointerQuery.removeEventListener("change", callback);
    motionQuery.removeEventListener("change", callback);
  };
}

/**
 * Whether mouse-following visual effects (custom cursor, glow) should render.
 * False on touch/coarse-pointer devices and when the user prefers reduced motion.
 */
export function usePointerEffectsEnabled() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

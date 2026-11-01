import { lazy, Suspense, useEffect, useState } from "react";

const GlobeScene = lazy(() => import("./GlobeScene"));

export function InteractiveGlobe() {
  const [isSpinning, setIsSpinning] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [error, setError] = useState("");

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stopForReducedMotion = () => {
      if (preference.matches) {
        setIsSpinning(false);
      }
    };

    preference.addEventListener("change", stopForReducedMotion);
    return () =>
      preference.removeEventListener("change", stopForReducedMotion);
  }, []);

  return (
    <div
      className="interactive-globe"
      role="group"
      aria-label="Interactive Earth globe. Focus the globe to rotate with arrow keys, drag to rotate, or scroll to zoom."
    >
      <div className="globe-surface">
        <Suspense
          fallback={
            <div className="globe-loading" role="status">
              LOADING EARTH DATA...
            </div>
          }
        >
          <GlobeScene isSpinning={isSpinning} onError={setError} />
        </Suspense>
      </div>
      <button
        className="globe-motion-toggle"
        type="button"
        aria-pressed={isSpinning}
        onClick={() => setIsSpinning((spinning) => !spinning)}
      >
        {isSpinning ? "PAUSE ROTATION" : "RESUME ROTATION"}
      </button>
      {error && (
        <p className="globe-error" role="status">
          {error}
        </p>
      )}
      <span className="globe-instructions">DRAG TO ROTATE / SCROLL TO ZOOM</span>
    </div>
  );
}

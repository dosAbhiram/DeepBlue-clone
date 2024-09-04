import { useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";
import Header from "./header";

function VantaBackground() {
  const vantaRef = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    try {
      animationInstance.current = BIRDS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 500.0,
        minWidth: 900.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x333333,
        color1: 0x1c00ff,
        colorMode: "lerpGradient",
        birdSize: 1.9,
        wingSpan: 26.0,
        separation: 64.0,
        alignment: 24.0,
        cohesion: 100.0,
      });
    } catch (error) {
      console.error("[VANTA] Initialization error:", error);
    }

    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Header />
    </div>
  );
}

export default VantaBackground;

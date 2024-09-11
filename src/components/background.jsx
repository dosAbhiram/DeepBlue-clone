/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";
import BIRDS from "vanta/dist/vanta.birds.min";
import GLOBE from "vanta/dist/vanta.globe.min";
import RINGS from "vanta/dist/vanta.rings.min";
import Header from "./header.jsx";

function VantaBackground() {
  const vantaRef = useRef(null);
  const animationInstance = useRef(null);

  const getRandomAnimation = () => {
    const animations = ["BIRDS", "GLOBE", "WAVES", "RINGS"];
    return animations[Math.floor(Math.random() * animations.length)];
  };

  const initVantaEffect = () => {
    const randomAnimation = getRandomAnimation();

    switch (randomAnimation) {
      case "BIRDS":
        animationInstance.current = BIRDS({
          el: vantaRef.current,
          THREE,
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
        break;
      case "GLOBE":
        animationInstance.current = GLOBE({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 500.0,
          minWidth: 900.0,
          scale: 1.0,
          scaleMobile: 1.0,
          size: 1.4,
          backgroundColor: 0x333333,
          color: 0x728eff,
          color2: 0xeae0e0,
        });
        break;
      case "WAVES":
        animationInstance.current = WAVES({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 500.0,
          minWidth: 900.0,
          scale: 1.0,
          color: 0x81a4f,
          shininess: 35.0,
          waveHeight: 9.0,
          scaleMobile: 1.0,
        });
        break;
      case "RINGS":
        animationInstance.current = RINGS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.3,
          scaleMobile: 1.0,
          backgroundColor: 0x1b1b1f,
          color: 0xff0000,
        });
    }
  };

  useEffect(() => {
    if (vantaRef.current) {
      initVantaEffect();
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
      style={{ width: "100%", height: "100vh", overflow: "hidden" }}
    >
      <Header />
    </div>
  );
}

export default VantaBackground;

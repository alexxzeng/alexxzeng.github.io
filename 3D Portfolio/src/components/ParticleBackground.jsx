import React from 'react';
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      backgroundMode: {
          enable: true,
          zIndex: -1
      },
      fps_limit: 60,
      interactivity: {
          detect_on: "canvas",
          events: {
              resize: true
          }
      },
      particles: {
          color: {
              value: "#9fafca"
          },
          number: {
              density: {
                  enable: true,
                  area: 1080
              },
              limit: 0,
              value: 200,
          },
          opacity: {
              animation: {
                  enable: true,
                  minimumValue: 0.05,
                  speed: 1,
                  sync: false
              },
              random: {
                  enable: true,
                  minimumValue: 0.05
              },
              value: 0.8
          },
          shape: {
              type: "circle"
          },
          size: {
              random: {
                  enable: true,
                  minimumValue: 0.5
              },
              value: 1
          }
      }
  }),
    [],
  );

  if (init) {
    return (
      <Particles
        className='stars'
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
}

export default ParticleBackground;

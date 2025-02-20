// 'use client'
// import { loadSlim } from "tsparticles-slim";
// import { Engine } from "tsparticles-engine";
// import Particles from "react-tsparticles";

// const ParticlesBackground: React.FC = () => {
//   const particlesInit = async (engine: Engine) => {
//     await loadSlim(engine);
//   };

//     return (
//         <>


// <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: true }, // Cover entire screen
//         particles: {
//           number: { value: 80, density: { enable: true, area: 800 } },
//           shape: { type: "square" },
//           opacity: { value: 0.6 },
//           size: { value: 3 },
//           move: { enable: true, speed: 0.8 },
//           links: {
//             enable: true,
//             distance: 200,
//             color: "#ffffff",
//             opacity: 0.3,
//             width: 1,
//           },
//           color: { value: "#ffffff" },
//         },
//         interactivity: {
//           events: {
//             onHover: { enable: true, mode: "repulse" },
//             onClick: { enable: false },
//           },
//         },
//         background: { color: "transparent" }, // Keep it transparent
//       }}
//     />

//         </>
//     );
// };

// export default ParticlesBackground;






// 'use client'
// import { useCallback, useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import type { Container, Engine } from "@tsparticles/engine";
// import { loadSlim } from "@tsparticles/slim"; // If you're using this package

// const App = () => {
//     const [init, setInit] = useState(false);

//     // This should be run only once per application lifetime
//     useEffect(() => {
//         initParticlesEngine(async (engine) => {
//             await loadSlim(engine); // Load the slim version for a smaller bundle size
//         }).then(() => {
//             setInit(true);
//         });
//     }, []);

//     const particlesLoaded = (container: Container) => {
//         console.log(container);
//     };

//     return (
//         <>


//             {init && (
//                 <Particles
//                     id="tsparticles"
//                     particlesLoaded={particlesLoaded}
//                     options={{
//                         // background: {
//                         //     color: {
//                         //         value: "#0d47a1",
//                         //     },
//                         // },
//                         fpsLimit: 120,
//                         interactivity: {
//                             events: {
//                                 onClick: {
//                                     enable: true,
//                                     mode: "push",
//                                 },
//                                 onHover: {
//                                     enable: true,
//                                     mode: "repulse",
//                                 },
//                                 resize: true,
//                             },
//                             modes: {
//                                 push: {
//                                     quantity: 4,
//                                 },
//                                 repulse: {
//                                     distance: 200,
//                                     duration: 0.4,
//                                 },
//                             },
//                         },
//                         particles: {
//                             color: {
//                                 value: "#ffffff",
//                             },
//                             links: {
//                                 color: "#ffffff",
//                                 distance: 150,
//                                 enable: true,
//                                 opacity: 0.5,
//                                 width: 1,
//                             },
//                             move: {
//                                 direction: "none",
//                                 enable: true,
//                                 outModes: {
//                                     default: "bounce",
//                                 },
//                                 random: false,
//                                 speed: 6,
//                                 straight: false,
//                             },
//                             number: {
//                                 density: {
//                                     enable: true,
//                                     area: 800,
//                                 },
//                                 value: 80,
//                             },
//                             opacity: {
//                                 value: 0.5,
//                             },
//                             shape: {
//                                 type: "circle",
//                             },
//                             size: {
//                                 value: { min: 1, max: 5 },
//                             },
//                         },
//                         detectRetina: true,
//                     }}
//                 />
//             )}

//         </>
//     );
// };

// export default App;

"use client";

import { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback((container: Container | undefined) => {
    console.log("Particles Loaded:", container);
  }, []);

  return init ? (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        fullScreen: { enable: true },
        fpsLimit: 120,
        particles: {
          number: { value: 80, density: { enable: true, area: 1000 } },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 5 } },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            outModes: { default: "bounce" },
          },
          links: {
            enable: true,
            distance: 400,
            color: "#ffffff",
            opacity: 0.3,
            width: 1,
          },
          color: { value: "#ffffff" },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        detectRetina: true,
        background: { color: "transparent" },
      }}
    />
  ) : null;
};

export default ParticlesBackground;


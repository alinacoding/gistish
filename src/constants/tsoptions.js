// const options = {
//   detectRetina: false,
//   fpsLimit: 60,
//   interactivity: {
//     detect_on: "window",
//     events: {
//       onHover: {
//         enable: true,
//         mode: "bubble",
//       },
//       resize: true,
//     },
//     modes: {
//       bubble: {
//         distance: 40,
//         duration: 2,
//         opacity: 8,
//         size: 6,
//         speed: 3,
//       },
//     },
//   },
//   particles: {
//     color: {
//       value: "#ff0000",
//       animation: {
//         enable: true,
//         speed: 20,
//         sync: true,
//       },
//     },
//     lineLinked: {
//       blink: false,
//       color: "random",
//       consent: false,
//       distance: 30,
//       enable: true,
//       opacity: 0.3,
//       width: 0.5,
//     },
//     move: {
//       attract: {
//         enable: false,
//         rotate: {
//           x: 600,
//           y: 1200,
//         },
//       },
//       bounce: false,
//       direction: "none",
//       enable: true,
//       outMode: "bounce",
//       random: true,
//       speed: 0.5,
//       straight: false,
//     },
//     number: {
//       density: {
//         enable: false,
//         area: 2000,
//       },
//       limit: 0,
//       value: 200,
//     },
//     opacity: {
//       animation: {
//         enable: true,
//         minimumValue: 0.05,
//         speed: 2,
//         sync: false,
//       },
//       random: false,
//       value: 1,
//     },
//     shape: {
//       type: "circle",
//     },
//     size: {
//       animation: {
//         enable: false,
//         minimumValue: 0.8,
//         speed: 40,
//         sync: false,
//       },
//       random: true,
//       value: 1,
//     },
//   },
//   polygon: {
//     draw: {
//       enable: true,
//       lineColor: "rgba(255,255,255,0.2)",
//       lineWidth: 0.5,
//     },
//     move: {
//       radius: 10,
//     },
//     // inlineArrangement: "equidistant",
//     // scale: 0.5,
//     type: "inline",
//     url: "https://particles.js.org/images/smalldeer.svg",
//     // fullScreen: {
//     //   enable: true,
//     // },
//     height: "100%",
//   },
// };

// export { options };

// const options = {
//   particles: {
//     number: {
//       value: 80,
//       density: {
//         enable: true,
//         area: 800,
//       },
//     },
//     color: {
//       value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
//     },
//     shape: {
//       type: "circle",
//       stroke: {
//         width: 0,
//         color: "#b6b2b2",
//       },
//     },
//     opacity: {
//       value: 0.5211089197812949,
//       random: false,
//       animation: {
//         enable: true,
//         speed: 1,
//         minimumValue: 0.1,
//         sync: false,
//       },
//     },
//     size: {
//       value: 8.017060304327615,
//       random: true,
//       animation: {
//         enable: true,
//         speed: 12.181158184520175,
//         minimumValue: 0.1,
//         sync: false,
//       },
//     },
//     lineLinked: {
//       enable: false,
//       distance: 150,
//       color: "#c8c8c8",
//       opacity: 0.4,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 1,
//       direction: "none",
//       random: false,
//       straight: false,
//       outMode: "bounce",
//       bounce: false,
//       attract: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 1200,
//       },
//     },
//   },
//   interactivity: {
//     detectOn: "canvas",
//     events: {
//       onHover: {
//         enable: true,
//         mode: "connect",
//       },
//       onClick: {
//         enable: false,
//         mode: "push",
//       },
//       resize: true,
//     },
//     modes: {
//       grab: {
//         distance: 400,
//         lineLinked: {
//           opacity: 1,
//         },
//       },
//       bubble: {
//         distance: 400,
//         size: 40,
//         duration: 2,
//         opacity: 8,
//         speed: 3,
//       },
//       connect: {},
//       repulse: {
//         distance: 200,
//         duration: 0.4,
//       },
//       push: {
//         particles_nb: 4,
//       },
//       remove: {
//         particles_nb: 2,
//       },
//     },
//   },
//   detectRetina: true,
// };

const options = {
  fps_limit: 60,
  interactivity: {
    detect_on: "window",
    events: {
      onclick: { enable: true, mode: "push" },
      onhover: {
        enable: true,
        mode: "repulse",
        parallax: { enable: false, force: 60, smooth: 10 },
      },
      resize: true,
    },
    modes: {
      bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40, speed: 3 },
      grab: { distance: 400, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#ffffff" },
    line_linked: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 2,
      straight: false,
    },
    number: { density: { enable: true, value_area: 800 }, value: 80 },
    opacity: {
      anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
      random: false,
      value: 0.5,
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400",
      },
      image: {
        height: 100,
        replace_color: true,
        src: "images/github.svg",
        width: 100,
      },
      polygon: { nb_sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "circle",
    },
    size: {
      anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
      random: true,
      value: 5,
    },
  },
  polygon: {
    draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
    move: { radius: 10 },
    scale: 1,
    type: "none",
    url: "",
  },
  retina_detect: true,
};

export { options };

// Initialize particles.js on the element with id "particles-js"
particlesJS("particles-container", {
  // Particle options
  particles: {
    // Number of particles and their density configuration
    number: {
      value: 100, // Number of particles
      density: {
        enable: true, // Enable density configuration
        value_area: 1000, // Area within which particles are densely packed
      },
    },
    // Color configuration for the particles
    color: {
      value: ["#ffffff", "#4ee1a0", "#d9d9d9"], // Array of colors particles can be
    },
    // Shape configuration for the particles
    shape: {
      type: "circle", // Shape of particles (circle, edge, triangle, polygon, star, image)
      stroke: {
        width: 0, // Stroke width of the particles
        color: "#fff", // Stroke color of the particles
      },
      polygon: {
        nb_sides: 5, // Number of sides if the shape is a polygon
      },
      image: {
        src: "img/github.svg", // Image source if the shape is an image
        width: 100, // Width of the image particles
        height: 100, // Height of the image particles
      },
    },
    // Opacity configuration for the particles
    opacity: {
      value: 0.6, // Opacity of the particles
      random: false, // Randomize particle opacity if true
      anim: {
        enable: false, // Enable opacity animation
        speed: 1, // Speed of the opacity animation
        opacity_min: 0.1, // Minimum opacity during the animation
        sync: false, // Sync the opacity animation if true
      },
    },
    // Size configuration for the particles
    size: {
      value: 2, // Size of the particles
      random: true, // Randomize particle size if true
      anim: {
        enable: false, // Enable size animation
        speed: 40, // Speed of the size animation
        size_min: 0.1, // Minimum size during the animation
        sync: false, // Sync the size animation if true
      },
    },
    // Line linked configuration between particles
    line_linked: {
      enable: true, // Enable line links between particles
      distance: 120, // Distance between linked particles
      color: "#ffffff", // Color of the links
      opacity: 0.4, // Opacity of the links
      width: 1, // Width of the links
    },
  },
  // Interactivity configuration for the particles
  interactivity: {
    detect_on: "canvas", // Event detection area ("canvas", "window")
    events: {
      // Mouse hover interaction
      onhover: {
        enable: true, // Enable on-hover interaction
        mode: "grab", // Interaction mode (grab, bubble, repulse, etc.)
      },
      // Mouse click interaction
      onclick: {
        enable: false, // Disable on-click interaction
      },
      // Window resize detection
      resize: true, // Resize particles when the window is resized
    },
    // Interaction modes configuration
    modes: {
      grab: {
        distance: 140, // Distance particles are grabbed during interaction
        line_linked: {
          opacity: 1, // Opacity of the link when particles are grabbed
        },
      },
      bubble: {
        distance: 400, // Distance at which bubbles are created
        size: 40, // Size of the bubbles
        duration: 2, // Duration of the bubble animation
        opacity: 8, // Opacity of the bubbles
        speed: 3, // Speed of the bubble animation
      },
      repulse: {
        distance: 200, // Distance particles are repulsed
        duration: 0.4, // Duration of the repulsion animation
      },
      push: {
        particles_nb: 4, // Number of particles to push
      },
      remove: {
        particles_nb: 2, // Number of particles to remove
      },
    },
  },
  retina_detect: true, // Enable retina detection for better performance on high-resolution screens
});

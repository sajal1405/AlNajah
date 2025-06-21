window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  const container = document.querySelector(".container");
  const footer = document.querySelector(".footer");

  // Fade out preloader after a short delay
  setTimeout(() => {
    preloader.classList.add("fade-out");
  }, 2000);

  preloader.addEventListener(
    "transitionend",
    () => {
      preloader.style.display = "none";
      document.body.style.overflowY = "auto";
      container.classList.add("loaded");
      adjustSpacing();
    },
    { once: true }
  );

  // Dynamically adjust top spacing based on remaining screen height
  function adjustSpacing() {
    const totalHeight = window.innerHeight;
    const contentHeight = container.scrollHeight;
    const buffer = totalHeight - contentHeight;

    // Add extra padding to center content if screen is very tall
    if (buffer > 30) {
      container.style.paddingTop = `${40 + buffer / 3}px`;
    }

    // Reduce footer height on smaller devices
    if (totalHeight < 640) {
      footer.style.padding = "6px 12px";
      footer.style.fontSize = "12px";
    }
  }

  // Touch feedback: vibrate on mobile when button is tapped
  document.querySelectorAll(".glow-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (navigator.vibrate) navigator.vibrate(20);
    });
  });
});

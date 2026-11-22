const imageFallback = new URL("./image-fallback.svg", document.baseURI).href;

window.addEventListener(
  "error",
  (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || image.src === imageFallback) {
      return;
    }

    image.src = imageFallback;
    image.alt = "Photo unavailable";
  },
  true,
)
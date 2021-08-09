(function () {
  const fullImg = document.querySelector(".full-img");
  const smallImg = document.querySelectorAll(".gallery img");
  const modal = document.querySelector(".modal");

  smallImg.forEach(function (img) {
    img.addEventListener("click", function () {
      modal.classList.add("open");
      fullImg.classList.add("open");

      // Changing the images dynamically
      //const originalQuality = img.getAttribute("alt");
      const originalQuality = img.dataset.img;
      fullImg.src = `${originalQuality}`;
    });
  });

  // close modal clicking outside
  modal.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal")) {
      modal.classList.remove("open");
      fullImg.classList.remove("open");
    }
  });

  // close modal pressing ESC button
  document.addEventListener("keydown", function (e) {
    event = e || window.event;
    let isEscape = false;
    if ("key" in event) {
      isEscape = e.key === "Escape" || e.key === "Esc";
    } else {
      isEscape = e.keyCode === 27;
    }
    if (isEscape) {
      modal.classList.remove("open");
      fullImg.classList.remove("open");
    }
  });
})();

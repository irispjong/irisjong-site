// Click-to-enlarge viewer for the homepage gallery.
// Without JavaScript, clicking an image simply opens the larger file.
(function () {
  var dialog = document.getElementById("lightbox");
  var links = Array.prototype.slice.call(document.querySelectorAll(".gallery-link"));
  if (!dialog || !dialog.showModal || links.length === 0) return;

  var img = dialog.querySelector(".lb-img");
  var current = 0;

  function show(i) {
    current = (i + links.length) % links.length;
    var thumb = links[current].querySelector("img");
    img.src = links[current].getAttribute("href");
    img.alt = thumb ? thumb.alt : "";
  }

  links.forEach(function (link, i) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      show(i);
      dialog.showModal();
    });
  });

  dialog.querySelector(".lb-close").addEventListener("click", function () { dialog.close(); });
  dialog.querySelector(".lb-prev").addEventListener("click", function () { show(current - 1); });
  dialog.querySelector(".lb-next").addEventListener("click", function () { show(current + 1); });

  // Click the dark area around the image to close
  dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });

  document.addEventListener("keydown", function (e) {
    if (!dialog.open) return;
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
})();

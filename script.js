// Template 1: gentle fade-up on enter, and prev/next buttons for the photo strip.
(function () {
  var items = document.querySelectorAll(".fade");
  if (document.documentElement.classList.contains("js") && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el, i) {
      // Small stagger between siblings that enter together.
      el.style.transitionDelay = (i % 3) * 80 + "ms";
      io.observe(el);
    });
    // Safety net: never leave content hidden if the observer does not fire.
    setTimeout(function () { items.forEach(function (el) { el.classList.add("is-in"); }); }, 6000);
  } else {
    items.forEach(function (el) { el.classList.add("is-in"); });
  }

  var strip = document.getElementById("strip");
  document.querySelectorAll(".strip__ctl [data-dir]").forEach(function (b) {
    b.addEventListener("click", function () {
      var step = strip.querySelector("figure").getBoundingClientRect().width + 28;
      strip.scrollBy({ left: step * Number(b.dataset.dir), behavior: "smooth" });
    });
  });
})();

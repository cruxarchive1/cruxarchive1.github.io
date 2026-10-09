(function () {
  var b = document.getElementById("mb");
  var p = document.getElementById("panel");
  if (!b || !p) return;
  function set(open) {
    p.classList.toggle("open", open);
    b.setAttribute("aria-expanded", open ? "true" : "false");
  }
  b.addEventListener("click", function (e) {
    e.stopPropagation();
    set(!p.classList.contains("open"));
  });
  document.addEventListener("click", function (e) {
    if (!p.contains(e.target)) set(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && p.classList.contains("open")) {
      set(false);
      b.focus();
    }
  });
})();

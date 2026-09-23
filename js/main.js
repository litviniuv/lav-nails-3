(function () {
  var burger = document.querySelector(".burger");
  var menu = document.getElementById("mobile-menu");
  if (!burger || !menu) return;

  function setOpen(open) {
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
    menu.classList.toggle("is-open", open);
    if (open) {
      menu.removeAttribute("hidden");
    } else {
      menu.setAttribute("hidden", "");
    }
    document.body.classList.toggle("is-menu-open", open);
  }

  burger.addEventListener("click", function () {
    var open = burger.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  menu.addEventListener("click", function (e) {
    var link = e.target.closest("a");
    if (!link) return;
    setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      burger.focus();
    }
  });
})();

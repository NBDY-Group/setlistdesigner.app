(function () {
  "use strict";

  var STORAGE_KEY = "sld-mode";
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".mode-tab"));
  var cards = Array.prototype.slice.call(document.querySelectorAll("[data-set-mode]"));

  if (!tabs.length) return;

  function currentMode() {
    return document.documentElement.getAttribute("data-mode") === "guitar-tech"
      ? "guitar-tech"
      : "setlist";
  }

  function applyMode(mode) {
    document.documentElement.setAttribute("data-mode", mode);
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (e) {}
    tabs.forEach(function (tab) {
      var selected = tab.getAttribute("data-mode-value") === mode;
      tab.setAttribute("aria-selected", selected ? "true" : "false");
      tab.tabIndex = selected ? 0 : -1;
    });
  }

  // Sync tab state to whatever the head script already resolved (query param,
  // localStorage, or the Setlist Mode default) so there is no visible flicker.
  applyMode(currentMode());

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      applyMode(tab.getAttribute("data-mode-value"));
    });

    tab.addEventListener("keydown", function (event) {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      var nextIndex = event.key === "ArrowRight"
        ? (index + 1) % tabs.length
        : (index - 1 + tabs.length) % tabs.length;
      var nextTab = tabs[nextIndex];
      nextTab.focus();
      applyMode(nextTab.getAttribute("data-mode-value"));
    });
  });

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      applyMode(card.getAttribute("data-set-mode"));
    });
  });
})();

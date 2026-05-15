/**
 * Class XI Chemistry — shared JavaScript
 * 1. Dark mode toggle (saves to localStorage)
 * 2. Interactive MCQs (click option → ✅/❌ feedback)
 * 3. "Show Answer" reveals hidden answer blocks
 */

(function () {
  "use strict";

  var STORAGE_KEY = "chemistry-theme";

  /* ---------- Dark mode ---------- */
  function getPreferredTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  function initTheme() {
    // If no saved theme, sync with system (inline script only runs when saved)
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(getPreferredTheme());
    }

    var toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      var current =
        document.documentElement.getAttribute("data-theme") ||
        getPreferredTheme();
      var next = current === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    });
  }

  /* ---------- MCQ: click option to check answer ---------- */
  function initMcqs() {
    document.querySelectorAll(".mcq").forEach(function (mcqEl) {
      var correctValue = mcqEl.getAttribute("data-correct");
      var feedbackEl = mcqEl.querySelector(".mcq__feedback");
      var options = mcqEl.querySelectorAll(".mcq__option");

      options.forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (btn.disabled) return;

          var chosen = btn.getAttribute("data-value");
          var isCorrect = chosen === correctValue;

          options.forEach(function (opt) {
            opt.disabled = true;
            if (opt.getAttribute("data-value") === correctValue) {
              opt.classList.add("is-correct");
            } else if (opt === btn && !isCorrect) {
              opt.classList.add("is-wrong");
            }
          });

          if (feedbackEl) {
            feedbackEl.textContent = isCorrect
              ? "✅ Correct!"
              : "❌ Not quite — see the correct answer below.";
            feedbackEl.style.color = isCorrect ? "#16a34a" : "#dc2626";
          }
        });
      });
    });
  }

  /* ---------- Show Answer button (MCQs + short questions) ---------- */
  function initShowAnswers() {
    var showBtn = document.getElementById("show-answers-btn");
    if (!showBtn) return;

    showBtn.addEventListener("click", function () {
      document.querySelectorAll(".mcq-answers").forEach(function (el) {
        el.classList.add("is-visible");
      });
      document.querySelectorAll(".short-q__answer").forEach(function (el) {
        el.classList.add("is-visible");
      });
      showBtn.textContent = "Answers shown";
      showBtn.disabled = true;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initMcqs();
    initShowAnswers();
  });
})();

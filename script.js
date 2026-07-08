const toast = document.querySelector("#toast");
const plusOneLinks = document.querySelectorAll('a[href^="mailto:hello@f-and.com"]');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 3200);
}

plusOneLinks.forEach((link) => {
  link.addEventListener("click", () => {
    showToast("+1-Mail wird geöffnet. Betreff: Lagerfeuer Augsburg +1");
  });
});

document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;
    document.querySelectorAll("details").forEach((other) => {
      if (other !== detail) other.open = false;
    });
  });
});

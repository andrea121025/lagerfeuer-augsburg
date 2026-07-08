const toast = document.querySelector("#toast");
const plusOneLinks = document.querySelectorAll('a[href="#plus-one"]');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 3200);
}

plusOneLinks.forEach((link) => {
  link.addEventListener("click", () => {
    showToast("+1: Bitte antworten Sie auf Ihre persönliche Einladung mit Name, Rolle und Unternehmen.");
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

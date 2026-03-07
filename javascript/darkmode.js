function toggleTheme() {
  const isDark = document.getElementById("themeToggle").checked;
  const body = document.body;
  const html = document.documentElement;

  if (isDark) {
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
    html.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
    html.setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

// Load on page start
window.onload = () => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.getElementById("themeToggle").checked = true;
    toggleTheme();
  }
};

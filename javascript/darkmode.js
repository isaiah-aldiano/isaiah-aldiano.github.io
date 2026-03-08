function toggleTheme() {
  const isDark = document.getElementById("themeToggle").checked;

  setTheme(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function setTheme(dark) {
  const body = document.body;
  const html = document.documentElement;
  const githubIcon = document.getElementById("github");
  const linkedinIcon = document.getElementById("linkedin");
  if (dark) {
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
    html.setAttribute("data-bs-theme", "dark");
    githubIcon.src = githubIcon.dataset.dark;
    linkedinIcon.src = linkedinIcon.dataset.dark;
  } else {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
    html.setAttribute("data-bs-theme", "light");
    githubIcon.src = githubIcon.dataset.light;
    linkedinIcon.src = linkedinIcon.dataset.light;
  }
}

// Load on page start
window.onload = () => {
  const contDark = localStorage.getItem("theme") === "dark" ? true : false;
  setTheme(contDark);
};

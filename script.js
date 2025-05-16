// 1. Initialize AOS (Animate On Scroll)
AOS.init();

// 2. Typing Effect for Header Title
const headerText = "Hi, I'm [Manasseh Githua]";
let i = 0;
const header = document.querySelector("header h1");

function typeEffect() {
  if (i < headerText.length) {
    header.textContent += headerText.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
header.textContent = ""; // Start with empty text
typeEffect();

// 3. Dark Mode Toggle with localStorage
const darkModeToggle = document.createElement("button");
darkModeToggle.textContent = "🌙 Toggle Dark Mode";
darkModeToggle.style.position = "fixed";
darkModeToggle.style.top = "20px";
darkModeToggle.style.right = "20px";
darkModeToggle.style.zIndex = "1000";
darkModeToggle.style.padding = "10px";
darkModeToggle.style.cursor = "pointer";
document.body.appendChild(darkModeToggle);

function setDarkMode(enabled) {
  if (enabled) {
    document.body.classList.add("dark");
    localStorage.setItem("darkMode", "true");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode", "false");
  }
}

darkModeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  setDarkMode(!isDark);
});

if (localStorage.getItem("darkMode") === "true") {
  setDarkMode(true);
}

// 4. Scroll-to-top Button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.textContent = "↑";
scrollTopBtn.style.position = "fixed";
scrollTopBtn.style.bottom = "20px";
scrollTopBtn.style.right = "20px";
scrollTopBtn.style.padding = "10px";
scrollTopBtn.style.display = "none";
scrollTopBtn.style.zIndex = "1000";
scrollTopBtn.style.borderRadius = "50%";
scrollTopBtn.style.background = "#2c3e50";
scrollTopBtn.style.color = "white";
scrollTopBtn.style.border = "none";
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

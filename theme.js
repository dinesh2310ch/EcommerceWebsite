document.addEventListener('DOMContentLoaded', (event) => {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (currentTheme) {
        document.body.className = currentTheme;
        const icon = document.getElementById("icon");
        icon.src = currentTheme === "dark-theme" ? "img/sun.png" : "img/moon.png";
    }
});

function toggleTheme() {
    let currentTheme = document.body.className;
    currentTheme = currentTheme === "dark-theme" ? "" : "dark-theme";
    document.body.className = currentTheme;
    localStorage.setItem('theme', currentTheme);
    const icon = document.getElementById("icon");
    icon.src = currentTheme === "dark-theme" ? "img/sun.png" : "img/moon.png";
}

// Attach the event listener to the icon
const icon = document.getElementById("icon");
if (icon) {
    icon.addEventListener('click', toggleTheme);
}

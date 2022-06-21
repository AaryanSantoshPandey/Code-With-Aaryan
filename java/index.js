console.log("Script is ruinning...")
function initThemeSelector() {
    const themeSelect = document.getElementById("themeSelect");
    const themeStylesheetLink = document.getElementById("themeStylesheetLink");
    const currentTheme = localStorage.getItem("theme") || "default";

    function activateTheme(themeName) {
        themeStylesheetLink.setAttribute("href", `css/themes/${themeName}.css`);
    }

    themeSelect.addEventListener("change", () => {
        activateTheme(themeSelect.value);
        localStorage.setItem("theme", themeSelect.value);
    });


    themeSelect.value = currentTheme;
    activateTheme(currentTheme);
}

initThemeSelector();

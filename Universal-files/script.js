
function switchSheet() {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "Universal-files/style.css") {
        theme.href = "Universal-files/darkstyle.css";
    } else {
        theme.href = "Universal-files/style.css";
    }
}

// 1. LOCAL STORAGE

let savedName = localStorage.getItem("username");

if (savedName) {
    document.getElementById("displayName").innerText =
        "Welcome, " + savedName;
}

document.getElementById("saveName").addEventListener("click", function () {
    let name = document.getElementById("name").value;

    if (name.trim() !== "") {
        localStorage.setItem("username", name);

        document.getElementById("displayName").innerText =
            "Welcome, " + name;
    }
});


// 2. SESSION STORAGE

let count = Number(sessionStorage.getItem("count")) || 0;

document.getElementById("count").innerText = count;

document.getElementById("increase").addEventListener("click", function () {
    count++;

    sessionStorage.setItem("count", count);

    document.getElementById("count").innerText = count;
});


// 3. COOKIES

function setCookie(name, value, days) {
    let date = new Date();

    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

    document.cookie =
        name + "=" + value +
        "; expires=" + date.toUTCString() +
        "; path=/; SameSite=Lax";
}

function getCookie(name) {
    let cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
        let parts = cookie.split("=");

        if (parts[0] === name) {
            return parts.slice(1).join("=");
        }
    }

    return "";
}

function applyTheme(theme) {
    document.body.classList.toggle("dark-mode", theme === "dark");

    document.getElementById("themeText").innerText =
        "Current Theme: " + theme;
}

// Apply saved theme when page loads
let savedTheme = getCookie("theme") || "light";
applyTheme(savedTheme);

document.getElementById("dark").addEventListener("click", function () {
    setCookie("theme", "dark", 7);
    applyTheme("dark");
});

document.getElementById("light").addEventListener("click", function () {
    setCookie("theme", "light", 7);
    applyTheme("light");
});

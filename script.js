 let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");

    btn.onclick = function() {
        sidebar.classList.toggle("active");
};

const dateE1 = document.getElementById("date");

const today = new Date();
const options = {weekday: "long", day: "numeric", month: "long"};
dateE1.textContent = today.toLocaleDateString("en-GB", options);

const toggle = document.getElementById("modeToggle");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("website-mode", toggle.checked);
} )
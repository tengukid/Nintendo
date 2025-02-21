function darkToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

window.onscroll = function () {

    const nav = document.getElementById("mainNav");


    if (window.scrollY > 60) {

        nav.classList.add("scrolled")
    }

    else {

        nav.classList.remove("scrolled")
    }


}

const input = document.querySelector("input");
const form = document.querySelector("#memoriesform");
const ul = document.querySelector("ul");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const li = document.createElement("li")
    ul.appendChild(li)
    li.textContent = input.value;
    input.value = "";
});



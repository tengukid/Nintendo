
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

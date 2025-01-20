function darkToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}




function flipImage(el) {
    const card = document.getElementById(el.id)

    card.classList.toggle("flipped")

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







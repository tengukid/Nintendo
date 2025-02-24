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



/*
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

*/

document.getElementById('comment-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    const commentItem = document.createElement('div');
    commentItem.classList.add('list-group-item');
    commentItem.innerHTML = `<strong>${username}:</strong> <p>${comment}</p>`;

    const commentsList = document.getElementById('comments-list');

    if (commentsList.children.length >= 8) {
        commentsList.removeChild(commentsList.firstChild);
    }

    commentsList.appendChild(commentItem);

    document.getElementById('comment-form').reset();
});

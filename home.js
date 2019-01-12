favourite = document.querySelector(".fa-star");

smallPhoto = document.querySelector(".small");
rectangle = document.querySelector(".hidden")

function href(){
    smallPhoto.href="";
}

function addClass(){
    favourite.classList.toggle("favourite");
}

rectangle.addEventListener('mouseover', href)
favourite.addEventListener('click', addClass)

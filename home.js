linkToPhoto = document.querySelector(".big");
rectangle = document.querySelector(".hidden");
favourite = document.querySelector(".fa-star");
getHref = document.querySelector(".big").getAttribute("href");

// Changing href to " " and to original href
hrefs = []
hrefs.push(getHref);

function hrefNone(){
    linkToPhoto.href = "#";
}

function hrefBack(){
    linkToPhoto.href = hrefs[0];
}

rectangle.addEventListener('mouseover', hrefNone)
rectangle.addEventListener('mouseout', hrefBack)


// Adding favourite class
function addClass(){
   favourite.classList.toggle("favourite");
}

favourite.addEventListener('click', addClass)

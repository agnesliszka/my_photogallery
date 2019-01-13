let $linkToPhoto = $(".big");
let $rectangle = $(".hidden");
let $favourite = $(".fa-star");
let $allFavourites = $(".favourite");
let $lightboxHref = $(".lightbox")

let $getHref;
favouritesTable=[]

var person = {firstName:"John", lastName:"Doe",}

function hrefNone(){
    $getHref = $(this).parent().attr("href")
    $(this).parent().removeAttr("href")
}

function hrefBack(){
    $(this).parent().attr("href", $getHref)
}

function lightboxScriptOff(){
    $lightboxHref = $(".lightbox")
    $lightboxHref.removeAttr("src")
}

function lightboxScriptOn(){
    $lightbox.attr("src", $lightboxHref)
}

function favourites(){
    $(this).parents(".big").toggleClass("favourite")
    favouritesTable = $('.favourite')
}

$rectangle.on("mouseover", lightboxScriptOff)
$rectangle.on("mouseover", hrefNone)

$rectangle.on("mouseout", hrefBack)
$rectangle.on("mouseout", lightboxScriptOn)

$favourite.on("click", favourites)





// JS

// let linkToPhoto = document.querySelector(".big");
// let rectangle = document.querySelector(".hidden");
// let favourite = document.querySelector(".fa-star");
// let getHref = document.querySelector(".big").getAttribute("href");

// // Changing href to " " and to original href

// // jak mu wytlumaczyc ktory obrazek jest "ruszony"

// // index = document.querySelector(".big").getAttribute("href")[7]

// function hrefNone(){
//     linkToPhoto.href = "#";
// }

// function hrefBack(){
//     linkToPhoto.href = getHref;
// }


// // rectangle.forEach(function(rect){
// //     rectangle.addEventListener('mouseover', hrefNone);
// // }

// rectangle.addEventListener('mouseover', hrefNone)
// rectangle.addEventListener('mouseout', hrefBack)

// // Adding favourite class
// function addClass(){
//    favourite.classList.toggle("favourite");
// }

// favourite.addEventListener('click', addClass)

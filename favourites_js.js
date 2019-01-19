// jQuery

// Parameters
let $rectangle = $(".hidden");
let $favourite = $(".fa-star");
let $getHref;

// Functions
function hrefNone(){
    $getHref = $(this).parent().attr("href");
    $(this).parent().removeAttr("href");
}

function hrefBack(){
    $(this).parent().attr("href", $getHref);
}

function favourites(){
    $(this).parents(".big").toggleClass("favourite");
    $(this).parent().siblings(".small_square").toggleClass("active"); 
}

// Disabling href and activating it again
$rectangle.on("mouseover", hrefNone);
$rectangle.on("mouseout", hrefBack);
// Adding favourites class to the image
$favourite.on("click", favourites);

// JavaScript
// To activate pop-up
document.querySelector('.image').addEventListener("click", function () {
document.querySelector('.modal-wrap').classList.add('active');
document.querySelector('.whole_page').classList.add('blur');
// Slideshow
// Parameters
let activeElement = 0;
const timeChange = 4000;
let favouriteImages = [];
const favouriteImageSource = document.querySelector('.photosPicked');
//   const favouriteImages = ['photos/1.jpeg', 'photos/2.jpeg'];

function changeElement() {
    activeElement++;
    if (activeElement == favouriteImages.length) {
    activeElement = 0;
}
    favouriteImages = document.querySelectorAll('.favourite');
    favouriteImageSource.src = favouriteImages[activeElement];
}

setInterval(changeElement, timeChange);
})

//To close pop-up
document.querySelector('span.hide').addEventListener("click", function () {
document.querySelector('.modal-wrap').classList.remove('active');
document.querySelector('.whole_page').classList.remove('blur');
})

// Parameters
// let $activeElement = 0;
// const $timeChange = 4000;
// const $favouriteImageSource = $('.photosPicked');

// function changeElement() {
// $activeElement++;
// // $favouritesTable = $('.favourite');
// $favouritesTable=['photos/1.jpeg', 'photos/2.jpeg']
// if ($activeElement == $favouritesTable.length) {
// $activeElement = 0;
// }
// $favouriteImageSource.src = $favouritesTable[$activeElement];
// }

// setInterval(changeElement, $timeChange);

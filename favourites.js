// jQuery

// Disabling and activating href and adding favourites class to the image
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

// To activate pop-up
// Parameters
let $activeElement = 0;
const $timeChange = 3000;
const $favouriteImageSource = $('.photosPicked');
let $favouritesTable =[]

$('.image').on('click', function () {
$('.modal-wrap').addClass('active');
$('.whole_page').addClass('blur');

$favouritesTable = $('.favourite');

// Slideshow
function changeElement() {
$activeElement++;
if ($activeElement == $favouritesTable.length) {
$activeElement = 0;
}

$favouriteImageSource.attr("src", $favouritesTable[$activeElement])
}
setInterval(changeElement, $timeChange);
})

//To close pop-up
    $('span.hide').on('click', function () {
    $('.modal-wrap').removeClass('active');
    $('.whole_page').removeClass('blur');
    })


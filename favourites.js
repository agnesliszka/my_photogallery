
let $rectangle = $(".hidden");
let $favourite = $(".fa-star");
let $favouritesTable =[]

let $getHref;

function hrefNone(){
    $getHref = $(this).parent().attr("href");
    $(this).parent().removeAttr("href");
}

function hrefBack(){
    $(this).parent().attr("href", $getHref);
}

function favourites(){
    $(this).parents(".big").toggleClass("favourite");
    $favouritesTable = $('.favourite');
}

$rectangle.on("mouseover", hrefNone);
$rectangle.on("mouseout", hrefBack);
$favourite.on("click", favourites);


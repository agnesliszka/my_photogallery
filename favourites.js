// jQuery

// Disabling and activating href and adding favourites class to the image
// Parameters
let $rectangle = $(".hidden");
let $favourite = $(".fa-star");
let $getHref;
const arrayOfPhotosWithClassAdded = [];
let favouriteArray = [];

const class_added = localStorage.getItem('class_added', this.className);

// Functions
function hrefNone() {
    $getHref = $(this).parent().attr("href");
    $(this).parent().removeAttr("href");
}

function hrefBack() {
    $(this).parent().attr("href", $getHref);
}

Array.prototype.remove = function() {   // function to remove selected element from a list
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};


function favourites() {
    const imgSrc = $(this).parents(".hidden").siblings(".photo").attr('src'); // get image name from src
    $(this).parents(".big").toggleClass("favourite"); // add/delete fovourite class

    if(!$(this).parents(".big").hasClass("favourite")){  // if element has class favourite delete src
        favouriteArray.remove(imgSrc);
    }   
    else{                                       // if element does not have class favourite add src
        favouriteArray.push(imgSrc);
    }
    localStorage.setItem('class_added', favouriteArray);
    $(this).parent().siblings(".small_square").toggleClass("active");
}

// Disabling href and activating it again
$rectangle.on("mouseover", hrefNone);
$rectangle.on("mouseout", hrefBack);

// Adding favourites class to the image
$favourite.on("click", favourites);

// Parameters
let $activeElement = 0;
const $timeChange = 3000;
const $favouriteImageSource = $('.photosPicked');
let $favouritesTable;
let $refreshIntervalId;

// To activate pop-up
$('.img').on('click', function () {
    $('.modal-wrap').addClass('active');
    $('.whole_page').addClass('blur');

    $favouritesTable = $('.favourite');

    let $activeElement = 0;
    $favouriteImageSource.attr("src", $favouritesTable[$activeElement])
    $activeElement++;

    $refreshIntervalId = setInterval(function changeElement() {
        if ($activeElement == $favouritesTable.length) {
            $activeElement = 0;
        }
        $favouriteImageSource.attr("src", $favouritesTable[$activeElement])
        $activeElement++;
    }, $timeChange)
});

//To close pop-up
$('span.hide').on('click', function () {
    $('.modal-wrap').removeClass('active');
    $('.whole_page').removeClass('blur');
    clearInterval($refreshIntervalId);
});

function setFavouriteImageAtStart(){
    let stringOfAllFavouriteImages = class_added;
    while(stringOfAllFavouriteImages != ""){
        var index = stringOfAllFavouriteImages.search(","); // if ',' won't be found returns '-1'
        if(index == -1 && stringOfAllFavouriteImages.length > 0){ // works only for one image selected as favourite
            const imageToAddStart = $("img[src$='" + stringOfAllFavouriteImages + "']"); // gets element using src
            imageToAddStart.parent('.big').addClass('favourite'); // to add 'favourite' class
            imageToAddStart.siblings(".small_square").addClass("active"); // to add 'active' class
            favouriteArray.push(stringOfAllFavouriteImages);
            stringOfAllFavouriteImages = "";
        }
        else if(index > 0){ // more that one image selected as favourite
            let imageSrc = stringOfAllFavouriteImages.substring(0, index);
            const imageToAddStart = $("img[src$='" + imageSrc + "']");
            imageToAddStart.parent('.big').addClass('favourite');
            imageToAddStart.siblings(".small_square").addClass("active");
            favouriteArray.push(imageSrc); 
            // cut string from ',' till the end of string 
            stringOfAllFavouriteImages = stringOfAllFavouriteImages.slice(index + 1, stringOfAllFavouriteImages.length); 
        }

    }
    console.log("images added when page is rendered");
    console.log(favouriteArray);
    localStorage.setItem('class_added', favouriteArray); // add all previously selected 'favourite' images to localStorage
}

$(document).ready(function () {
    setFavouriteImageAtStart()
});

var comics = [
    {
        image: "comic1.jpg",
        title: "Peanuts",
        caption: "Snoopy is a loyal, innocent, imaginative and good-natured beagle who is prone to imagining fantasy lives, including being an author.Snoopy can be selfish and/or lazy at times, and had his share of moments where he is mocking his owner, Charlie Brown, but through it all, he has shown great love, care, and loyalty for his owner."
},
    {
        image: "comic2.jpg",
        title: "Barbapapa",
        caption: "The main characters in the books are the Barbapapa family, who are most notable for their ability to shapeshift at will. In their native form, Barbapapas are blob-shaped, with a distinct head and arms, but no legs."
},
    {
        image: "comic3.jpg",
        title: "Moomins",
        caption: "The Moomin stories concern several eccentric and oddly-shaped characters, some of whom are related to each other. The central family consists of Moominpappa, Moominmamma and Moomintroll. Other characters, such as Hemulens, Sniff, the Snork Maiden, Snufkin and Little My are accepted into or attach themselves to the family group from time to time, generally living separate lives in the surrounding Moominvalley, where the series is set."
},
    {
        image: "comic4.jpg",
        title: "Garfield",
        caption: "Common themes in the strip include Garfield's laziness, obsessive eating, coffee, and disdain of Mondays and diets. The strip's focus is mostly on the interactions among Garfield, Jon, and Odie, but other recurring minor characters appear as well."
},
    {
        image: "comic5.jpg",
        title: "Anpanman",
        caption: "Anpanman fights with Baikinman and saves people. He goes on daily patrols around the house of Uncle Jam. He is a symbol of justice, fighting for good every day."
}

];

$.each( comics, function( key, value ) {
        console.log( key + ": " + value );
    });
//
//$(document).ready(function(){
//    
//    $.each(comics, function(i, title, caption){
//        $('body').append(i + " " + title + " " + caption +"<br>");
//    var comicElem = $("<div>")
//        .addClass("comimg")
//        .addClass("mSlide");
//    var img = $("<img>");
//    var title =$("<h2>");
//    var caption =$("<p>");
//    img.src = com.image;
//    title.textContent = com.title;
//    caption.textContent = com.caption;
//    
//    $("<div>").append(img,title,caption);
//   
//    $('body').children(comicElem);
//    });
//});

//for (var i = 0; i < comics.length; i++) {
//    var com = comics[i];
//    var comicElem = document.createElement("div");
//    comicElem.className = "comimg";
//    comicElem.className += " mSlide";
//    var img = new Image();
//    var title = document.createElement("h2");
//    var caption = document.createElement("p");
//    img.src = com.image;
//    title.textContent = com.title;
//    caption.textContent = com.caption;
//
//    comicElem.appendChild(img);
//    comicElem.appendChild(title);
//    comicElem.appendChild(caption);　　　
//    document.body.appendChild(comicElem);
//}

var slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("mSlide");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

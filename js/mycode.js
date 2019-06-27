$(document).ready(function(){

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('../sw.js')
        .then(function(){
            console.log('Service worker registered!');
        });
}
      


var scroll = "uninitialized";
var formerSection = "#iheartpwa";
var nextSection = "#intro";
var currentSection = "#iheartpwa";
var started = false;
$("#navbar").hide();
$("#popupmenu").hide();


$(window).scroll(function(){

     scroll = $(window).scrollTop();
     
     if (scroll < $("#intro").offset().top){
        $("#navbar").fadeOut( "fast" );;
        $("#popupmenu").fadeOut( "fast" );;
     }   
     
     if (scroll >= $("#intro").offset().top){
        $("#navbar").fadeIn("fast").css("display", "flex");
    }
   
});


// OnClick Listener "Menu"
$("#menubutton").click(function() {
	if ($("#popupmenu").is(":hidden")){
    $("#popupmenu").fadeIn("fast").css("display", "flex");
    }
    else {
    $("#popupmenu").fadeOut( "fast" );;
    }                         
});

// OnClick Listener "Popup Menu"
$("#menu-iheartpwa").click(function() {
    $("#popupmenu").hide();
    started = true;
    $("#iheartpwa").scrollView();
});

$("#menu-intro").click(function() {
    $("#popupmenu").hide();
    started = true;
    $("#intro").scrollView();
});

$("#menu-benefits").click(function() {
    $("#popupmenu").hide();
    started = true;
    $("#benefits").scrollView();
});

$("#menu-howto").click(function() {
    $("#popupmenu").hide();
    started = true;
    $("#howto").scrollView();
});

$("#menu-examples").click(function() {
    $("#popupmenu").hide();
    started = true;
    $("#examples").scrollView();
});

$("#menu-cuckoo").click(function() {
    $("#popupmenu").hide();
    started = true;
    $("#cuckoo").scrollView();
});

// A function to scroll to a certain element
$.fn.scrollView = function () {
    return this.each(function () {
      $('html, body').stop().animate({
        scrollTop: $(this).offset().top
      }, {duration: 1500, complete: setFinished});
    });
}
function setFinished(){
    started = false;
}
  
});

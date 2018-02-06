const red = "#B03A2E";
const blue = "#2874A6";

/**
 * Stretches the HR element in the main section
 */
(function stretch() {
 $(".main-hr").animate({width: "175px"}, 1500);
})();

/**
 * Iterates through the colors of the application and attaches them to the start button
 */
(function rainbow() {
	$(".rainbow").animate({color: red}, 1000);
	$(".rainbow").animate({color: blue}, 1000, rainbow);
})();

/**
 * Creates Date Object and returns the year value for the footer.
 */
const date = new Date();
$("#year").html(date.getFullYear());

/**
 * Scrolls page to the top before leaving and once a link on the navbar is clicked, it"ll glide to that section
 */
$(document).ready(function() {
  $(window).on("beforeunload", function() {
    window.scrollTo(0, 0);
  });
  $(".nav-link").click(function(event) {
    event.preventDefault();
    let hash = this.hash;
    $("html, body").animate({scrollTop: $(hash).offset().top - 25}, 1000);
  });
});

/**
 * Once the chevron is clicked, the page will scroll to the mission section
 */
$(".fa-angle-down").click(function() {
  $("html, body").animate({scrollTop: $("#mission").offset().top - 25}, 1000);
});

/**
 * Fade elements in
 */
let sr = ScrollReveal();
sr.reveal(".container-fluid", {duration: 1000});
sr.reveal(".fa-3x", {duration: 1500});

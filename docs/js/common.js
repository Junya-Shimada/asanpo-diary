
$(function() {
    $("#header").load("./header.html");
    $("#footer").load("./footer.html");
});

// hamburger
function changeHamburger() {
    hamburger = !hamburger; 
    
    if(hamburger == true) {
        document.getElementById("hamburger-nav").style.display = 'flex';
    } else {
        document.getElementById("hamburger-nav").style.display = 'none';
    }
}

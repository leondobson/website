window.onscroll = function() {navBarSticky()};

function navBarSticky() {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;

    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    }
    if (window.scrollY <= 250) {
        navbar.classList.remove("sticky")
    }
    
}


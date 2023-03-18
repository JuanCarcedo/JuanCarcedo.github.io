/*Get the automatic scrolling to be smooth*/
/*Code from https://github.com/iamcodefoxx*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Code to control the opacity of some items */
document.getElementById("back-end").style.opacity = 1;
function multipleFunctions(x) {
    // Only when clicked in the page.
    // Remove the selected class (with highlighted background).
    var classWhenSelected = "selected";
    Array.prototype.forEach.call(
        document.querySelectorAll("." + classWhenSelected), function(node){
        node.classList.remove(classWhenSelected);
    });

    var a = b = c = d = 0;

    if (x === 2) {  //link2
        b = 1;
        document.getElementById("link2").classList.add(classWhenSelected);
    } else if (x === 3) { //link3
        c = 1;
        document.getElementById("link3").classList.add(classWhenSelected);
    }  else if (x === 4) {  //link4
        d = 1;
        document.getElementById("link4").classList.add(classWhenSelected);
    } else { //link1
        a = 1;
        document.getElementById("link1").classList.add(classWhenSelected);
    }
    // Change opacity based on which item was clicked.
    document.getElementById("back-end").style.opacity = a;
    document.getElementById("front-end").style.opacity = b;
    document.getElementById("sd").style.opacity = c;
    document.getElementById("other").style.opacity = d;
}
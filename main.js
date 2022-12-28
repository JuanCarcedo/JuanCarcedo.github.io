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
document.getElementById("train2022").style.opacity = 1;
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
    document.getElementById("train2022").style.opacity = a;
    document.getElementById("train2021").style.opacity = b;
    document.getElementById("train2018").style.opacity = c;
    document.getElementById("train2017").style.opacity = d;
}
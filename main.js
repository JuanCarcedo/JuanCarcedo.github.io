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
    changeOpacity(x);
}
function changeOpacity(x) {
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    if (x === 2) {
        b = 1;
    } else if (x === 3) {
        c = 1;
    }  else if (x === 4) {
        d = 1;
    } else {
        a = 1;
    }
    document.getElementById("train2022").style.opacity = a;
    document.getElementById("train2021").style.opacity = b;
    document.getElementById("train2018").style.opacity = c;
    document.getElementById("train2017").style.opacity = d;
}
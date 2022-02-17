// смена темы

function changetheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


// бургер меню
function changeclass(){
    let menu = document.querySelector(".bttns__block");
    if (!menu.classList.contains('toggle')) {
        document.querySelector(".hamburger_icon").innerHTML= '&#10799;';
    } else {
        document.querySelector(".hamburger_icon").innerHTML= '&#9776;';
    }
    menu.classList.toggle('toggle');
}
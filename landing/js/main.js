/*********foncion para que cambie de color cuando elijo una bebida de abajo*********** */

function imgSlider(anything){
    document.querySelector('.cafe').src =anything;
}
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
circle.style.background = color;
}


let container = document.getElementById('container');
let btn = document.getElementById('btn');
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
btn.onclick = () => {
   container.style.backgroundColor = getRandomColor();
}
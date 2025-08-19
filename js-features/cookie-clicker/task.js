const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

let clickCount = 0;
let isSmall = false;

cookie.onclick = function() {
    clickCount++;
    counter.textContent = clickCount;
   
    if(isSmall) {
        cookie.width = 200;
        isSmall = false;
    } else {
        cookie.width = 150;
        isSmall = true;
    }
};
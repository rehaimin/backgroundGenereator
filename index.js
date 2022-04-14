let firstColor = document.querySelector('input');
let secondColor = document.querySelectorAll('input')[1];
let body = document.querySelector('body');

firstColor.addEventListener('input', () => {
    body.style = 'background :linear-gradient(to right,' + firstColor.value + ',' + secondColor.value + ');';
    document.querySelector('p').innerText = body.style.background;
})
secondColor.addEventListener('input', () => {
    body.style = 'background :linear-gradient(to right,' + firstColor.value + ',' + secondColor.value + ');'
    document.querySelector('p').innerText = body.style.background;
})
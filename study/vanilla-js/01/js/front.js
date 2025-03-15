const randomBgBox = document.querySelector('.random-bgbox');
const randomColorTxt = document.querySelector('.random-bgbox .color');

document.querySelector('#random-btn').addEventListener('click', randomColor);

// 색상 변경 기능
function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    randomBgBox.style.backgroundColor = `rgb(${r},${g},${b})`;
    randomColorTxt.innerText = `rgb(${r},${g},${b})`;
}
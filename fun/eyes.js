const leftEye = document.getElementById('eye-1')
const rightEye = document.getElementById('eye-2')



window.addEventListener('mousemove', (e) => {

let leftPosX = leftEye.getBoundingClientRect().x + leftEye.getBoundingClientRect().width/2;
let leftPosY = leftEye.getBoundingClientRect().y;
let rightPosX = rightEye.getBoundingClientRect().x + rightEye.getBoundingClientRect().width/2;
let rightPosY = rightEye.getBoundingClientRect().y;

    leftEye.style.transform = `translate(${getEyeCoords(e.clientX - leftPosX)}px, ${getEyeCoords(e.clientY - leftPosY)}px)`;
    rightEye.style.transform = `translate(${getEyeCoords(e.clientX - rightPosX)}px, ${getEyeCoords(e.clientY - rightPosY)}px)`;

    // leftEye.style.transform = `translate(${(e.clientX - leftPosX)/20}px, ${(e.clientY - leftPosY)/20}px)`;
    // rightEye.style.transform = `translate(${(e.clientX - rightPosX)/20}px, ${(e.clientY - rightPosY)/20}px)`;

    // console.log('see you')
})

function getEyeCoords(coord){
    return Math.tanh(.01*coord)*5
}

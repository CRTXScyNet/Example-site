const body = document.getElementsByTagName("body")[0];
const eyesAround = new Array();

for (let i = 0; i < 30; i++) {
  let div = document.createElement("div");
  div.classList.add("eye");
  let eye = document.createElement("div");
  eye.classList.add("eyes-around");
  div.style.scale = 0.5 + Math.random() / 2;
  div.appendChild(eye);
  body.appendChild(div);
  if (Math.random()< 0.5) {
    div.style.left = `${80 + Math.random() * 15}%`;
  }else {
    div.style.left = `${Math.random() * 15}%`;
  }
  div.style.top = `${10 + Math.random() * 80}%`;
//   div.style.left = `${10 + Math.random() * 80}%`;
  eyesAround.push(div);
  div.firstChild;
}

const leftEye = document.getElementById("eye-1");
const rightEye = document.getElementById("eye-2");
// const eyesAround = document.getElementsByClassName("eyes-around");

window.addEventListener("mousemove", (e) => {
  let leftEyeBoundingRect = leftEye.getBoundingClientRect();
  let leftPosX = leftEyeBoundingRect.x + leftEyeBoundingRect.width / 2;
  let leftPosY = leftEyeBoundingRect.y;

  let rightEyeBoundingRect = rightEye.getBoundingClientRect();
  let rightPosX = rightEyeBoundingRect.x + rightEyeBoundingRect.width / 2;
  let rightPosY = rightEyeBoundingRect.y;

  leftEye.style.transform = `translate(${getEyeCoords(
    e.clientX - leftPosX
  )}px, ${getEyeCoords(e.clientY - leftPosY)}px)`;
  rightEye.style.transform = `translate(${getEyeCoords(
    e.clientX - rightPosX
  )}px, ${getEyeCoords(e.clientY - rightPosY)}px)`;

  leftEye.style.scale = getEyeScale(e.clientX - leftPosX, e.clientY - leftPosY);
  rightEye.style.scale = getEyeScale(
    e.clientX - rightPosX,
    e.clientY - rightPosY
  );

  for (let i = 0; i < eyesAround.length; i++) {
    moveEyes(eyesAround[i], e);
  }
});

function moveEyes(element, doc) {
  element = element.firstChild;
  let eyeBoundingRect = element.getBoundingClientRect();
  let eyePosX = eyeBoundingRect.x + eyeBoundingRect.width / 2;
  let eyePosY = eyeBoundingRect.y;
  element.style.transform = `translate(${getEyeCoords(
    doc.clientX - eyePosX
  )}px, ${getEyeCoords(doc.clientY - eyePosY)}px)`;
  element.style.scale = getEyeScale(
    doc.clientX - eyePosX,
    doc.clientY - eyePosY
  );
}

function getEyeCoords(coord) {
  return Math.tanh(0.01 * coord) * 10;
}
function getEyeScale(coordX, coordY) {
  let length = Math.sqrt(Math.pow(coordX, 2) + Math.pow(coordY, 2));
  return 2 - Math.tanh(0.01 * Math.abs(length));
}

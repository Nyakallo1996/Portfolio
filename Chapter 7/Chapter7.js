document.getElementById("lefteye").style.backgroundColor = 'purple';

document.getElementById("body").style.border = "2px black solid";

document.getElementById("mouth").style.borderRadius = "4px";

document.getElementById("righteye").style.border = "4px yellow dotted";

document.getElementById("leftarm").style.backgroundColor = "#FF00FF";

document.getElementById("body").style.color = "#FF0000";

document.getElementById("head").style.borderTop = "5px black solid";

document.getElementById("head").style.transform = "rotate(-15deg)";

document.getElementById("nose").style.borderRadius = "10px";

document.getElementById("rightarm").style.backgroundColor = "green";

document.getElementById("mouth").style.backgroundColor = "pink";

let rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);
let leftEye = document.getElementById("lefteye");
leftEye.onclick = moveUpDown;

let nose = document.getElementById("nose");
nose.onclick = moveNoseUpdown;

let leftArm = document.getElementById("leftarm");
leftArm.onclick = moveRightLeft;

let rightArm = document.getElementById("rightarm");
rightArm.onclick = moveLeftRight;

let mouth = document.getElementById("mouth");
mouth.onclick = moveMouth;

let body = document.getElementById("body");
body.onclick = moveBody;






function moveUpDown (event) {
    let roboPart = event.target;
    let t = 0;
    let animation = setInterval(frame,10);
    function frame() {
     roboPart.style.top = t + "%";
     t++;
     if (t === 21) {
         clearInterval(animation);
     }
    }
 }

 function moveNoseUpdown (event) {
    let roboPart = event.target;
    let t = 0;
    let animation = setInterval(frame,10);
    function frame() {
        roboPart.style.top = t + "%";
        t++;
        if (t === 50) {
            clearInterval(animation);
        }
    }
 }


 function moveRightLeft (event) {
    let roboPart = event.target;
    let left = 0;
    let animation = setInterval(frame,10);
    function frame() {
        roboPart.style.left = left++ + "%";
        
        if (left === 71) {
            clearInterval(animation);
        }
    }
 }

 function moveLeftRight (event) {
    let roboPart = event.target;
    let left = 0;
    let animation = setInterval(frame,10);
    function frame() {
        roboPart.style.left = left++ + "%";
        
        if (left === 22) {
            clearInterval(animation);
        }
    }
}
 


function moveMouth (event) {
    let roboPart = event.target;
    let t = 0;
    let animation = setInterval(frame,10);
    function frame() {
     roboPart.style.top = t + "%";
     t++;
     if (t === 70) {
         clearInterval(animation);
     }
    }
 }

 function moveBody (event) {
    let roboPart = event.target;
    let left = 0;
    let animation = setInterval(frame,10);
    function frame() {
        roboPart.style.left = left++ + "%";
        
        if (left === 26) {
            clearInterval(animation);
        }
    }
}
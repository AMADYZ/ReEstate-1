const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () =>
{
    sideMenu.style.display = 'none';
})

// ---------------------- BASIC JS -----------------------
let progressCircle1 = document.querySelector(".progress-circle")
let progressCircle2 = document.querySelector(".progress-circle")
let radius = progressCircle1.r.baseVal.value;
let circumference = radius * 2 * Math.PI
progressCircle1.style.strokeDasharray = circumference

setProgress(85);

function setProgress(percent){
    progressCircle1.style.strokeDashoffset =  circumference - (percent / 100) * circumference
}
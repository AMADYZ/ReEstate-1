const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// ---------------------- Property/Users Circle Progress -----------------------
function setPropertyProgress(percent) {
    let progressCircle = document.querySelector(".propertycircle")
    let radius = progressCircle.r.baseVal.value;
    let circumference = radius * 2 * Math.PI
    progressCircle.style.strokeDasharray = circumference
    progressCircle.style.strokeDashoffset = circumference - (percent / 100) * circumference
    document.querySelector(".number-p").innerHTML = `<p>${percent}%</p>`
}

function setUserProgress(percent) {
    let progressCircle = document.querySelector(".userscircle")
    let radius = progressCircle.r.baseVal.value
    let circumference = radius * 2 * Math.PI
    progressCircle.style.strokeDasharray = circumference
    progressCircle.style.strokeDashoffset = circumference - (percent / 100) * circumference
    document.querySelector(".number-u").innerHTML = `<p>${percent}%</p>`
}
setPropertyProgress(document.querySelector('.insights .sales .middle .progress .number-p .percentp').innerHTML.slice(0, 2))
setUserProgress(document.querySelector('.insights .expenses .middle .progress .number-u .percentu').innerHTML.slice(0, 2))

// ---------------------- Add Property -----------------------

// ---------------------- Dropdown Users -----------------------
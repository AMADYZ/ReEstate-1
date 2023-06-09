let ongo = sessionStorage.getItem('ongo');


if (ongo == 'admin') {
    document.getElementById("admin-dash").style = "display: inline";
    document.getElementById("Signupnav").style = "display:none";
    document.getElementById("searchnav").style="display:inline";
}
else if (ongo == 'user') {
    document.getElementById("searchnav").style = "display: inline";
    document.getElementById("Signupnav").style = "display:none";
}
let intro = document.querySelector('.intro');
setTimeout(() => {
    setTimeout(() => {
        intro.style.top = '-125vh';

    }, 600);
})
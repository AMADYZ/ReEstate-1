let MainImg = document.getElementById('MainImg');
let small_img = document.getElementsByClassName("small-img")
let x;
small_img[0].onclick = function () {
    x = MainImg.src;
    MainImg.src = small_img[0].src;
    small_img[0].src = x;
}
small_img[1].onclick = function () {
    x = MainImg.src;
    MainImg.src = small_img[1].src;
    small_img[1].src = x;
}
small_img[2].onclick = function () {
    x = MainImg.src;
    MainImg.src = small_img[2].src;
    small_img[2].src = x;
}
small_img[3].onclick = function () {
    x = MainImg.src;
    MainImg.src = small_img[3].src;
    small_img[3].src = x;
}
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let body = document.querySelector('body');
openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.body.scrollTop > 200){
        body.classList.remove('active');
    }
}
let ongo = sessionStorage.getItem('ongo');

if(ongo == 'admin'){
   document.getElementById("admin-dash").style = "display: inline";
   document.getElementById("Signupnav").style="display:none";
}
else if(ongo =='user')
{
    document.getElementById("searchnav").style="display:inline";
    document.getElementById("Signupnav").style="display:none";
}
let intro=document.querySelector('.intro');
setTimeout(()=>
        {
            setTimeout(() => {
                intro.style.top='-100vh';
                
            }, 600);
        })
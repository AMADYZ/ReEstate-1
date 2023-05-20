let num;
let width=0;
function changeBackground(){
    
    if(window.scrollY>window.innerHeight*num){
        document.body.classList.add('bg-color');

    }
    else{
       document.body.classList.remove('bg-color'); 
    }

}
window.addEventListener('scroll',changeBackground);
function myFunction(w1,w2,w3,w4) {
    
    if (w1.matches||w3.matches) {
    num=6.2;
    }
    else if(w2.matches)
    {
        //teteeeeeeee
    }
    else if(w4.matches)
    {
        num=5.5;
    }
    else if(wid5.matches)
    {
        num=5.0;
    }
    else{
        num=7.8;
    }

}



var wid1 = window.matchMedia("(max-width: 351px)");
var wid2 = window.matchMedia("(min-width: 2048px)");
var wid3 = window.matchMedia("(min-width: 360px)"&&"(max-width: 380px)");
var wid4 = window.matchMedia("(min-width: 381px)"&&"(max-width: 400px)");
var wid5 = window.matchMedia("(min-width: 401px)"&&"(max-width: 420px)");
console.log(wid4.matches);
myFunction(wid1,wid2,wid3,wid4,wid5);











let ongo = sessionStorage.getItem('ongo');


if(ongo == 'admin'){
    document.getElementById("admin-dash").style = "display: inline";
    document.getElementById("Signupnav").style="display:none";
 }
 else if(ongo == 'user')
 {
    document.getElementById("searchnav").style = "display: inline";
    document.getElementById("Signupnav").style="display:none";
 }



//  window.onbeforeunload = () => {
//     localStorage.clear();
//   }
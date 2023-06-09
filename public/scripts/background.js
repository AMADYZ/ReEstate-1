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
function myFunction(w1,w2,w3,w4,w5) {
    
    if (w1.matches||w3.matches) {
    num=6.8;
    }
    else if(w2.matches)
    {
        //teteeeeeeee
    }
    else if(w4.matches)
    {
        num=5.5;
    }
    else if(w5.matches)
    {
        num=5.5;
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
console.log(wid5.matches);
myFunction(wid1,wid2,wid3,wid4,wid5);











let ongo = sessionStorage.getItem('ongo');


if(ongo == 'admin'){
    document.getElementById("admin-dash").style = "display: inline";
    document.getElementById("Signupnav").style="display: none";
    document.getElementById("user-pic").style.display="inline";
    document.getElementById("searchnav").style = "display: inline";
 }
 else if(ongo == 'user')
 {
    document.getElementById("searchnav").style = "display: inline";
    document.getElementById("Signupnav").style="display:none";
    document.getElementById("user-pic").style.display="inline";
  }
//  function googleTranslateElementInit() {
//     new google.translate.TranslateElement(
//         { pageLanguage: 'en' },
//         'google_translate_element'
//     );
// }

// function changeTextDirection() {
//     var elements = document.getElementById('google_translate_element').getElementsByTagName('*');
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].classList.add('rtl-text');
//     }
// }

// function googleTranslateElementInit() {
//     new google.translate.TranslateElement(
//         {
//             pageLanguage: 'en',
//             includedLanguages: 'ar,en', // Add any other languages you want to support here
//             layout: google.translate.TranslateElement.InlineLayout.SIMPLE
//         },
//         'google_translate_element'
//     );

//     googleTranslateElement.setOnSelectLanguageCallback(changeTextDirection);
// }


//  window.onbeforeunload = () => {
//     localStorage.clear();
//   }
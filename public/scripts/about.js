
let ongo = sessionStorage.getItem('ongo');

if(ongo == 'admin'){
   document.getElementById("admin-dash").style = "display: inline";
   document.getElementById("Signupnav").style="display:none";
   document.getElementById("searchnav").style="display:inline";
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
                intro.style.top='-350vh';
                
            }, 600);
        })

         function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
    );
}

function changeTextDirection() {
    var elements = document.getElementById('google_translate_element').getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('rtl-text');
    }
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'en',
            includedLanguages: 'ar,en', // Add any other languages you want to support here
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
    );

    googleTranslateElement.setOnSelectLanguageCallback(changeTextDirection);
}
function setButtonValue(value) {
    document.getElementById('selectedButton').value = value;
  }
  function setButtonValueB(value) {
    document.getElementById('selectedButtonB').value = value;
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
if(sessionStorage.getItem("username")==undefined)
{
    window.location.replace("http://localhost:5000/login");
}



let intro=document.querySelector('.intro');
setTimeout(()=>
        {
            setTimeout(() => {
                intro.style.top='-100vh';
                
            }, 600);
        })
        
        $(document).ready(function(){
            $('.next').click(function(){
                $('.ul-pagination').find('.pageNumber.active').next().addClass('active')
            })
        })
 

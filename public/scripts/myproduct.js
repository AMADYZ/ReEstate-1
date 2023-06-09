

let intro = document.querySelector('.intro');
setTimeout(() => {
    setTimeout(() => {
        intro.style.top = '-125vh';

    }, 600);
})

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
if(sessionStorage.getItem("username")==undefined)
{
    window.location.replace("/login");
}

function getButton(button){
    let id = button.parentElement.querySelector('.estate-id').value;
    let card = button.closest('.popular__card');
    card.remove(); 
    
          $.ajax({
            url: '/myproducts',
            method: 'POST',
            data: {id:id},
            success: function (response) {

            },
            error: function (error) {
              console.error(error); // Log any errors that occurred
            },
          });
        }
        
    
    
    
    
       








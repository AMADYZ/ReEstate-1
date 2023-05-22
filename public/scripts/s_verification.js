
$(document).ready(function () {
    $('#myForm3').submit(function (event) {
      event.preventDefault(); // Prevent form submission

      const num1 = $('#inp1').val();
      const num2 = $('#inp2').val(); 
      const num3 = $('#inp3').val(); 
      const num4 = $('#inp4').val(); 
      let num=sessionStorage.getItem("code");
      let thousands = Math.floor(num / 1000);
      let hundreds = Math.floor((num % 1000) / 100);
      let tens = Math.floor((num % 100) / 10);
      let ones = num % 10;
      
      if(num1==thousands&&num2==hundreds&&num3==tens&&num4==ones)
      {
        document.getElementById("myForm3").style.display="none";
        document.getElementById("myForm4").style.display="block";
      }
      else
      {
        document.getElementById('codeerr').innerHTML='Code is incorrect.';
        document.getElementById('err12').style.opacity='1';
        
      }
      if(false)
      {
      $.ajax({
        url: '/login.ejs',
        method: 'POST',
        data: "mario",
        success: function (response) {
         console.log("good");
        },
        error: function (error) {
          console.error(error); // Log any errors that occurred
        },
      });
    }
    }
    
    );
  });

//   function validateEmail(input) {

//     const validRegex = /^(.+)@(.+)$/;
  
//     if (!validRegex.test(input) ) {
//         document.getElementById('Emailerr').innerHTML='Check your email.';
//         document.getElementById('err1').style.opacity='1';
//         return false;
//     }
//     else{
//     document.getElementById('Emailerr').innerHTML='';
//     document.getElementById('err1').style.opacity='0';
//     return true;
//     }
// }
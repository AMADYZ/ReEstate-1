
$(document).ready(function () {
    $('#myForm2').submit(function (event) {
      event.preventDefault(); // Prevent form submission
      let check="";
      const email = $('#Email').val();
      check=validateEmail(email);
      if(check)
      {
      $.ajax({
        url: '/login.ejs',
        method: 'POST',
        data: {Email:email,page2:"emailsend"},
        success: function (response) {
          if (response == "success") 
          {

          }
          else
          {

          }


          //document.querySelector('h1').innerHTML=response.data1;
        },
        error: function (error) {
          console.error(error); // Log any errors that occurred
        },
      });
    }
    }
    );
  });
  function validateEmail(input) {

    const validRegex = /^(.+)@(.+)$/;
  
    if (!validRegex.test(input) ) {
        document.getElementById('Emailerr').innerHTML='Check your email.';
        document.getElementById('err1').style.opacity='1';
        return false;
    }
    else{
    document.getElementById('Emailerr').innerHTML='';
    document.getElementById('err1').style.opacity='0';
    return true;
    }
}
<<<<<<< HEAD

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
          if (response.success == "success") 
          {
            document.getElementById("myForm2").style.display="none";
            document.getElementById("myForm3").style.display="block";
            sessionStorage.setItem('code',response.number);
            sessionStorage.setItem('Email',response.email);
          }
          else
          {
            document.getElementById('Emailerr').innerHTML='Check your email.';
            document.getElementById('err1').style.opacity='1';
          }
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
=======

$(document).ready(function () {
    $('#myForm2').submit(function (event) {
      event.preventDefault(); // Prevent form submission
      let check="";
      const email = $('#Email').val();
      check=validateEmail(email);
      if(check)
      {
      $.ajax({
        url: '/login',
        method: 'POST',
        data: {Email:email,page2:"emailsend"},
        success: function (response) {
          if (response.success == "success") 
          {
            document.getElementById("myForm2").style.display="none";
            document.getElementById("myForm3").style.display="block";
          }
          else
          {
            document.getElementById('Emailerr').innerHTML='Check your email.';
            document.getElementById('err1').style.opacity='1';
          }
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
>>>>>>> 7063dc2e4548c1ebd839614235d1bbbc02bb1a0f
}

$(document).ready(function () {
    $('#myForm4').submit(function (event) {
      event.preventDefault(); // Prevent form submission
      let check="";
      const newpass = $('#newpass').val();
      const confpass = $('#confpass').val();
      
      check=validatePass(newpass,confpass);
      if(check)
      {
      $.ajax({
        url: '/login',
        method: 'POST',
        data: {newpass:newpass},
        success: function (response) {
          if (response.success == "success") 
          {
            window.location.replace("/login");
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



  function validatePass(input1,input2){
    let check=true;
    if(input1=='')
    {
        check=false;
        document.getElementById('newpass_err').innerHTML='Check Your Password';
        document.getElementById('err22').style.opacity='1';
    }
    else{
        document.getElementById('newpass_err').innerHTML='';
        document.getElementById('err22').style.opacity='0';
    }
    if(input1.length<=2)
    {
        check=false;
        document.getElementById('newpass_err').innerHTML='Check Your Password must be 8 char';
        document.getElementById('err22').style.opacity='1';
    }
    else{
        document.getElementById('newpass_err').innerHTML='';
        document.getElementById('err22').style.opacity='0';
    }
    if(input1!=input2||input2=='')
    {
        check=false;
        document.getElementById('confpass_err').innerHTML='Check Your Confirm Password';
        document.getElementById('err23').style.opacity='1';
    }
    else{
        document.getElementById('confpass_err').innerHTML='';
        document.getElementById('err23').style.opacity='0';
    }
return check;
}
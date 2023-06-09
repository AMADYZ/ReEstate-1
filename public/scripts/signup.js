const signupButton=document.getElementById("signup");
const signinButton=document.getElementById("signin");
const container =document.getElementById("container");
signupButton.addEventListener('click',()=>{
    container.classList.add("right1-pannel-active");
})
signinButton.addEventListener('click',()=>{
    container.classList.remove("right1-pannel-active");
})




 function validateUserName(field){
    
     if(field=='')
     {
        document.getElementById('nameErr').innerHTML='You Must Enter a UserName.';
        document.getElementById('er1').style.opacity='1';
        return false;
    }
    else{
    document.getElementById('nameErr').innerHTML='';
    document.getElementById('er1').style.opacity='0';
    return true;
    }
}

function validateEmail1(input) {
    const validRegex = /^(.+)@(.+)$/;

    if (!validRegex.test(input) ) {
        document.getElementById('emailErr').innerHTML='Check your email.';
        document.getElementById('er2').style.opacity='1';
        return false;
    }
    else{
    document.getElementById('emailErr').innerHTML='';
    document.getElementById('er2').style.opacity='0';
    return true;
    }
}

function validatePhone(input) {
    const phoneno = /^\d{11}$/;
    if(!phoneno.test(input))
    {
        document.getElementById('phoneerr').innerHTML='Check your Phone number.';
        document.getElementById('er3').style.opacity='1';
        return false;
    }
    else{
        document.getElementById('phoneerr').innerHTML='';
        document.getElementById('er3').style.opacity='0';
        return true;
        }
}
function validatepass(input1,input2){
    let check=true;
    if(input1=='')
    {
        check=false;
        document.getElementById('passErr').innerHTML='Check Your Password';
        document.getElementById('er4').style.opacity='1';
    }
    else{
        document.getElementById('passErr').innerHTML='';
        document.getElementById('er4').style.opacity='0';
    }
    if(input1.length<=8)
    {
        check=false;
        document.getElementById('passErr').innerHTML='Check Your Password must be 8 char';
        document.getElementById('er4').style.opacity='1';
    }
    else{
        document.getElementById('passErr').innerHTML='';
        document.getElementById('er4').style.opacity='0';
    }
    if(input1!=input2||input2=='')
    {
        check=false;
        document.getElementById('passcErr').innerHTML='Check Your Confirm Password';
        document.getElementById('er5').style.opacity='1';
    }
    else{
        document.getElementById('passcErr').innerHTML='';
        document.getElementById('er5').style.opacity='0';
    }
return check;
}

function adorus()
{
    let checkbox=document.getElementById("checker");
    if(checkbox.checked)
    {
        return "admin"
    }
    else{
        return "user"
    }
}


// }
// function validate(form){
//     let fail=true;
//     fail&=validateUserName(form.username.value);
//     fail&=validateEmail(form.email.value);
//     fail&=validatePhone(form.phone.value);
//     fail&=validatepass(form.pass.value,form.pass1.value);
//     if(fail)
//     {
//      let ongo=adorus();
//      sessionStorage.setItem('ongo', ongo.valueOf());
//     return true;
//      }
//    else{
//       adorus();
//       return false;
//      }
// }




$(document).ready(function () {
    $('#myForm').submit(function (event) {
      event.preventDefault(); // Prevent form submission

      const username = $('#username').val();
      const email = $('#email').val();
      const phone=$('#phonee').val();
      const pass=$('#pass').val();
      const cpass=$('#cpass').val();
      let ongo="";
      let pending="";
      let fail=true;
      fail&=validateUserName(username);
      fail&=validateEmail1(email);
      fail&=validatePhone(phone);
      fail&=validatepass(pass,cpass);
      if(fail)
        {
         ongo=adorus();
         if(ongo=="admin")
         {
            pending="waiting";
         }
         else
         {
            pending="true";
           
         }
        
        }
      // Send the AJAX request to the server
      if(fail)
      {
      $.ajax({
        url: '/login',
        method: 'POST',
        data: { username: username,email:email,phone:phone,pass1:pass,cpass:cpass,Role:ongo,page:"signup"
        ,Pending:pending},

        success: function (response) {
          if (response.result == "success") {
            if(response.pending1==="waiting")
            {
               document.getElementById('container').style.display="none";
               document.getElementById('outcontainer').style.display="block"

            }
            else if(response.pending1==="true")
            {
                sessionStorage.setItem('ongo', response.Role);
                sessionStorage.setItem('username',response.UserName);
                sessionStorage.setItem('Email',response.Email);
                sessionStorage.setItem('Phone',response.Phone);
                window.location.replace("/");
                
            }
            else
            {
                console.log("not accepted by admin")
            }
          }
          else
          {
            document.getElementById('nameErr').innerHTML=response.error1;
            document.getElementById('er1').style.opacity='1';
            document.getElementById('emailErr').innerHTML=response.error2;
            document.getElementById('er2').style.opacity='1';
          }


          //document.querySelector('h1').innerHTML=response.data1;
        },
        error: function (error) {
          console.error(error); // Log any errors that occurred
        },
      });
    }
    });
  });














<<<<<<< HEAD
let intro=document.querySelector('.intro');

setTimeout(()=>
        {
            setTimeout(() => {
                document.getElementById("username").value=sessionStorage.getItem("username");
                document.getElementById("email").value=sessionStorage.getItem("Email");
                document.getElementById("phone").value=sessionStorage.getItem("Phone");
            }, 300);
            setTimeout(() => {
                intro.style.top='-100vh';
            }, 600);
        })



        function enableEditing(name) {
           if(name.value==="Edit UserName")
           {
            var input = document.getElementById("username");
            input.removeAttribute("readonly");
            document.getElementById("changebutton").style.display="block";
           }
           else if(name.value==="Edit Email")
           {
            var input = document.getElementById("email");
            input.removeAttribute("readonly");
            document.getElementById("changebutton").style.display="block";
           }
           else
           {
            var input = document.getElementById("phone");
            input.removeAttribute("readonly");
            document.getElementById("changebutton").style.display="block";
           }

          }





          $(document).ready(function () {
            $('#myForm').submit(function (event) {
              event.preventDefault(); // Prevent form submission

              const username = $('#username').val();
              const email=$('#email').val();
              const phone=$('#phone').val();

              // Send the AJAX request to the server
              
              $.ajax({
                url: '/login.ejs',
                method: 'POST',
                data: { username_in: username,pass_in:pass,page1:"signin"},
                success: function (response) {
                  if (response.success == "success") 
                  {
                    sessionStorage.setItem('ongo', response.Role);
                    sessionStorage.setItem('username',response.UserName);
                    sessionStorage.setItem('Email',response.Email1);
                    sessionStorage.setItem('Phone',response.Phone);
                    window.location.replace("http://localhost:5000/"); 
                   
                  }
                  else
                  {
                    document.getElementById('nameErr_in').innerHTML=response.error1;
                    document.getElementById('er1_in').style.opacity='1';
                    document.getElementById('passErr_in').innerHTML=response.error2;
                    document.getElementById('er2_in').style.opacity='1';
                    
                  }
        
        
                  //document.querySelector('h1').innerHTML=response.data1;
                },
                error: function (error) {
                  console.error(error); // Log any errors that occurred
                },
              });
            
        
        
        
        
            });
          });
          


=======
let intro=document.querySelector('.intro');

setTimeout(()=>
        {
            setTimeout(() => {
                document.getElementById("username").value=sessionStorage.getItem("username");
                document.getElementById("email").value=sessionStorage.getItem("Email");
                document.getElementById("phone").value=sessionStorage.getItem("Phone");
            }, 300);
            setTimeout(() => {
                intro.style.top='-100vh';
            }, 600);
        })



        function enableEditing(name) {
           if(name.value==="Edit UserName")
           {
            var input = document.getElementById("username");
            input.removeAttribute("readonly");
            document.getElementById("changebutton").style.display="block";
           }
           else if(name.value==="Edit Email")
           {
            var input = document.getElementById("email");
            input.removeAttribute("readonly");
            document.getElementById("changebutton").style.display="block";
           }
           else
           {
            var input = document.getElementById("phone");
            input.removeAttribute("readonly");
            document.getElementById("changebutton").style.display="block";
           }

          }





          $(document).ready(function () {
            $('#myForm').submit(function (event) {
              event.preventDefault(); // Prevent form submission

              const username = $('#username').val();
              const email=$('#email').val();
              const phone=$('#phone').val();
              let fail=true;
              fail&=validateUserName(username);
              fail&=validateEmail1(email);
              fail&=validatePhone(phone);
              if(fail)
              {
                console.log("27na tamam")
                let Olduser=sessionStorage.getItem('username');
                let Oldemail=sessionStorage.getItem('Email');
              // Send the AJAX request to the server
              $.ajax({
                url: '/personalinfo',
                method: 'POST',
                data: { newusername: username,newemail:email,newphone:phone,olduser:Olduser,oldemail:Oldemail},
                success: function (response) {
                  if (response.result == "success") 
                  {
                    sessionStorage.setItem('username',response.new1);
                    sessionStorage.setItem('Email',response.new2);
                    sessionStorage.setItem('Phone',response.new3);
                    window.location.replace("http://localhost:5000/"); 
                  }
                  else if(response.result=="failU")
                  {
                    document.getElementById('nameErr').innerHTML=response.err; 
                  }
                  else
                  {
                    document.getElementById('emailErr').innerHTML=response.err1;
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

>>>>>>> f6ecb090a3514aded4934c6a7e1df927d93bc5d7
        
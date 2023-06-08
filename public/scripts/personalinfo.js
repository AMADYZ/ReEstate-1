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
            input.style.color="black";
            input.removeAttribute("readonly");
            document.getElementById("changebutton").style.display="block";
           }
           else if(name.value==="Edit Email")
           {
            var input = document.getElementById("email");
            input.style.color="black";
            input.removeAttribute("readonly");
            document.getElementById("changebutton").style.display="block";
           }
           else
           {
            var input = document.getElementById("phone");
            input.style.color="black";
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
                    document.getElementById('changebutton').style.display="none";
                    document.getElementById('donechange').style.display='block';
                    setTimeout(() => {
                      window.location.replace("/"); 
                    }, 1000);
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

        
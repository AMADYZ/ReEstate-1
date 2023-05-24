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
<<<<<<< HEAD

=======
              let fail=true;
              fail&=validateUserName(username);
              fail&=validateEmail1(email);
              fail&=validatePhone(phone);
              if(fail)
              {
                let Olduser=sessionStorage.getItem('username');
                let Oldemail=sessionStorage.getItem('Email');
>>>>>>> 7063dc2e4548c1ebd839614235d1bbbc02bb1a0f
              // Send the AJAX request to the server
              
              $.ajax({
                url: '/login.ejs',
                method: 'POST',
                data: { username_in: username,pass_in:pass,page1:"signin"},
                success: function (response) {
                  if (response.success == "success") 
                  {
<<<<<<< HEAD
                    sessionStorage.setItem('ongo', response.Role);
                    sessionStorage.setItem('username',response.UserName);
                    sessionStorage.setItem('Email',response.Email1);
                    sessionStorage.setItem('Phone',response.Phone);
                    window.location.replace("http://localhost:5000/"); 
                   
=======
                    sessionStorage.setItem('username',response.new1);
                    sessionStorage.setItem('Email',response.new2);
                    sessionStorage.setItem('Phone',response.new3);
                    document.getElementById('changebutton').style.display="none";
                    document.getElementById('donechange').style.display='block';
                    setTimeout(() => {
                      window.location.replace("http://localhost:5000/"); 
                    }, 1000);
                  }
                  else if(response.result=="failU")
                  {
                    document.getElementById('nameErr').innerHTML=response.err; 
>>>>>>> 7063dc2e4548c1ebd839614235d1bbbc02bb1a0f
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
          


        
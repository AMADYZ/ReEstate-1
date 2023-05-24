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
function validateEmail(input) {

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

}
function validate(form){
    let fail='';
    fail&=validateUserName(form.username.value);
    fail&=validateEmail(form.email.value);
    fail&=validatePhone(form.phone.value);
    fail&=validatepass(form.pass.value,form.pass1.value);
    if(fail)
   return true;
   else{
       return false;
       }
}












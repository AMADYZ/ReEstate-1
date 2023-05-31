

function validatephone(field){
    if(field==''){
        document.getElementById('phoneErr').innerHTML='You Must Enter a Phone Number.';
        return false;
    }
    else{
        document.getElementById('phoneErr').innerHTML='';
        return true;
    }
    
    
}
function validateusername(field){
    if(field==''){
        document.getElementById('usernameErr').innerHTML='You Must Enter a UserName.';
        return false;
    }
    else{
        document.getElementById('usernameErr').innerHTML='';
        return true;
    }
}
function validatepassword(field){
    if(field==''){
        document.getElementById('passwordErr').innerHTML='You Must Enter a Password.';
        return false;
    }
    else{
        document.getElementById('passwordErr').innerHTML='';
        return true;
    }
}
function validateconfpassword(field){
    if(field==''){
        document.getElementById('confpasswordErr').innerHTML='You Must Enter Your Password Again.';
        return false;
    }
    else{
        document.getElementById('confpasswordErr').innerHTML='';
        return true;
    }
}
function validateemail(field){
    if(field==''){
        document.getElementById('emailErr').innerHTML='You Must Enter an email.';
        return false;
    }
    else{
        document.getElementById('emailErr').innerHTML='';
        return true;
    }
}
function validate(form){
    let fail='';
    fail&=validateusername(form.username.value);
    fail&=validatepassword(form.Password.value);
    fail&=validateconfpassword(form.confPassword.value);
    fail&=validateemail(form.email.value);
    fail&=validatephone(form.Phone.value);
    






    if(fail)
        return true;
    else{
        return false;
    }
}
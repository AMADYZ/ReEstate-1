
let ongo;
let fail1,fail2;
let check=false;




let intro=document.querySelector('.intro');
setTimeout(()=>
        {
            setTimeout(() => {
                intro.style.left='-230vh';
                
            }, 600);
        })





function in_validate(form1){
    
     fail1=validateUserName1(form1.username_in.value);
     fail2=validatepass1(form1.password_in.value);
    if(fail1&&fail2)
    {
        check=true;
        sessionStorage.setItem('ongo', ongo.valueOf());
        return true;
    }
    else
    check=false;
       return false; 
}





function validateUserName1(field){
   
    if(field=='')
    {
        document.getElementById('nameErr_in').innerHTML='Invalid UserName';
        document.getElementById('er1_in').style.opacity='1';
        return false;
    }
    else if(field!='user'&&field!='admin')
    {
        document.getElementById('nameErr_in').innerHTML='Invalid UserName';
        document.getElementById('er1_in').style.opacity='1';
        return false; 
    }
    else{
    document.getElementById('nameErr_in').innerHTML='';
    document.getElementById('er1_in').style.opacity='0';
    ongo=field;//admin or user
    return true;
    }
}


function validatepass1(field){
   
    if(field=='')
    {
        document.getElementById('passErr_in').innerHTML='Invalid Password';
        document.getElementById('er2_in').style.opacity='1';
        return false;
    }
    else if(ongo=='user'&&field!='123')
    {
        document.getElementById('passErr_in').innerHTML='Invalid Password';
        document.getElementById('er2_in').style.opacity='1';
        return false; 
    }
    else if(ongo=='admin'&&field!='1234')
    {
        document.getElementById('passErr_in').innerHTML='Invalid Password';
        document.getElementById('er2_in').style.opacity='1';
        return false; 
    }
    else{
    document.getElementById('passErr_in').innerHTML='';
    document.getElementById('er2_in').style.opacity='0';
    return true;
    }
}










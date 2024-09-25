function validateForm(event){
    event.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const confirmPassword=document.getElementById('confirmPassword').value;
    const error_msge=document.getElementById('error_msge');
    if(name.trim()==='' || email.trim()==='' || password.trim()==='' || confirmPassword.trim()===''){
        error_msge.innerText="All Fields are required";
        return;
    }
    if(password !==confirmPassword){
        error_msge.innerText="same password required";
        return;
    }
        if(!isValidLength(password)){
            error_msge.innerText='Password should contain more than 7 and less than 13 characters';
            return;
        }
        if(!containAlpha(password)){
            error_msge.innerText='Password should contain alphahbets';
            return;
        }
        if(!containDigit(password)){
            error_msge.innerText='Password should contain a digit';
            return;
        }
        if(!containSpecial(password)){
            error_msge.innerText='Password should contain a special character';
            return;
        }

    document.getElementById(Registration_form).submit();
}
function isValidLength(pwd){
    if(pwd.length>7 &&  pwd.length<=12){
        return true;
    }
    else{
        return false;
    }
}
function containAlpha(pwd){
    for(let i=0;i<pwd.length;i++){
        if(pwd.charAt(i)>='a' && pwd.charAt(i)<='z' ||pwd.charAt(i)>='A' && pwd.charAt(i)<='Z')
            return true;
    }
    return false;
}
function containDigit(pwd){
    for(let i=0;i<pwd.length;i++){
        if(pwd.charAt(i)>='1' && pwd.charAt(i)<='9')
            return true;
    }
    return false;
}
function containSpecial(pwd){
    for(let i=0;i<pwd.length;i++){
        if( pwd.charAt(i)>='a' && pwd.charAt(i)<='z' ||pwd.charAt(i)>='A' && pwd.charAt(i)<='Z' || pwd.charAt(i)>='1' && pwd.charAt(i)<='9' );
          else{
            return true;
          }
    }
    return false;
}

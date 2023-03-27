var formData=document.getElementById('form');
formData.addEventListener('submit',function(event){
    event.preventDefault();
var fname=event.target.fname;
var lname=event.target.lname;
var email=event.target.email;
var password=event.target.password;
var errorText=document.querySelector('.errorText');
if(fname.value==""){
    fname.classList.add('error');
    errorText.style.display="block";
    fname.classList.replace('success','error');
    

}else{
    fname.classList.replace('error','success');
    errorText.style.display="none";
}
if(lname.value==""){
    lname.classList.add('error');
    lname.classList.replace('success','error');

}else{
    lname.classList.replace('error','success');
}
if(email.value==""){
    email.classList.add('error');
    email.classList.replace('success','error');

}else{
    email.classList.replace('error','success');
}
if(password.value==""){
    password.classList.add('error');
    password.classList.replace('success','error');

}else{
    password.classList.replace('error','success');
}
})
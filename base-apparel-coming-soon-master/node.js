const mail=document.querySelector('.container form input[type=email]');
var email;

form.addEventListener('submit',(e)=>{

e.preventDefault();
email=email.value;
if( ValidateEmail(email.value)){

form.classList.remove('error')

}
else
form.classList.add('error')
})



function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

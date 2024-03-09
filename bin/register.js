 
function RegisterForm() { 
    const Fname = 
        document.forms.RegForm.fname.value;
    const Lname =
        document.forms.RegForm.lname.value;
    const Email = 
        document.forms.RegForm.email.value; 
    const Pass = 
        document.forms.RegForm.pass.value;
    const Cpass = 
        document.forms.RegForm.cpass.value;
  
    console.log(Fname, Lname, Email, Pass); 
    if (pass.length < 6) { 
        alert 
            ("Password should be atleast 6 character long"); 
        password.focus(); 
        return false; 
    } 
    if (!(pass == cpass)) {
        alert
          ("Passwords should be the same");
        return false;
    }
 
    return true;
}

 
function GEEKFORGEEKS() { 
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
    return true
}


form.addEventListener('submit', (e)=>{
    const form = document.getElementByID('form');
    const fname = document.getElementByID('fname');
    const lname = document.getElementByID('lname');
    const email = document.getElementByID('email');
    const pass = document.getElementByID('pass');
    const cpass = document.getElementByID('cpass');
    
    if(!validateInputs()){
        alert("Registration Unsuccessful");
    }
    else{
        alert("Registration Successful");
        const fs = require('fs');
        let csvContent = fname + "," + lname + "," + email + "," + password + "," + "\r\n";
        fs.writeFile("data.csv", csvContent, (err) => {
            if (err) throw err;
        })   
    }
})
                      
function validateInputs(){
    const fnameVal = fname.value.trim()
    const lnameVal = lname.value.trim()
    const emailVal = email.value.trim();
    const passwordVal = pass.value.trim();
    const cpasswordVal = cpass.value.trim();
    let success = true

    if(fnameVal===''){
        success=false;
        setError(username,'Name is required')
    }
    else{
        setSuccess(fname)
    }

    if(emailVal===''){
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(passwordVal === ''){
        success= false;
        setError(pass,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(pass,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(pass)
    }

    if(cpasswordVal === ''){
        success = false;
        setError(cpass,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        setError(cpass,'Password does not match')
    }
    else{
        setSuccess(cpass)
    }

    return success;

}
//element - password, msg- pwd is reqd
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

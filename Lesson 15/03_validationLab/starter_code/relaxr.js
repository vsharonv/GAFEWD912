function validateSignInForm(e){
    e.preventDefault();

    // Set up message array
    let messages = new Array;

    // Get password and validate
    let password = document.querySelector('inputPassword3').value;
    if(password.trim().length< 3){
        messages.push("Password is Too Short")
    }

    // Get email address and validate
   let email = document.querySelector('#inputEmail3').value;
   if(ValidateEamil(email) == false){
        messages.push("Email is not valid")
   }

    // If no error messages show submit message
    let outputMessage = "";
    if(messages.length == 0){
        outputMessage = '<div class="alert alert-success" role="alert"><p>Login has been submitted</p></div>';
    }else{
    // Else show error messages
        outputMessage = '<div class="alert alert-danger" role="alert">';
        for(let i=0;i<messages.length;i++){
            outputMessage+='<p>'+messages[i]+"</p>";
        }
        outputMessage+="</div>";
    }

    document.getElementById('errorMessages').innerHTML = outputMessage;

}

function validateNewUserForm(e){
    e.preventDefault();

     // Set up message array
     let messages = new Array;

    // Get email address and validate
    let email = document.querySelector('#inputEmail3').value;
    if(ValidateEamil(email) == false){
         messages.push("Email is not valid")
    }
    
    // Get passwords and validate
        // Make sure that both passwords match
        let pw1=document.getElementById('inputPassword5').value;
        let pw2=document.getElementById('inputPassword4').value;
        if(pw1.trim().length<3 || pw2.trim().length<3 || pw1 != pw2){
            messages.push("Invalid Passwords - either too short or they do not match");
        }
    
    // Validate Names
    let fname = document.querySelector('#inputFName').value;
        if(password.trim().length == 0){
            messages.push("Please enter a first name")
        } else if(fname.trim().length<3){
            messages.push("First Name is Too Short");
        }
    let lname=document.querySelector('inputLName').value;
    if(fname.trim().length < 3){
        messages.push("Invalid Last Name");
    }

     // If no error messages show submit message
     let outputMessage = "";
     if(messages.length == 0){
         outputMessage = '<div class="alert alert-success" role="alert"><p>Login has been submitted</p></div>';
     }else{
     // Else show error messages
         outputMessage = '<div class="alert alert-danger" role="alert">';
         for(let i=0;i<messages.length;i++){
             outputMessage+='<p>'+messages[i]+"</p>";
         }
         outputMessage+="</div>";
     }
 
     document.getElementById('errorMessages').innerHTML = outputMessage;
}




function ValidateEmail(mail){
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }else{
    return false;
  }
}




document.addEventListener('DOMContentLoaded', function(event) {

    jQuery('#relaxrExistingUser a').click(function (e) {
        e.preventDefault()
        jQuery(this).tab('show')
    });

    // Bind a validation function to the submit of the login form
    document.querySelector("#home .relaxrLoginForm").addEventListener('submit',validateSignInForm);

    // Bind a validation function to the submit of the profile

});
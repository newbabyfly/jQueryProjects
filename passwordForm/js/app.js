var $password = $("#password");
var $passconfirm = $("#confirm_password");

//hide hints
$("form span").hide();


function validPassword() {
  return $password.val().length > 8;
}

function passMatch() {
  return $password.val() === $passconfirm.val();
}

function canSubmit() {
  return validPassword() && passMatch();
}


function passwordEvent() {
    //find out if password is valid
   if (validPassword()) {
  
   //hide hint if valid
       $password.next().hide();
       } else {
  //else show hint
        $password.next().show();
       }
  }

function passCheck() {
  //Check if passwords match
 
  if(passMatch()) {
     $passconfirm.next().hide();
    } else {
     
      $passconfirm.next().show();
     }
}

function enableSubmit() {
 $("#submit").prop("disabled", !canSubmit()); 
}

//When input is entered
  $password.focus(passwordEvent).keyup(passwordEvent).keyup(passCheck).keyup(enableSubmit);

  $passconfirm.focus(passCheck).keyup(passCheck).keyup(enableSubmit);

  enableSubmit();

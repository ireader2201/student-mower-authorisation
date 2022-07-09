$(document).ready(function(){
    $(".input-1").click(function(){
        $(".hr-1").css("border-color","rgb(18,78,91)");
        $("#user").css("color","rgb(18,78,91)");
    })
    $(".input-2").click(function(){
        $(".hr-2").css("border-color","rgb(18,78,91)");
        $("#lock").css("color","rgb(18,78,91)")
    })
    $(".login-button").click(function(){
        $(".hr-1,.hr-2").css("border-color","rgb(18, 78, 91)");
        $("#lock,#user").css("color","rgb(18,78,91)");
    })
    $(".hide,.hide-1,.first-name-hide,.last-name-hide,.email-hide,.password-signup-hide,.confirm-password-signup-hide").css("color","red")
    $(".sign-up").click(function(){
        $(".hide-me").css("display","none");
        $(".show-me").css("display","block");
        $(".form").css("height","135vh")

    })
    $(".login-page").click(function(){
        $(".show-me").css("display","none");
        $(".hide-me").css("display","block");
        $(".form").css("height","135vh")
    })
    $(".login-button").click(function(){
    var name= $(".input-1").val();
    var check= /^[a-zA-Z\s]+$/;
    //username for login
    if(name==""){
        $(".hide").text("Enter your email address");
        return false;
    }
    else{true;}
    if(!name.match(check)){
        $(".hide").text("Enter your valid name");
            return false;
    }
    else{true;}
    if(name.length>20){
        $(".hide").text("Maximum 20 characters");
        return false;
        }
        else{ $(".hide").text("");}
    //username for login
    //pass for login
    var pass= $(".input-2").val();
    if(pass==""){
        $(".hide-1").text("Enter your password");
        return false;
    }
    else{ $(".hide-1").text("");}
    })
    //pass for login
                                                         //for sign-up btn
    $(".signup-button").click(function(){
    var lastname=$(".last-name").val();
    var firstname=$(".first-name").val();
    var check= /^[a-zA-Z\s]+$/;
           //firstname for sign-up
    if(firstname==""){
        $(".first-name-hide").text("Enter your first name");
        return false;
    }
    else{true;}
    if(!firstname.match(check)){
        $(".first-name-hide").text("Enter your valid name");
            return false;
    }
    else{true;}
    if(firstname.length>20){
        $(".first-name-hide").text("Maximum 20 characters");
        return false;
        }
        else{ $(".first-name-hide").text("");}
    //firstname for sign-up
    //lastname for sign-up
    if(lastname==""){
        $(".last-name-hide").text("Enter your last name");
        return false;
    }
    else{true;}
    if(!lastname.match(check)){
        $(".last-name-hide").text("Enter your valid name");
            return false;
    }
    else{true;}
    if(lastname.length>20){
        $(".last-name-hide").text("Maximum 20 characters");
        return false;
        }
        else{ $(".last-name-hide").text("");}
    //lastname for sign-up
    //email-id for sign-up
    var check_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email=$(".email").val();
    if(email==""){
        $(".email-hide").text("Enter your email address");
        return false;
    }
    else{true}
    if(!email.match(check_email)){
        $(".email-hide").text("Enter your valid email address");
        return false;
    }
    else{ $(".email-hide").text("");}
    //email-id for sign-up
     //pass for sign-up
    var password = $(".password-signup").val();
    if(password==""){
        $(".password-signup-hide").text("Enter your password");
        return false;
    }
    else{ $(".password-signup-hide").text("");}
    //pass for sign-up
    //confirm-pass for sign-up
    var confirmPassword = $(".confirm-password-signup").val();
    if(confirmPassword==""){
        $(".confirm-password-signup-hide").text("Enter your password");
        return false;
    }
    if(!confirmPassword.match(password)){
        $(".confirm-password-signup-hide").text("Your password did not match");
        return false;
    }
    else{ $(".confirm-password-signup-hide").text("");}
    //confirm-pass for sign-up
    })
})

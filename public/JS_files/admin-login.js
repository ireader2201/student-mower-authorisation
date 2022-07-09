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
    $(".hide,.hide-1,.first-name-hide,.home-address-hide,.user-type-hide,.phone-number-hide,.last-name-hide,.email-hide,.password-signup-hide,.confirm-password-signup-hide").css("color","red")
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
    var check_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //username for login
    if(name==""){
        $(".hide").text("Enter your email address");
        return false;
    }
    else{true;}
    if(!name.match(check_email)){
        $(".hide").text("Enter your valid email");
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

    $.ajax({
        type: "GET",
        url: "/api/authenticate/",
        data: formData,
        dataType: "json",
        success: function(result) {
            localStorage.setItem('token', result.token);
            alert('Login Successful');
        },
        error: function(result) {
            alert('error');
        },
        // encode: true,
      }).done(function (data) {
        console.log(data);
    });

    e.preventDefault();
    })
    //pass for login
                                                         //for sign-up btn
    // $(".signup-button").click(function(e){
    // var lastname=$(".last-name").val();
    // var firstname=$(".first-name").val();
    // var address=$(".home-address").val();
    // var phonenumber=$(".phone-number").val();
    // var check= /^[a-zA-Z\s]+$/;
    // var checknumber= /^\d{10}$/;
    //        //firstname for sign-up
    // if(firstname==""){
    //     $(".first-name-hide").text("Enter your first name");
    //     return false;
    // }
    // else{true;}
    // if(!firstname.match(check)){
    //     $(".first-name-hide").text("Enter your valid name");
    //         return false;
    // }
    // else{true;}
    // if(firstname.length>20){
    //     $(".first-name-hide").text("Maximum 20 characters");
    //     return false;
    //     }
    //     else{ $(".first-name-hide").text("");}
    // //firstname for sign-up
    // //lastname for sign-up
    // if(lastname==""){
    //     $(".last-name-hide").text("Enter your last name");
    //     return false;
    // }
    // else{true;}
    // if(!lastname.match(check)){
    //     $(".last-name-hide").text("Enter your valid name");
    //         return false;
    // }
    // else{true;}
    // if(lastname.length>20){
    //     $(".last-name-hide").text("Maximum 20 characters");
    //     return false;
    //     }
    //     else{ $(".last-name-hide").text("");}
    // //lastname for sign-up
    // //email-id for sign-up
    // if(address==""){
    //     $(".home-address-hide").text("Enter your suburb");
    //     return false;
    // } else {
    //     $(".home-address-hide").text("");
    //     true;}

    // if (phonenumber==""){
    //     $(".phone-number-hide").text("Enter your phone number");
    //     return false;
    // } else{
    //     $(".phone-number-hide").text("");
    //     true;
    // }

    // // if(!phonenumber.match(checknumber)){
    // //     $(".phone-number-hide").text("Enter only number");
    // //     return false;
    // // } else{
    // //     $(".phone-number-hide").text("");
    // //      true;
    // // }



    // var check_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // var email=$(".email").val();
    // var check_userType = ["student", "resident"];
    // var usertype=$(".user-type").val().toLowerCase();

    // if(email==""){
    //     $(".email-hide").text("Enter your email address");
    //     return false;
    // }
    // else{true}
    // if(!email.match(check_email)){
    //     $(".email-hide").text("Enter your valid email address");
    //     return false;
    // }
    // else{ $(".email-hide").text("");}
    // //email-id for sign-up
    //  //pass for sign-up
    // var password = $(".password-signup").val();
    // if(password==""){
    //     $(".password-signup-hide").text("Enter your password");
    //     return false;
    // }
    // else{ $(".password-signup-hide").text("");}
    // //pass for sign-up
    // //confirm-pass for sign-up
    // var confirmPassword = $(".confirm-password-signup").val();
    // if(confirmPassword==""){
    //     $(".confirm-password-signup-hide").text("Enter your password");
    //     return false;
    // }
    // if(!confirmPassword.match(password)){
    //     $(".confirm-password-signup-hide").text("Your password did not match");
    //     return false;
    // }
    // else{ $(".confirm-password-signup-hide").text("");}

    // if(usertype==""){
    //     $(".user-type-hide").text("Enter the user type");
    //     return false;
    // } else{
    //     true;
    // }

    // if (!(usertype.match(check_userType[0])||usertype.match(check_userType[1]))){
    //     $(".user-type-hide").text("Enter Resident / Student Only");
    //     return false;
    // }
    // else {
    //     $(".user-type-hide").text("");
    // }

    // var formData = {
    //     // id: $(this).val(),
    //     firstName: $(".first-name").val(),
    //     lastName: $(".last-name").val(),
    //     email: $(".email").val(),
    //     password: $(".password-signup").val(),
    //     password_confirmation: $(".confirm-password-signup").val(),
    //     suburb: $(".home-address").val(),
    //     phone: $(".phone-number").val(),
    //     userType: $(".user-type").val().toLowerCase(),
    // };

    // $.ajax({
    //     type: "POST",
    //     url: "/api/register/",
    //     data: formData,
    //     dataType: "json",
    //     success: function(result) {
    //         alert('Account Created');
    //     },
    //     error: function(result) {
    //         alert('error');
    //     },
    //     // encode: true,
    //   }).done(function (data) {
    //     console.log(data);
    // });

    // e.preventDefault();

    // // if((!usertype.match(check_userType[0])) || (!usertype.match(check_userType[1]))){
    // //     $(".user-type-hide").text("Only resident / student");
    // //     return false;
    // // }
    // //confirm-pass for sign-up
    // })
})

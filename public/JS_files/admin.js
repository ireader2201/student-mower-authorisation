$(document).ready(function(){
    $(".menu-bar").click(function(){
        $(".side-bar").css({"width":"30%","display":"block"});
    });
    $(".menu-bar-1").click(function(){
        $(".side-bar").css({"width":"40%","display":"block"});
    });
    $(".menu-bar-2").click(function(){
        $(".side-bar").css({"width":"60%","display":"block"});
    });
    $(".close").click(function(){
        $(".side-bar").css("width","0%");
    });

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
    $(".disable-button").click(function(){
        var id = $(".input-id").val();
    // var name= $(".input-1").val();
    // var check= /^[a-zA-Z\s]+$/;
    // var check_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //username for login
    // if(name==""){
    //     $(".hide").text("Enter your email address");
    //     return false;
    // }
    // else{true;}
    // if(!name.match(check_email)){
    //     $(".hide").text("Enter your valid email");
    //         return false;
    // }
    // else{true;}
    // if(name.length>20){
    //     $(".hide").text("Maximum 20 characters");
    //     return false;
    //     }
    //     else{ $(".hide").text("");}
    // //username for login
    // //pass for login
    // var pass= $(".input-2").val();
    // if(pass==""){
    //     $(".hide-1").text("Enter your password");
    //     return false;
    // }
    // else{ $(".hide-1").text("");}

    var formsData = {
        id: $(".input-id").val(),
        status: "Disabled"

        // email: $(".input-1").val(),
        // password: $(".input-2").val()
        // password_confirmation: $(".confirm-password-signup").val(),
        // suburb: $(".home-address").val(),
        // phone: $(".phone-number").val(),
        // userType: $(".user-type").val()
    };

    $.ajax({
        type: "PUT",
        url: "/api/update/" + id,
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
          },
        data: formsData,
        dataType: "json",
        success: function(result) {
            localStorage.setItem('token', result.token);
            console.log(result);
            // alert("Success");
        },
        // error: function(result) {
        //     alert('error');
        // },
        // encode: true,
      }).done(function (data) {
        console.log(data);
    });

    

   // e.preventDefault();

    })
    $(".enable-button").click(function(){
        var id = $(".input-id").val();
    // var name= $(".input-1").val();
    // var check= /^[a-zA-Z\s]+$/;
    // var check_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //username for login
    // if(name==""){
    //     $(".hide").text("Enter your email address");
    //     return false;
    // }
    // else{true;}
    // if(!name.match(check_email)){
    //     $(".hide").text("Enter your valid email");
    //         return false;
    // }
    // else{true;}
    // if(name.length>20){
    //     $(".hide").text("Maximum 20 characters");
    //     return false;
    //     }
    //     else{ $(".hide").text("");}
    // //username for login
    // //pass for login
    // var pass= $(".input-2").val();
    // if(pass==""){
    //     $(".hide-1").text("Enter your password");
    //     return false;
    // }
    // else{ $(".hide-1").text("");}

    var formsData = {
        id: $(".input-id").val(),
        status: "Active"

        // email: $(".input-1").val(),
        // password: $(".input-2").val()
        // password_confirmation: $(".confirm-password-signup").val(),
        // suburb: $(".home-address").val(),
        // phone: $(".phone-number").val(),
        // userType: $(".user-type").val()
    };

    $.ajax({
        type: "PUT",
        url: "/api/register/" + id,
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
          },
        data: formsData,
        dataType: "json",
        success: function(result) {
            localStorage.setItem('token', result.token);
            console.log(result);
            // alert("Success");
        },
        // error: function(result) {
        //     alert('error');
        // },
        // encode: true,
      }).done(function (data) {
        console.log(data);
    });

    

   // e.preventDefault();

    })
    //pass for login
    $(window). scroll(function(){
        var scroll = $(window). scrollTop();
        if (scroll > 0) {
        $("#top-containt"). css("background" , "rgb(18,78,91)");
        }
        else{
        $("#top-containt"). css("background" , "rgb(18,78,91");}})
    $('.parallax-window').parallax({imageSrc: 'desktop-1.jpg'});
});


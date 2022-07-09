<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="CSS_files/login-form.css">
    <script src="JS_files/admin-login.js"></script>
</head>

<body style="background-image:url('Images/lawnphoto.jpeg');background-size: 105%;">
    <div class="container">
        <div class="container form bg-white pt-5 mt-4 mb-3">
            <!--change after click on sign up-->

            <!--This will create connection to database-->
            <?php 
                // error_reporting(E_ERROR | E_WARNING | E_PARSE);
                // // $dbc= mysqli_connect ('localhost', 'root', '', 'db_anc')
                // //     OR die (mysqli_connect_error());
                // // mysqli_set_charset($dbc, 'utf8');

                
                // // This will get the information for login page
                // if (isset($_POST['loginButton'])){
                //     $logEmail = $_POST['userEmailLogin'];
                //     $logPassword = $_POST['userPasswordLogin'];
                    
                //     // $loadInfo = mysqli_query($dbc,"SELECT * FROM loginpage WHERE email = \".$logEmail.\"");
                //     $loadInfo = mysqli_query($dbc,"SELECT * FROM loginpage");
                    
                //     // This will get the email and passowrd from database
                //     while($accountRow = mysqli_fetch_assoc($loadInfo)){
                //         $email = $accountRow['email'];
                //         $pass = $accountRow['password'];

                //     }

                //     // if email is correct, it will show login successful
                //     if (($email == $logEmail) & ($pass == $logPassword)){
                //         echo "Login Successful";

                //     // else email is incorrect, it will show wrong email or password
                //     } else {
                //         echo "Wrong email or password";
                //     } 

                // } else if (isset($_POST['signUpButton'])){
                //     $uFullName = $_POST['userFullName'];
                //     $uHomeAddress = $_POST['userHomeAddress'];
                //     $uPhoneNumber = $_POST['userPhoneNumber'];
                //     $uEmail = $_POST['userRegEmail'];
                //     $uPassword = $_POST['userRegPassword'];
                    
                //     $signUpQuery = "INSERT INTO loginPage VALUES (\"" . $uEmail . 
                //         "\", \"" . $uFullName . "\", \"" . $uHomeAddress . "\", \"". $uPhoneNumber ."\", 
                //         \"" . $uPassword . "\" )";

                    
                //     echo "Account successfully created";

                //     // This will get the information for customer signup
                //     if (!($signUpResult = mysqli_query($dbc, $signUpQuery)))
                //     {
                //         print("Could not execute $signUpQuery");
                //     }
                // }

                
                // mysqli_close( $dbc );
                
            ?>

            <p class="text-center loginHeading hide-me textColor">Student Mower<br>Admin Login</p>
            <form method="GET" action="admin.html">

                <div class="container hide-me">
                    <div class="row">
                        <div class="col mt-4 pl-5 pr-5">
                            <p class="username textColor">Email Address</p>
                            <div class="row mt-4">
                                <div class="col-2 text-center pt-1 pr-0">
                                    <i class="fa fa-user-o" aria-hidden="true" id="user"></i>
                                </div>
                                <div class="col-10 pl-0">
                                    <input type="text" placeholder="Type your email address" name="userEmailLogin"
                                        class='input-1'>
                                </div>
                            </div>
                            <hr class="hr-1">
                            <div class="hide"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mt-4 pl-5 pr-5">
                            <p class="username textColor">Password</p>
                            <div class="row mt-4">
                                <div class="col-2 text-center pt-1 pr-0">
                                    <i class="fa fa-lock" aria-hidden="true" id="lock"></i>
                                </div>
                                <div class="col-10 pl-0">
                                    <input type="password" placeholder="Type your password" name="userPasswordLogin"
                                        class="input-2">
                                </div>
                            </div>
                            <hr class="hr-2">
                            <div class="hide-1"></div>
                        </div>
                    </div>
                    <!-- <div class="row">
                        <div class="col text-right pr-5">
                            <a href="#"><span class="forget-password">Forget password?</span></a>
                        </div>
                    </div> -->
                    <div class="row mt-4">
                        <div class="col pl-5 pr-5">
                            <input type="submit" name="loginButton" value="Login"
                                class="btn btn-block text-white login-button">
                            <!-- <a href="login-ecommerce.html"><span
                                    class="btn btn-block text-white login-button">login</span></a> -->
                        </div>
                    </div>
            </form>
            <!-- <div class="row mt-5">
                <div class="col text-center">
                    <span
                        style="text-transform: capitalize;font-family: Arial, Helvetica, sans-serif;font-size:18px;font-weight:600;color:rgb(18, 78, 91)">or
                        Create an Account</span>
                </div>
            </div> -->

            <!-- <div class="row mt-3">
                <div class="col-12 text-center pt-1">
                    <a href="#"><span class="sign-up" >sign up</span></a>
                </div>
            </div> -->
            <div class="row mt-5">
                <div class="col-12 text-center pt-1">
                    <a href="home.html"><span class="textColor"> <i class="fa fa-arrow-left" aria-hidden="true"></i>
                            Return to Homepage</span></a>
                </div>
            </div>

        </div>

        <!--change it-->
        <!-- <p class="text-center loginHeading show-me textColor">Student Mower <br>Resident Sign-Up</p>
        <form method="post" action="">
            <div class="row show-me">
                <div class="col mt-4 pl-5 pr-5">
                    <p class="username textColor">First name</p>
                    <div class="row mt-4">
                        <div class="col-2 text-center pt-1 pr-0">
                            <i class="fa fa-user-o" aria-hidden="true" id="user"></i>
                        </div>
                        <div class="col-10 pl-0">
                            <input type="text" placeholder="Type your First Name" name="userFirstName" class='first-name'>
                        </div>
                    </div>
                    <hr class="hr-1">
                    <div class="first-name-hide"></div>
                </div>
            </div>
            <div class="row show-me">
                <div class="col mt-4 pl-5 pr-5">
                    <p class="username textColor">Last Name</p>
                    <div class="row mt-4">
                        <div class="col-2 text-center pt-1 pr-0">
                            <i class="fa fa-user-o" aria-hidden="true" id="user"></i>
                        </div>
                        <div class="col-10 pl-0">
                            <input type="text" placeholder="Type your Last Name" name="userLastName"
                                class='last-name'>
                        </div>
                    </div>
                    <hr class="hr-1">
                    <div class="last-name-hide"></div>
                </div>
            </div>
            <div class="row show-me">
                    <div class="col mt-4 pl-5 pr-5">
                        <p class="username textColor">Suburb</p>
                        <div class="row mt-4">
                            <div class="col-2 text-center pt-1 pr-0">
                                <i class="fa fa-user-o" aria-hidden="true" id="user"></i>
                            </div>
                            <div class="col-10 pl-0">
                                <input type="text" placeholder="Type your Suburb" class='home-address'>
                            </div>
                        </div>
                        <hr class="hr-1">
                        <div class="home-address-hide"></div>
                    </div>
                </div>
            <div class="row show-me">
                <div class="col mt-4 pl-5 pr-5">
                    <p class="username textColor">Phone Number</p>
                    <div class="row mt-4">
                        <div class="col-2 text-center pt-1 pr-0">
                            <i class="fa fa-phone" aria-hidden="true" id="user"></i>
                        </div>
                        <div class="col-10 pl-0">
                            <input type="text" placeholder="Type your Phone Number" name="userPhoneNumber"
                                class='phone-number'>
                        </div>
                    </div>
                    <hr class="hr-1">
                    <div class="phone-number-hide"></div>
                </div>
            </div>
            <div class="row show-me">
                <div class="col mt-4 pl-5 pr-5">
                    <p class="username textColor">Email Address</p>
                    <div class="row mt-4">
                        <div class="col-2 text-center pt-1 pr-0">
                            <i class="fa fa-envelope-o" aria-hidden="true" id="user"></i>
                        </div>
                        <div class="col-10 pl-0">
                            <input type="text" placeholder="Type your Email Address" name="userRegEmail" class='email'>
                        </div>
                    </div>
                    <hr class="hr-1">
                    <div class="email-hide"></div>
                </div>
            </div>
            <div class="row show-me">
                <div class="col mt-4 pl-5 pr-5">
                    <p class="username textColor">Password</p>
                    <div class="row mt-4">
                        <div class="col-2 text-center pt-1 pr-0">
                            <i class="fa fa-lock" aria-hidden="true" id="lock"></i>
                        </div>
                        <div class="col-10 pl-0">
                            <input type="password" placeholder="Type your Password" name="userRegPassword"
                                class="password-signup">
                        </div>
                    </div>
                    <hr class="hr-2">
                    <div class="password-signup-hide"></div>
                </div>
            </div>
            <div class="row show-me">
                <div class="col mt-4 pl-5 pr-5">
                    <p class="username textColor">Confirm Password</p>
                    <div class="row mt-4">
                        <div class="col-2 text-center pt-1 pr-0">
                            <i class="fa fa-lock" aria-hidden="true" id="lock"></i>
                        </div>
                        <div class="col-10 pl-0">
                            <input type="password" placeholder="Type your Password" class="confirm-password-signup">
                        </div>
                    </div>
                    <hr class="hr-2">
                    <div class="confirm-password-signup-hide"></div>
                </div>
            </div>
            <div class="row show-me">
                <div class="col mt-4 pl-5 pr-5">
                    <p class="username textColor">User Type</p>
                    <div class="row mt-4">
                        <div class="col-2 text-center pt-1 pr-0">
                            <i class="fa fa-user-o" aria-hidden="true" id="user"></i>
                        </div>
                        <div class="col-10 pl-0">
                            <input type="text" placeholder="Student / Resident" name="residentType" class='user-type' value="Resident">
                        </div>
                    </div>
                    <hr class="hr-1">
                    <div class="user-type-hide"></div>
                </div>
            </div>
            <div class="row show-me">
                <div class="col pl-5">
                    <a href="#"><span class="forget-password">I accept the <span
                                style="text-transform:capitalize;color:blue">terms of use</span> & 
                            <span style="text-transform:capitalize;color:blue">privacy policy</span> </a>
                </div>
            </div>
            <div class="row mt-4 show-me">
                <div class="col pl-5 pr-5">
                    <input type="submit" name="signUpButton" value="Sign Up"
                                class="btn btn-block text-white signup-button">
                    <a href="login-ecomarce.html"><span class="btn btn-block text-white signup-button">sign
                            up</span></a> -->
                <!-- </div>
            </div>
        </form> -->
        <!-- <div class="row mt-5 show-me">
                    <div class="col text-center">
                        <span style="text-transform: capitalize;font-family: Arial, Helvetica, sans-serif;font-size:18px;font-weight:600;color:rgb(18, 78, 91)">or Create an Account</span>
                    </div>
                </div>
                <div class="row mt-5 show-me">
                    <div class='col text-center'>
                        <span class="facebook-icon"><i class="fa fa-facebook" aria-hidden="true"></i></span>
                        <span class="twitter-icon"><i class="fa fa-twitter" aria-hidden="true"></i></span>
                        <span class="google-icon"><i class="fa fa-google" aria-hidden="true"></i></span>
                    </div>
                </div> -->
        <!-- <div class="row mt-5 show-me">
            <div class="col text-center">
                <span
                    style="text-transform: capitalize;font-family: Arial, Helvetica, sans-serif;font-size:15px;font-weight:600; color:rgb(18, 78, 91);">already
                    have an account?</span>
            </div>
            <div class="col-12 text-center pt-3">
                <a href="#"><span class="login-page">LOGIN</span></a>
            </div>
        </div> --> 

        <div class="row mt-5 show-me">
            <div class="col-12 text-center pt-1">
                <a href="home.html"><span class="textColor"> <i class="fa fa-arrow-left" aria-hidden="true"></i>
                        Return to Homepage</span></a>
            </div>
        </div>
    </div>
    </div>
</body>

</html>
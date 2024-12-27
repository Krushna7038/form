let clear_name = document.getElementById("fullname");
let name_id = document.getElementById("user_name");
let clear_email = document.getElementById("emailid");
let email_id = document.getElementById("user_email");
let clear_mobile = document.getElementById("mobileid");
let mobile_id = document.getElementById("user_contact");
let clear_address = document.getElementById("addressid");
let address_id = document.getElementById("user_address");
let clear_aadhar = document.getElementById("aadharid");
let aadhar_id = document.getElementById("user_aadhar");
let clear_password1 = document.getElementById("passwordid1");
let password_id1 = document.getElementById("user_password1");
let clear_password2 = document.getElementById("passwordid2");
let password_id2 = document.getElementById("user_password2");

function clearNameErrors() {
    clear_name.innerHTML = "";
    name_id.style.border = "2px solid green";
}

function clearEmailErrors() {
    clear_email.innerHTML = "";
    email_id.style.border = "2px solid green";
}

function clearContactErrors() {
    clear_mobile.innerHTML = "";
    mobile_id.style.border = "2px solid green";
}

function clearAddressErrors(){
    clear_address.innerHTML = "";
    address_id.style.border = "2px solid green";
}

function clearAadharErrors() {
    clear_aadhar.innerHTML = "";
    aadhar_id.style.border = "2px solid green";
}

function clearPassword1Errors() {
    clear_password1.innerHTML = "";
    password_id1.style.border = "2px solid green";
}

function clearPassword2Errors() {
    clear_password2.innerHTML = "";
    password_id2.style.border = "2px solid green";
}

function validation() {
    var name_format = /^[A-Za-z" "]+$/;
    var email_format = /^[a-z_0-9.]{3,}@['gmail']{5,}[.]{1}['com']{3}$/;
    var mobile_format = /^[0-9]{10}$/;
    var address_format = /^[A-Za-z0-9" "]+$/;
    var aadhar_format = /^[0-9]{12}$/;
    var password_format = /^[A-Za-z_0-9_@#$%&*]+$/;

    var returnVal = true;
    clearNameErrors();
    clearEmailErrors();
    clearContactErrors();
    clearAddressErrors();
    clearAadharErrors();
    clearPassword1Errors();
    clearPassword2Errors();

    
                    // name validation
    let name_value = document.forms['myForm']["username"].value;
    if (name_value.length<1) {
        clear_name.innerHTML = "Name field can not be empty.";
        clear_name.style.color = "red";
        name_id.style.border = "2px solid red";
        returnVal = false;
    }else if(name_value.length<10 || name_value.lengh>20){
        clear_name.innerHTML = "Please enter full name.";
        clear_name.style.color = "red";
        name_id.style.border = "2px solid red";
        returnVal = false;
    }else if(name_value.match(name_format)) {
        returnVal;
    }else{
        clear_name.innerHTML = "Please enter valid name.";
        clear_name.style.color = "red";
        name_id.style.border = "2px solid red";
        returnVal = false;
    }

                        //email validation
    let email_value = document.forms['myForm']["useremail"].value;
    if (email_value.length<1) {
        clear_email.innerHTML = "Email field can not be empty.";
        clear_email.style.color = "red";
        email_id.style.border = "2px solid red";
        returnVal = false;
    }else if(email_value.match(email_format)){
        returnVal;
    } else {
        clear_email.innerHTML = "Please enter valid email.";
        clear_email.style.color = "red";
        email_id.style.border = "2px solid red";
        returnVal = false;
    }

                        // mobile number validation
    let contact_value = document.forms['myForm']["usercontact"].value;
    if (contact_value.length<1) {
        clear_mobile.innerHTML = "Only digits are allowed.";
        clear_mobile.style.color = "red";
        mobile_id.style.border = "2px solid red";
        returnVal = false;
    }else if(contact_value.match(mobile_format)){
        returnVal;
    } else {
        clear_mobile.innerHTML = "Enter valid mobile number.";
        clear_mobile.style.color = "red";
        mobile_id.style.border = "2px solid red";
        returnVal = false;
    }

                        // Address validation
    let address_value = document.forms['myForm']["useraddress"].value;
    if (address_value.length<1) {
        clear_address.innerHTML = "Address field can not be empty";
        clear_address.style.color = "red";
        address_id.style.border = "2px solid red";
        returnVal = false;
    }else if(address_value.length<40){
        clear_address.innerHTML = "Minimum 40 characters are required.";
        clear_address.style.color = "red";
        address_id.style.border = "2px solid red";
        returnVal = false;
    }else if(address_value.match(address_format)){
        returnVal;
    } else {
        clear_address.innerHTML = "Enter valid address.";
        clear_address.style.color = "red";
        address_id.style.border = "2px solid red";
        returnVal = false;
    }

                        // Aadhar validation
    let aadhar_value = document.forms['myForm']["useraadhar"].value;
    if (aadhar_value.length<1) {
        clear_aadhar.innerHTML = "Aadhar field can not be empty";
        clear_aadhar.style.color = "red";
        aadhar_id.style.border = "2px solid red";
        returnVal = false;
    }else if(aadhar_value.match(aadhar_format)){
        returnVal;
    } else {
        clear_aadhar.innerHTML = "Enter valid aadhar number";
        clear_aadhar.style.color = "red";
        aadhar_id.style.border = "2px solid red";
        returnVal = false;
    }

                    // Password validation
    let password1_value = document.forms['myForm']["userpassword1"].value;
    if (password1_value.length<1) {
        clear_password1.innerHTML = "Password field can not be empty";
        clear_password1.style.color = "red";
        password_id1.style.border = "2px solid red";
        returnVal = false;
    }else if(password1_value.length<8){
        clear_password1.innerHTML = "Minimum 8 characters are required.";
        clear_password1.style.color = "red";
        password_id1.style.border = "2px solid red";
        returnVal = false;
    }else if(password1_value.match(password_format)){
        returnVal;
    } else {
        clear_password1.innerHTML = "Password is not strong.<br>Password should contain letters,digits and special symbols.";
        clear_password1.style.color = "red";
        password_id1.style.border = "2px solid red";
        returnVal = false;
    }

    let password2_value = document.forms['myForm']["userpassword2"].value;
    if (password2_value == password1_value) {
        returnVal;
    } else {
        clear_password2.innerHTML = "Password is not matching";
        clear_password2.style.color = "red";
        password_id2.style.border = "2px solid red";
        returnVal = false;
    }
}
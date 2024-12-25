let clear_name = document.getElementById("fullname");
let name_id = document.getElementById("user_name");
function clearErrors() {
    clear_name.innerHTML = "";
    name_id.style.border = "1px solid green";
}

function validation() {
    var name_format = /^[A-Za-z" "]+$/;

    var returnVal = true;
    clearErrors();

    let name_value = document.forms['myForm']["username"].value;
    if (name_value.length<1) {
        clear_name.innerHTML = "Name field can not be empty.";
        clear_name.style.color = "red";
        name_id.style.border = "1px solid red";
        returnVal = false;
    }else if(name_value.length<10 || name_value.lengh>20){
        clear_name.innerHTML = "Please enter full name.";
        clear_name.style.color = "red";
        name_id.style.border = "1px solid red";
        returnVal = false;
    } 
    else if(name_value.match(name_format)) {
        returnVal;
    }else{
        clear_name.innerHTML = "Please enter valid name.";
        clear_name.style.color = "red";
        name_id.style.border = "1px solid red";
        returnVal = false;
    }
}
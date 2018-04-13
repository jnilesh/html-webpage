var idph = document.getElementById("idph");
var inpass = document.getElementById("inpass");
var email = document.getElementById("remail");
var upass = document.getElementById("upass");
var gender = document.getElementByName("gender");
var dob = document.getElementById("dob");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");

function signin() {
   if(idph.value===""){
       alert("email id is required");
       return false;
   }

   if(inpass.value===""){
    alert("password is required");
    return false;
}   
}

function signup() {
    if(( email.value==="")||( remail.value==="")||(upass.value==="")
    ||( dob.value==="")||( fname.value==="")||(lname.value==="")){
        alert("Please Fill all the Fields");
        return false;
    }
    if( gender[0].checked===true){
    }
    else if( gender[1].checked===true){
    }
    else{
        alert("select gender");
    }
    if (email!=rmail) {
        alert("email dosn`t match");
        return false;
    }


}
var nxt=document.createElement("input");
var btn=document.getElementById('old');
function myFunction() {
    var email=document.getElementById('emailget');
    if (email.value!=""){
        document.getElementById('emailid').innerHTML="Password";
        document.getElementById('email').innerHTML=email.value;
        email.value="";
        email.type="password";
        btn.innerHTML="Submit";
        btn.onclick="";
    }
   
}




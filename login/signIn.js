document.getElementById("form").addEventListener("submit", registration)
var userArr = JSON.parse(localStorage.getItem("userInfo")) || [];

function registration(event) {
    document.getElementById("form").value="";
    event.preventDefault();
    var fullname = document.getElementById("name").value
    var number = document.getElementById("mobile").value
    var email = document.getElementById("email").value
    var password = document.getElementById("pass").value
   

    var userInfo = {
        name: fullname,
        number: number,
        email: email,
        password: password,
       
    }
    if(fullname=='' || number=='' || email==''||password==''){
        alert("something went wrong");
    }else{
    userArr.push(userInfo);
    localStorage.setItem("userInfo", JSON.stringify(userArr))
    alert("Check Otp In your mobile Number");
    window.location.href = "otp.html"
    }
}

document.getElementById("form2").addEventListener("submit", login)
var loginArr = JSON.parse(localStorage.getItem("userInfo")) || [];
function login(event) {
    event.preventDefault();
    var email = document.getElementById("elogin").value
    

    if (loginArr.length > 0) {
        for (i = 0; i < loginArr.length; i++) {
            console.log(loginArr[i].email, email, loginArr[i].password, password)
            if (loginArr[i].email == email || loginArr[i].number == number) {
                alert("Login Successfull");
                    window.location.href = "landingpage.html"
                break;
            } else {
                if ((loginArr.length - 1) == i) {
                    alert("check email and password correct or Wrong else goto REGISTER");
                }
            }
        }
    } else {
        alert("check email and password correct or Wrong else goto REGISTER");
    }

}
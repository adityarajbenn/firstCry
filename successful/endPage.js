import {navbar,footer} from "../products/components/nav.js"

document.querySelector("nav").innerHTML = navbar();
document.querySelector("footer").innerHTML = footer();

let userData = JSON.parse(localStorage.getItem("userInfo"));
let TotalPrice = JSON.parse(localStorage.getItem("total"));
let address = JSON.parse(localStorage.getItem("pin"));

async function fetchLocation(){
    console.log(address);
    try{
        let response = await fetch(`https://api.postalpincode.in/pincode/${address}`);
        let data = await response.json();
        displayAddress(data[0].PostOffice[0]);
        }
        catch(error){
            console.log("Something went wrong");
        }
}

window.onload = ()=>{
    fetchLocation();
}

function displayAddress(elem){
    document.querySelector("#city").innerText = elem.District;
    document.querySelector("#state").innerText = elem.Circle;
    document.querySelector("#pinCodeHere").innerText = elem.Pincode;
}

let userName = document.getElementById('userName');
userName.innerHTML = localStorage.getItem("name") || "<span>Login /</span><span> Register</span>";
document.querySelector("#UserNamegiven").innerText = userData[0].name;
document.querySelector("#UserMobileNumber").innerText = userData[0].number;
document.querySelector("#price").innerText = TotalPrice;

function findLocation(){
    let location = document.getElementById('location');
    location.innerHTML = localStorage.getItem('location') || '<i class="fa fa-location-dot"></i><span>  Select location</span>'
}
findLocation()

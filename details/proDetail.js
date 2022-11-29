var elemData = {
        img1: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12242977a.webp",
        img2: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12242977b.webp",
        img3: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12242977c.webp",
        title: "Babyhug Cotton Knit Full Sleeves T-Shirt Striped - Yellow White",
        desc: "Comfy round neck with rib at neck tshirt for boys",
        price: 552.21,
        strikePrice: 699.00,
        productID: 12242977,
        color :"yellow"
    }
// need to change accordingly
    localStorage.setItem("product",JSON.stringify(elemData));
let elem = JSON.parse(localStorage.getItem("product")) || [];


let sizeValue = "9 to 12 M";
let weightValue = "8.9 - 9.6 Kgs";
let userPincode = JSON.parse(localStorage.getItem("thePincode")) || [];
let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
let shortProducts = JSON.parse(localStorage.getItem("shortlist")) || [];

if (userPincode.length!=0){
    document.querySelector("#pincodeCheckerAfter").style.display = "flex";
    document.querySelector("#pincodeCheckerBefore").style.display =  "none";
    document.querySelector("#pincodeEnter").innerText =   userPincode;
}
sideImages();
function sideImages(){
    document.querySelector("#sideImages").innerHTML="";
    // data.map((elem)=>{
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");

        img1.src= elem.img1;
        img2.src= elem.img2;
        img3.src= elem.img3;

        // img1.addEventListener("click", selectedImage(img1));
        // img2.addEventListener("click", selectedImage(img2));
        // img3.addEventListener("click", selectedImage(img3));
        // img4.addEventListener("click", selectedImage(img4));

        document.querySelector("#sideImages").append(img1,img2,img3);
    // })
}
firstDisplay();
function firstDisplay(){
    document.querySelector("#bigImage").innerHTML="";
    let image = document.createElement("img");
    image.src= elem.img1;  

    let button1 = document.createElement("button");
    let button2 = document.createElement("button");

    button1.addEventListener("click", ()=>{
        if (document.querySelector("#addToCart").innerText!= "GO TO CART"){
            var flag= false
            cartProducts.map((element)=>{
                if (element.title === elem.title && element.size == sizeValue){
                    flag= true;
                }
            })
                if (!flag){
                    elem.size=sizeValue;
                    elem.weight =weightValue;
                    cartProducts.push(elem);
                    localStorage.setItem("cart",JSON.stringify(cartProducts)); 
                    document.querySelector("#addToCart").innerHTML= "GO TO CART";
                }
        }
        else{
            location.href = "checkout.html";
        }
            
    })
    button2.addEventListener("click", ()=>{
        if (document.querySelector("#shortList").innerText!= "SHORTLISTED"){
            var flag= false
            shortProducts.map((element)=>{
                if (element.title === elem.title && element.size == sizeValue){
                    flag= true;
                }
            })
                if (!flag){
                    elem.size=sizeValue;
                    elem.weight =weightValue;
                    shortProducts.push(elem);
                    localStorage.setItem("shortlist",JSON.stringify(shortProducts)); 
                    document.querySelector("#shortList").innerHTML= "SHORTLISTED";
                    document.querySelector("#shortList").style.color = "#ff7043"
                    document.querySelector("#shortList").style.border = "1px solid #ff7043"
                    
                }
        }
        else{
            location.href = "location.html";
    }
            
    })

    button1.innerText= "ADD TO CART";
    button2.innerText= `SHORTLIST`;
    button1.id= "addToCart";
    button2.id= `shortList`;

    document.querySelector("#bigImage").append(image,button1,button2);

}
productDescription();

document.querySelector("#pincode").addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        userPincode = document.querySelector("#pincode").value;
        if (userPincode < 100000){
            alert("Invalid Pincode");
        }else{
            document.querySelector("#pincodeCheckerAfter").style.display = "flex";
            document.querySelector("#pincodeCheckerBefore").style.display =  "none";
            document.querySelector("#pincodeEnter").innerText =   document.querySelector("#pincode").value;
            localStorage.setItem("thePincode", JSON.stringify(userPincode));
        }
        
    }
})
function sizeData(data){
    for (var i =1;i<10;i++){
        if (i==data){
            document.getElementById(data).style.border= "1px solid black";
            document.getElementById(data).style.color = "black"
        }
        else {
            document.getElementById(i).style.border= "1px solid rgb(202, 200, 200)";
            document.getElementById(i).style.color = "rgb(202, 200, 200)"
        }
    }
    if (data==1){
        sizeValue ="3 to 6 M"
        weightValue = "6.4 - 7.9 Kgs"
    }
    else if (data==2){
        sizeValue ="6 to 9 M"
        weightValue = "7.9 - 8.9 Kgs"
    }
    else if (data==3){
        sizeValue ="9 to 12 M"
        weightValue = "8.9 - 9.6 Kgs"
    }
    else if (data==4){
        sizeValue ="12 to 18 M"
        weightValue = "9.6 - 10.9 Kgs"
    }
    else if (data==5){
        sizeValue ="18 to 24 m"
        weightValue = "10.9 - 12.5Kgs"
    }
    else if (data==6){
        sizeValue ="2 to 3 Y"
        weightValue = "12.5 - 14 Kgs"
    }
    else if (data==7){
        sizeValue ="3 to 4 Y"
        weightValue = "14 - 16.3 Kgs"
    }
    else if (data==8){
        sizeValue ="4 - 5 Y"
        weightValue = "16.3 - 18.4 Kgs"
    }
    else if (data==9){
        sizeValue ="5 - 6 Y"
        weightValue = "18.4 - 20.6 Kgs"
    }
    localStorage.setItem("sizeText",JSON.stringify(sizeValue));
    document.querySelector("#ageData").innerText = sizeValue;
    document.querySelector(".weightValue").innerText = weightValue;
    document.querySelector("#weightValue").innerText = weightValue;

    var flag= false
        cartProducts.map((element)=>{
            if (element.title == elem.title && element.size == sizeValue){
                flag= true;
                document.querySelector("#addToCart").innerHTML= "GO TO CART";
            }
        })
        if (!flag){
            document.querySelector("#addToCart").innerHTML= "ADD TO CART";
        }
    var flag1= false;
        shortProducts.map((element)=>{
            if (element.title === elem.title && element.size == sizeValue){
                flag1= true;
                console.log(flag1);
                document.querySelector("#shortList").innerHTML= "SHORTLISTED";
                document.querySelector("#shortList").style.color = "#ff7043"
                document.querySelector("#shortList").style.border = "1px solid #ff7043"
            }
        })
        if (!flag1){
            document.querySelector("#shortList").innerHTML= "SHORTLIST";
            document.querySelector("#shortList").style.color = "grey"
            document.querySelector("#shortList").style.border = "1px solid rgb(208, 200, 200)"
        }
       
    productDescription();
}

function productDescription(){
    document.querySelector("#one").innerHTML ="";
    let proName = document.createElement("h3");
    let proDes = document.createElement("p");
    let proId = document.createElement("p");
    proName.innerText = elem.title;
    proDes.innerText =`${sizeValue}, ${elem.desc}`;
    proId.innerText = `Product ID: ${elem.productID}`;

    document.querySelector("#one").append(proName,proDes,proId);

    let disAmount = Math.ceil((elem.strikePrice-elem.price)*100/elem.strikePrice);

    document.querySelector("#priceHead").innerText =elem.price;
    document.querySelector("#MRP").innerText = elem.strikePrice;
    document.querySelector("#discountText").innerText = `(${disAmount}% OFF)`;
    document.querySelector("#clubPrice").innerText = elem.price - 20.20;
    document.querySelector("#colorBoxIn").style.backgroundColor = elem.color;
    document.querySelector("#colorBoxIn").style.outline= `1px solid ${elem.color}`;

}


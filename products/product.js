import fetchData from "./utils/fetch.js";
import {discSort, lthSort, htlSort, atzSort, ztaSort} from "./utils/sort.js";
import {navbar, footer} from "./components/nav.js";

document.querySelector('nav').innerHTML = navbar();
document.querySelector('footer').innerHTML = footer();
updateTot();

// localStorage.setItem("name", "ALJITH");
let userName = document.getElementById('userName');
userName.innerHTML = localStorage.getItem("name") || "<span>Login /</span><span> Register</span>";


async function tShirt(){
    let data = await fetchData();
    console.log(data);
    localStorage.setItem("tShirtData", JSON.stringify(data));
    localStorage.setItem("curData", JSON.stringify(data));
    display(data);
}

tShirt();



function display(data){
    let productDiv = document.getElementById("productDiv");
    productDiv.innerHTML = null;


    data.map(({id, img1, img2, img3, title, desc, price, strikePrice, off, delivery, url1, url2, url3, color})=> {
        let div = document.createElement("div");
        div.setAttribute("class", "products");

        let imgDiv = document.createElement("div");
          let imgP = document.createElement("img");
          imgP.src = img1;
        imgDiv.append(imgP);

        let titleP = document.createElement("p");
          titleP.innerText = title;
        
        let strikeDiv = document.createElement("div");
        strikeDiv.setAttribute("class", "strikePriceDiv");
        
          let priceP = document.createElement("p");
            priceP.innerText = `₹ ${price}`;
          let strikeP = document.createElement("span");
            strikeP.innerText = `₹ ${strikePrice}`;
          let offP = document.createElement("span");
            offP.innerText = `(${off}% Off)`;
        strikeDiv.append(priceP, strikeP, offP);

        let priceDiv = document.createElement("div");
        priceDiv.setAttribute("class", "priceDiv");

          let starDiv = document.createElement("div");
            let starImg = document.createElement("img");
            starImg.src = "./img/star.png";
          starDiv.append(starImg);

          let clubP = document.createElement("p");
            clubP.innerHTML = `Club Price: <span>₹ ${price - 20}</span>`;
          let symbol = document.createElement("span");
            symbol.setAttribute("class", "material-symbols-outlined");
            symbol.innerText = "chevron_right";

        priceDiv.append(starDiv, clubP, symbol);

        let p = document.createElement("p");
          p.innerText = delivery;

        let cartDiv = document.createElement("div");
          cartDiv.setAttribute("class", "cartDiv");
        
          let btnDiv = document.createElement("div");
            
            let btn1 = document.createElement("button");
              btn1.innerText = "ADD TO CART";
              btn1.onclick = ()=>{

                if(btn1.innerText == "GO TO CART"){
                    window.location.href = "../cart/cart.html";
                }
                  let obj = new dataObj(id, url1, url2, url3, img1, title, desc, price, strikePrice, delivery, color, off);
                  let cart = JSON.parse(localStorage.getItem("cart")) || [];

                  let flag = true;
                  cart.forEach((elem)=> {
                      if(elem.id == id) flag = false;
                  })

                  if(flag) {
                      cart.push(obj);
                      localStorage.setItem("cart", JSON.stringify(cart));
                  }
                  btn1.innerText = "GO TO CART";
                  updateTot();
                  // console.log(obj);
              };
            let btn2 = document.createElement("button");
              btn2.innerText = "SHORTLIST";
              btn2.onclick = ()=>{

                  let obj = new dataObj(id, url1, url2, url3, img1, title, desc, price, strikePrice, delivery, color, off);
                  let shortList = JSON.parse(localStorage.getItem("shortList")) || [];

                  let flag = true;
                  shortList.forEach((elem)=> {
                      if(elem.id == id) flag = false;
                  })

                  if(flag) {
                      shortList.push(obj);
                      localStorage.setItem("shortList", JSON.stringify(shortList));
                  }

                  // console.log(obj);
              };
          btnDiv.append(btn1, btn2);
        cartDiv.append(btnDiv);
        let _id;
        div.addEventListener("mouseenter", ()=> {
            let arr = [img1, img2, img3];
            let k = 1;
            _id = setInterval(() => {
                imgP.src = arr[k%3];
                k++;
            }, 1000);
        });

        div.addEventListener("mouseleave", ()=> {
            clearInterval(_id);
            imgP.src = img1;
        })

        div.append(imgDiv, titleP, strikeDiv, priceDiv, p, cartDiv);
        productDiv.append(div);
        
        imgDiv.onclick = ()=> {
            let obj = new dataObj(id, url1, url2, url3, img1, title, desc, price, strikePrice, delivery, color);
            localStorage.setItem("product", JSON.stringify(obj));
            window.location.href = "../details/proDetail.html";
        }
    });
}


function dataObj(id, url1, url2, url3, img1, title, desc, price, strikePrice, delivery, color, off){
    this.id = id;
    this.img1 = url1;
    this.img2 = url2;
    this.img3 = url3;
    this.cartImg = img1;
    this.title = title;
    this.desc = desc;
    this.price = price;
    this.strikePrice = strikePrice;
    this.delivery = delivery;
    this.color = color;
    this.off = off; 
}

let sort = document.getElementById("sort");
sort.onchange = ()=> {
    let val = sort.value;
    if(val == "none") display(tShirt());
    if(val == "disc"){
        let sortedData = discSort();
        display(sortedData);
    } 
    if(val == "lth"){
        let sortedData = lthSort();
        display(sortedData);
    };
    if(val == "htl"){
        let sortedData = htlSort();
        display(sortedData);
    };
    if(val == "atz"){
        let sortedData = atzSort();
        display(sortedData);
    };
    if(val == "zta"){
        let sortedData = ztaSort();
        display(sortedData);
    };
};

// SORT BY PRICE 
let pr1 = document.getElementById("pr1");
let pr2 = document.getElementById("pr2");
let pr3 = document.getElementById("pr3");
let pr4 = document.getElementById("pr4");
let pr5 = document.getElementById("pr5");

let priceArray = [pr1, pr2, pr3, pr4, pr5];

pr1.addEventListener("change", ()=> {
    disableRest(priceArray, pr1, 1);
    combine();
});
pr2.addEventListener("change", ()=> {
    disableRest(priceArray, pr2, 2);
    combine();
});
pr3.addEventListener("change", ()=> {
    disableRest(priceArray, pr3, 3);
    combine();
});
pr4.addEventListener("change", ()=> {
    disableRest(priceArray, pr4, 4);
    combine();
});
pr5.addEventListener("change", ()=> {
    disableRest(priceArray, pr5, 5);
    combine();
});

function sortPrice(pr, val, temp){
    let sortedData = temp;

    if(pr.checked == true){
    
        if(val == 1){
            sortedData = temp.filter((elem)=> {
                if(elem.price >= 0 && elem.price <250) return elem;
            });
        }
    
        if(val == 2){
            sortedData = temp.filter((elem)=> {
                if(elem.price >= 250 && elem.price <500) return elem;
            });
        }
    
        if(val == 3){
            sortedData = temp.filter((elem)=> {
                if(elem.price >= 500 && elem.price <1000) return elem;
            });
        }
    
        if(val == 4){
            sortedData = temp.filter((elem)=> {
                if(elem.price >= 1000&& elem.price <=2000) return elem;
            });
        }
    
        if(val == 5){
            sortedData = temp.filter((elem)=> {
                if(elem.price >= 2000 && elem.price <3000) return elem;
            });
        }
    }
    return sortedData;
}

// SORT BY DISCOUNT 
let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
let d4 = document.getElementById("d4");
let d5 = document.getElementById("d5");

let discountArray = [d1, d2, d3, d4, d5];

d1.addEventListener("change", ()=> {
    disableRest(discountArray, d1, 1);
    combine();
});
d2.addEventListener("change", ()=> {
    disableRest(discountArray, d2, 2);
    combine();
});
d3.addEventListener("change", ()=> {
    disableRest(discountArray, d3, 3);
    combine();
});
d4.addEventListener("change", ()=> {
    disableRest(discountArray, d4, 4);
    combine();
});
d5.addEventListener("change", ()=> {
    disableRest(discountArray, d5, 5);
    combine();
});

function sortDisc(d, val, temp){
    let sortedData = temp;
    if(d.checked == true){
    
        if(val == 1){
            sortedData = temp.filter((elem)=> {
                if(elem.off >= 0 && elem.off <10) return elem;
            });
        }
    
        if(val == 2){
            sortedData = temp.filter((elem)=> {
                if(elem.off >= 10 && elem.off <20) return elem;
            });
        }
    
        if(val == 3){
            sortedData = temp.filter((elem)=> {
                if(elem.off >= 20 && elem.off <30) return elem;
            });
        }
    
        if(val == 4){
            sortedData = temp.filter((elem)=> {
                if(elem.off >= 30 && elem.off <40) return elem;
            });
        }
    
        if(val == 5){
            sortedData = temp.filter((elem)=> {
                if(elem.off >= 40) return elem;
            });
        }
    }
    return sortedData;
}

// SORT BY COLORS
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let c5 = document.getElementById("c5");

let colorArray = [c1, c2, c3, c4, c5];

c1.addEventListener("change", ()=> {
    disableRest(colorArray, c1, 1);
    combine();
});
c2.addEventListener("change", ()=> {
    disableRest(colorArray, c2, 2);
    combine();
});
c3.addEventListener("change", ()=> {
    disableRest(colorArray, c3, 3);
    combine();
});
c4.addEventListener("change", ()=> {
    disableRest(colorArray, c4, 4);
    combine();
});
c5.addEventListener("change", ()=> {
    disableRest(colorArray, c5, 5);
    combine();
});

function sortColor(c, val, temp){

    let sortedData = temp;
    if(c.checked == true){
    
        if(val == 1){
            sortedData = temp.filter((elem)=> {
                if(elem.color == 'blue') return elem;
            });
        }
    
        if(val == 2){
            sortedData = temp.filter((elem)=> {
                if(elem.color == 'white') return elem;
            });
        }
    
        if(val == 3){
            sortedData = temp.filter((elem)=> {
                if(elem.color == 'red') return elem;
            });
        }
    
        if(val == 4){
            sortedData = temp.filter((elem)=> {
                if(elem.color == 'yellow') return elem;
            });
        }
    
        if(val == 5){
            sortedData = temp.filter((elem)=> {
                if(elem.color == 'green') return elem;
            });
        }
    }
    return sortedData;
}

// EXPERIMENT 
function combine(){
    let curData = JSON.parse(localStorage.getItem("debounce")) || JSON.parse(localStorage.getItem("tShirtData"));
    localStorage.removeItem('debounce');

    let priceArr = [pr1, pr2, pr3, pr4, pr5];
    let discountArr = [d1, d2, d3, d4, d5];
    let colorArr = [c1, c2, c3, c4, c5];

    for(let p of priceArr){
        if(p.checked == true){
            curData = sortPrice(p, p.value, curData);
        }
    }

    for(let d of discountArr){
        if(d.checked == true){
            curData = sortDisc(d, d.value, curData);
        }
    }

    for(let c of colorArr){
        if(c.checked == true){
            curData = sortColor(c, c.value, curData);
        }
    }

    sort.selectedIndex = 0;
    display(curData)
    localStorage.setItem("curData", JSON.stringify(curData));
}

function disableRest(arr, tag, val){
    for(let k of arr){
        if(k.value != val) k.checked = false;
    }
}
// EXPERIMENT 


function updateTot(){
    let productNo = JSON.parse(localStorage.getItem('cart'));
    if(productNo != null) document.getElementById('productNo').textContent = productNo.length;
    else document.getElementById('productNo').textContent = 0;
    
}

let searchBox = document.getElementById('search_box');
let searchBtn = document.getElementById('searchBtn');

searchBox.oninput = ()=> {
    debounce();
}

let id;
function debounce(){
    if(id) clearTimeout(id);
    id = setTimeout(()=> {
        let val = searchBox.value;
        let showData = JSON.parse(localStorage.getItem('tShirtData')) || [];
        
        let filteredData = showData.filter(({title})=> {
            if(title.toLowerCase().includes(val.toLowerCase())) return true;
        });

        localStorage.setItem('debounce', JSON.stringify(filteredData));
        if(filteredData.length == 0) display(showData);
        else display(filteredData);
        console.log('hai')
    }, 1000);
}

let cartBtn = document.getElementById('cartBtn');
cartBtn.onclick = ()=> {
    window.location.href = '../cart/cart.html';
}

let pinCode = document.getElementById('pinCode');
let pin = localStorage.getItem('pin') || " ";
pinCode.innerText = pin;

function findLocation(){
    let location = document.getElementById('location');
    location.innerHTML = localStorage.getItem('location') || '<i class="fa fa-location-dot"></i><span>  Select location</span>'
}
findLocation()  
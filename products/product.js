import tShirt from "./data.js";
import {discSort, lthSort, htlSort, atzSort, ztaSort} from "./utils/sort.js";

let data = tShirt();
localStorage.setItem("tShirtData", JSON.stringify(data));
localStorage.setItem("curData", JSON.stringify(data));

console.log(data);
display(data);

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

                  let obj = new dataObj(id, url1, url2, url3, img1, title, desc, price, strikePrice, delivery, color);
                  let cart = JSON.parse(localStorage.getItem("cart")) || [];

                  let flag = true;
                  cart.forEach((elem)=> {
                      if(elem.id == id) flag = false;
                  })

                  if(flag) {
                      cart.push(obj);
                      localStorage.setItem("cart", JSON.stringify(cart));
                  }
                  
                  // console.log(obj);
              };
            let btn2 = document.createElement("button");
              btn2.innerText = "SHORTLIST";
              btn2.onclick = ()=>{

                  let obj = new dataObj(id, url1, url2, url3, img1, title, desc, price, strikePrice, delivery, color);
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
            window.location.href = "details.html";
        }
    })
}

function dataObj(id, url1, url2, url3, img1, title, desc, price, strikePrice, delivery, color){
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

pr1.addEventListener("change", ()=> sortPrice(pr1, 1));
pr2.addEventListener("change", ()=> sortPrice(pr2, 2));
pr3.addEventListener("change", ()=> sortPrice(pr3, 3));
pr4.addEventListener("change", ()=> sortPrice(pr4, 4));
pr5.addEventListener("change", ()=> sortPrice(pr5, 5));

function sortPrice(pr, val){
    let arr = [pr1, pr2, pr3, pr4, pr5];
    for(let p of arr){
        if(p != pr) p.checked = false;
    }

    if(pr.checked == true){
        let temp = JSON.parse(localStorage.getItem("tShirtData"));
        let sortedData;
    
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
        // console.log(sortedData);
    
        display(sortedData)
        localStorage.setItem("curData", JSON.stringify(sortedData));
    }else display(data);
    sort.selectedIndex = 0;
}

// SORT BY DISCOUNT 
let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
let d4 = document.getElementById("d4");
let d5 = document.getElementById("d5");

d1.addEventListener("change", ()=> sortDisc(d1, 1));
d2.addEventListener("change", ()=> sortDisc(d2, 2));
d3.addEventListener("change", ()=> sortDisc(d3, 3));
d4.addEventListener("change", ()=> sortDisc(d4, 4));
d5.addEventListener("change", ()=> sortDisc(d5, 5));

function sortDisc(d, val){
  let arr = [d1, d2, d3, d4, d5];
  for(let k of arr){
      if(k != d) k.checked = false;
  }

  if(d.checked == true){
      let temp = JSON.parse(localStorage.getItem("tShirtData"));
      let sortedData;
  
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
      // console.log(sortedData);
  
      display(sortedData)
      localStorage.setItem("curData", JSON.stringify(sortedData));
  }else display(data);
  sort.selectedIndex = 0;
}

// SORT BY COLORS
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let c5 = document.getElementById("c5");

c1.addEventListener("change", ()=> sortColor(c1, 1));
c2.addEventListener("change", ()=> sortColor(c2, 2));
c3.addEventListener("change", ()=> sortColor(c3, 3));
c4.addEventListener("change", ()=> sortColor(c4, 4));
c5.addEventListener("change", ()=> sortColor(c5, 5));

function sortColor(c, val){
  let arr = [c1, c2, c3, c4, c5];
  for(let k of arr){
      if(k != c) k.checked = false;
  }

  if(c.checked == true){
      let temp = JSON.parse(localStorage.getItem("tShirtData"));
      let sortedData;
  
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
      // console.log(sortedData);
  
      display(sortedData)
      localStorage.setItem("curData", JSON.stringify(sortedData));
  }else display(data);
  sort.selectedIndex = 0;
}
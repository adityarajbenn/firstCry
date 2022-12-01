import {navbar, footer} from './components/nav.js'

document.querySelector('nav').innerHTML = navbar();


let pinCode = document.getElementById('pinCode');
pinCode.textContent = localStorage.getItem('pin') || "680712";


function display(data){

    let cartProducts = document.getElementById('cartProducts');
    cartProducts.innerHTML = null;
    console.log(data);

    let total = 0;
    let discount = 0;
    let realPrice = 0;

    data.map((elem, i)=> {
      let curTotal = elem.strikePrice * (elem.qty || 1);
      total += curTotal;

      let curReal = elem.price * (elem.qty || 1);
      realPrice += curReal;

      let curDisc = (elem.strikePrice - elem.price) * (elem.qty || 1);
      discount += curDisc;


        let productDiv = document.createElement('div');
        productDiv.setAttribute('class', 'product');

          let firstDiv = document.createElement('div');
          firstDiv.setAttribute('class', 'firstDiv');

            let div1 = document.createElement('div');
            
              let imgDiv = document.createElement('div');
              imgDiv.setAttribute('class', 'imgDiv');

                let img = document.createElement('img');
                img.src = elem.cartImg;
              imgDiv.append(img);
            div1.append(imgDiv);

            let div2 = document.createElement('div');

              let title = document.createElement('p');
              title.setAttribute('class', 'title');
                title.textContent = elem.title;
              let size = document.createElement('p');
              size.setAttribute('class', 'size');
                size.innerHTML = `Size: <span>${elem.size || "12-18M"}</span>`;
              let weight = document.createElement('p');
              weight.setAttribute('class', 'size');
                weight.textContent = `Ideal Weight (Kgs): ${elem.weight || "9.6 - 10.9"}`;
              let delivery = document.createElement('p');
              delivery.setAttribute('class', 'delivery');
                delivery.textContent = elem.delivery;
              let dispatch = document.createElement('p');
              dispatch.setAttribute('class', 'delivery');
                dispatch.textContent = 'Dispatch Within: 24 Hours';
            div2.append(title, size, weight, delivery, dispatch);

            let div3 = document.createElement('div');

              let price = document.createElement('p');
              price.setAttribute('class', 'price');
                price.textContent = `₹${elem.price *(elem.qty || 1)}`;
              let mrp = document.createElement('p');
              mrp.setAttribute('class', 'mrp');
                mrp.innerHTML = `MRP <span class="strikeSpan"> ₹${elem.strikePrice *(elem.qty || 1)} </span> <span class="percentSpan">${elem.off}% OFF</span>`;
            
              let clubPriceDiv = document.createElement('div');
                clubPriceDiv.setAttribute('class', 'clubPrice');

                  let starImgDiv = document.createElement('div');
                    let starImg = document.createElement('img');
                    starImg.src = './img/star.png';
                  starImgDiv.append(starImg);

                  let clubPriceP = document.createElement('p');
                    clubPriceP.textContent = 'Club Price : ';

                  let clubSpan = document.createElement('span');
                    clubSpan.textContent = `₹${elem.price - 20}`;
              clubPriceDiv.append(starImgDiv, clubPriceP, clubSpan);

              let taxP = document.createElement('p');
              taxP.setAttribute('class', 'taxP');
                taxP.textContent = 'MRP Includes all taxes';

              let qtyDiv = document.createElement('div');
                qtyDiv.setAttribute('class', 'qtyDiv');

                let qtyP = document.createElement('p');
                  qtyP.textContent = 'Qty: ';

                let select = document.createElement('select');
                    let op1 = document.createElement('option');
                      op1.innerText = 1;
                    let op2 = document.createElement('option');
                      op2.innerText = 2;
                    let op3 = document.createElement('option');
                      op3.innerText = 3;
                    let op4 = document.createElement('option');
                      op4.innerText = 4;
                    let op5 = document.createElement('option');
                      op5.innerText = 5;
                
                select.append(op1, op2, op3, op4, op5);
                if(elem.qty == null) elem.qty = 1;
                select.value = elem.qty;
              
                select.onchange = ()=> {
                    let val = select.value;
                    if(val == 1){
                        elem.qty = op1.innerText;
                        localStorage.setItem('cart', JSON.stringify(data));
                        display(data);
                    } 
                    if(val == 2){
                        elem.qty = op2.innerText;
                        localStorage.setItem('cart', JSON.stringify(data));
                        display(data);
                    } 
                    if(val == 3){
                        elem.qty = op3.innerText;
                        localStorage.setItem('cart', JSON.stringify(data));
                        display(data);
                    }
                    if(val == 4){
                        elem.qty = op4.innerText;
                        localStorage.setItem('cart', JSON.stringify(data));
                        display(data);
                    }
                    if(val == 5){
                        elem.qty = op5.innerText;
                        localStorage.setItem('cart', JSON.stringify(data));
                        display(data);
                    } 
                    
                }
              qtyDiv.append(qtyP, select);

            div3.append(price, mrp, clubPriceDiv, taxP, qtyDiv);

          firstDiv.append(div1, div2, div3);

          let secondDiv = document.createElement('div');
          secondDiv.setAttribute('class', 'secondDiv');

            let sDiv1 = document.createElement('div');
              let delBtn = document.createElement('button');
              delBtn.innerHTML = '<span class="material-symbols-outlined">delete</span>REMOVE';
              delBtn.onclick = ()=> {
                  data.splice(i, 1);
                  localStorage.setItem('cart', JSON.stringify(data));
                  display(data);
              }
            sDiv1.append(delBtn);
            let sDiv2 = document.createElement('div');
              let listBtn = document.createElement('button');
              listBtn.innerHTML = '<span class="material-symbols-outlined">favorite</span>MOVE TO SHORTLIST';
            sDiv2.append(listBtn);
          secondDiv.append(sDiv1, sDiv2);

          productDiv.append(firstDiv, secondDiv);
          cartProducts.append(productDiv);
    })

    document.getElementById('strikeTot').textContent = `₹${total}`;
    document.getElementById('discTot').textContent = `₹${discount}`;
    document.getElementById('subTot').textContent = `₹${realPrice + 77}`;
    document.getElementById('final').textContent = `₹${realPrice + 77}`; 
    document.getElementById('totalPrice').textContent = `₹${realPrice + 77}`; 
    document.getElementById('payTotal').textContent = `₹${realPrice + 77}`; 
    document.getElementById('noProd').textContent = data.length; 

    if(data.length == 0){
        document.getElementById('subTot').textContent = '₹0';
        document.getElementById('final').textContent = '₹0'; 
        document.getElementById('charge').textContent = '₹0'; 
        document.getElementById('gst').textContent = '₹0'; 
        document.getElementById('totalPrice').textContent = '₹0'; 
    }
    localStorage.setItem('total', (realPrice + 77));
}

let data = JSON.parse(localStorage.getItem('cart')) || [];
display(data);

let dark = document.getElementById('dark');
let payMethodDiv = document.getElementById('payMethod');
let close = document.getElementById('close');
close.onclick = ()=> {
    payMethodDiv.style = "display: none";
    dark.style = "display: none";
}

let orderBtn = document.getElementById('order');
order.onclick = ()=> {
    payMethodDiv.style = "display: block";
    dark.style = "display: block";
}

let expand = document.getElementById('expand');
let arrow = document.getElementById('arrow');
arrow.onclick = ()=> {

    if(arrow.innerText == 'expand_less'){
        arrow.innerText = 'expand_more';
        expand.style = "display: none;";
    }else{
        arrow.innerText = 'expand_less';
        expand.style = "display: block;";
    }
}


// SUGGESTION PRODUCTS

let suggestProducts = [
  {
    id: 21,
    url1: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11550559a.webp",
    url2: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11550559b.webp",
    url3: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11550559c.webp",
    img1: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/11550555a.webp",
    img2: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/11550555b.jpg",
    img3: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/11550555c.jpg",
    title: "Babyhug Full Sleeves Cotton T-Shirt Camouflage Print - Blue",
    desc: "Comfy & stylish t-shirt with round neck & rib at neck for boys",
    price: 275,
    strikePrice: 349,
    off: 21,
    delivery: "Get it by Monday, Dec 17",
    color: "blue",
  },
  {
    id: 22,
    url1: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11525689a.webp",
    url2: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11525689b.webp",
    url3: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11525689c.webp",
    img1: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/11525683a.webp",
    img2: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/11525683b.jpg",
    img3: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/11525683c.jpg",
    title: "Babyhug Full Sleeves T-Shirts Simba Print - White",
    desc: "Comfortable round neck t-shirts with shoulder buttons for boys",
    price: 394,
    strikePrice: 499,
    off: 21,
    delivery: "Get it by Tuesday, Dec 14",
    color: "white",
  },
  {
    id: 23,
    url1: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11398383a.webp",
    url2: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11398383b.webp",
    url3: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11398383c.webp",
    img1: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/11398385a.webp",
    img2: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/11398385b.jpg",
    img3: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/11398385c.jpg",
    title: "Babyhug Full Sleeves Striped Skivi Tee - Red",
    desc: "Snug turtle neck pullover style tee for boys",
    price: 394,
    strikePrice: 499,
    off: 21,
    delivery: "Get it by Tuesday, Dec 17",
    color: "red",
  },
  {
    id: 24,
    url1: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11493273a.webp",
    url2: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11493273b.webp",
    url3: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11493273c.webp",
    img1: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/11493270a.webp",
    img2: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/11756098b.jpg",
    img3: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/11493270c.jpg",
    title:
      "Pine Kids Cotton Knit Full Sleeves Racetrack Printed Biowash T Shirt - Yellow",
    desc: "Comfy round neck tshirt with rib at neck for boys",
    price: 473,
    strikePrice: 599,
    off: 21,
    delivery: "Get it by Tuesday, Dec 22",
    color: "yellow",
  }
];

displayProducts(suggestProducts);
function displayProducts(data){
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

                let obj = new dataObj(id, url1, url2, url3, img1, title, desc, price, strikePrice, delivery, color, off);
                let cart = JSON.parse(localStorage.getItem("cart")) || [];

                let flag = true;
                cart.forEach((elem)=> {
                    if(elem.id == id) flag = false;
                })

                if(flag) {
                    cart.push(obj);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    display(cart);
                }
                
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
          window.location.href = "details.html";
      }
  })
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

// COUPON 
let couponCode = document.getElementById('couponCode');
let apply = document.getElementById('apply');

apply.onclick = ()=> {
    let amount = localStorage.getItem('total');
    if(couponCode.value == 'masai30'  && amount >= 1000){
      console.log(amount)
        amount = ((amount*70) / 100).toFixed(2);
        document.getElementById('totalPrice').textContent = `₹${amount}`; 
        document.getElementById('payTotal').textContent = `₹${amount}`; 
    }
    couponCode.value = null;
}

let upiNumber = document.getElementById('upiNumber');
let payNow = document.getElementById('payNow');

payNow.onclick = ()=> {
    console.log(upiNumber.value)
    window.location.href = "./success.html";
}

let total = 0;
let discount = 0;
let realPrice = 0;

function display(data){
    let cartProducts = document.getElementById('cartProducts');
    cartProducts.innerHTML = null;
    console.log(data);
    data.map((elem)=> {

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
                size.innerHTML = 'Size: <span>12-18M</span>';
              let weight = document.createElement('p');
              weight.setAttribute('class', 'size');
                weight.textContent = 'Ideal Weight (Kgs): 9.6 - 10.9';
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

                // select.value = `${op${}.innerText}`; 
                select.onchange = ()=> {
                    console.log(select.value)
                }
              qtyDiv.append(qtyP, select);

            div3.append(price, mrp, clubPriceDiv, taxP, qtyDiv);

          firstDiv.append(div1, div2, div3);

          let secondDiv = document.createElement('div');
          secondDiv.setAttribute('class', 'secondDiv');

            let sDiv1 = document.createElement('div');
              let delBtn = document.createElement('button');
              delBtn.innerHTML = '<span class="material-symbols-outlined">delete</span>REMOVE';
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
    document.getElementById('subTot').textContent = `₹${realPrice - 77}`;
    document.getElementById('final').textContent = `₹${realPrice - 77}`; 
}

let data = JSON.parse(localStorage.getItem('cart'));
display(data);
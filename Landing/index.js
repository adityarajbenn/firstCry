
import {navbar,footer,getCart,displayData,removeData,loadEvent,navSlideIn,navSlideOut} from "./navbar.js";

//get navbar
let navbarCotainer =document.getElementById("navbar");
navbarCotainer.innerHTML=navbar();

//get footer
let navbarCotainer2 =document.getElementById("footer");
navbarCotainer2.innerHTML=footer();

//count add to cart
getCart();

loadEvent();


var productData = [
  {
    id: 1,
    image_url:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28381.webp",
    head: "And..It's A Brilliant Shot...! | Up to 12+Y",
    title: "Curated Collection For Football Fans",
  },
  {
    id: 2,
    image_url:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28345.webp",
    head: "And..It's A Brilliant Shot...! | Up to 12+Y",
    title: "Curated Collection For Football Fans",
  },
  {
    id: 3,
    image_url:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28386.webp",
    head: "The Black Friday Sale | Up to 12+Y",
    title: "Special Collection For The Season",
  },
  {
    id: 4,
    image_url:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28378.webp",
    head: "Nike + Jordan + Converse + Levi's",
    title: "Top Brands Top Offers | 4-12+Y",
  },
  {
    id: 5,
    image_url:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28398.webp",
    head: "Wedding Tales | Up to 12+Y",
    title: "Trendy Styles to flaunt this season",
  },
  {
    id: 6,
    image_url:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28392.webp",
    head: "Sweater Weather | 2 - 12+Y",
    title: "Hand Picked Winter Sweaters for Li",
  },
  {
    id: 7,
    image_url:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28388.webp",
    head: "Eco-friendly Mom Store",
    title: "Fabulous Maternity Wear for Moms",
  },
  {
    id: 8,
    image_url:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28379.webp",
    head: "Bling it on | Up to 24M",
    title: "Curated Collection of Party Dresses",
  },
  {
    id: 9,
    image_url:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28410.webp",
    head: "Pretty Dresses for your princess | 2 - 4Y",
    title: "Best of Frocks & dresses",
  },
];


displaySail()

    function displaySail(){
      productData.map(function(elem,i){
            var div = document.createElement("div")

            var image = document.createElement("img")
            image.setAttribute("src",elem.image_url)

            var headname = document.createElement("p")
            headname.innerText = elem.head;
            headname.className="head";

            var titlename = document.createElement("p")
            titlename.innerText = elem.title;
            titlename.className = "title";

            var btn = document.createElement("p")
            btn.innerText = "SHOP NOW"

            btn.addEventListener("click",function() {addtocart1(i)})

            btn.setAttribute("class","shop-now")

            var div2=document.createElement("div");
            div2.append(headname,titlename,btn)
            div2.className="content-blog";

            div.append(image,div2);

            document.getElementById("grid-block").append(div)
            div.setAttribute("class","footer-sticky")
        })
    }

    //var cartProducts = JSON.parse(localStorage.getItem("cartitem")) || []
        
    function addtocart1(index){
        // event.preventDefault()
        // alert("This Product is added to Cart");
        // localStorage.setItem("cartitem",JSON.stringify(cartProducts))
        // console.log(cartProducts)
        
    }


//Slider
    console.log("hh")
    const sliders = document.querySelectorAll(".slider");
    // interval between switching images
    // can't be less than your animation duration in css!
    const interval = 4000;
    // if you don't want to first animation last longer than other animations  
    // set animDuration (in miliseconds) to your value of animation duration in css
    const animDuration = 1000;
  
    for (let i = 0; i < sliders.length; ++i) {
      const slider = sliders[i];
      const dots = slider.querySelector(".dots");
      const sliderImgs = slider.querySelectorAll(".img");
  
      let currImg = 0;
      let prevImg = sliderImgs.length - 1;
      let intrvl;
      let timeout;
  
      // Creates dots and add listeners to them
      for (let i = 0; i < sliderImgs.length; ++i) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dots.appendChild(dot);
        dot.addEventListener("click", dotClick.bind(null, i), false);
      }
  
      const allDots = dots.querySelectorAll(".dot");
      allDots[0].classList.add("active-dot");
  
      sliderImgs[0].style.left = "0";
      timeout = setTimeout(() => {
        animateSlider();
        sliderImgs[0].style.left = "";
        intrvl = setInterval(animateSlider, interval);
      }, interval - animDuration);   
  
      /**
       * Animates images
       * @param {number} [nextImg] - index of next image to show
       * @param {boolean} [right = false] - animate to right
       */
      function animateSlider(nextImg, right) {
        if (!nextImg)
          nextImg = currImg + 1 < sliderImgs.length ? currImg + 2 : 1;
  
        --nextImg;
        sliderImgs[prevImg].style.animationName = "";
  
        if (!right) {
          sliderImgs[nextImg].style.animationName = "leftNext";
          sliderImgs[currImg].style.animationName = "leftCurr";
        } 
        else {
          sliderImgs[nextImg].style.animationName = "rightNext";
          sliderImgs[currImg].style.animationName = "rightCurr";
        }
  
        prevImg = currImg;
        currImg = nextImg;
  
        let currDot = allDots[currImg];
        currDot.classList.add("active-dot");
        let prevDot = allDots[prevImg];
        prevDot.classList.remove("active-dot");
      }
  
      /**
       * Decides if animate to left or right and highlights clicked dot
       * @param {number} num - index of clicked dot
       */
      function dotClick(num) {
        if (num == currImg)
          return false;
  
        clearTimeout(timeout);
        clearInterval(intrvl);
  
        if (num > currImg)
          animateSlider(num + 1);
        else
          animateSlider(num + 1, true);
  
        intrvl = setInterval(animateSlider, interval);
      }
    }
  
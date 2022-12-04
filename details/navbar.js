let navbar = () =>{
    return ` <div id="logo-container">
    <div class="logo_head">
    <div class="fc_logo">
        <a href="../index.html"><img class="header_logo" src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" alt="logoimg"></a>
    </div>
    <div class="fc_search">
        <form class="headSearchBox">
            <input type="text" name="" id="search_box" placeholder="Search for a Category, Brand or Product">
            <span class="search-button"><i class="fa fa-magnifying-glass"></i></span>
        </form>
    </div>
    <div class="fc_login">
       <ul>
        <li><i class="fa fa-location-dot"></i><span>  Select location</span></li>
        <li><span>Stores & Preschools</span></li>
        <li><span>Support</span></li>
        <li><span>Track Order</span></li>
        <li><span>FirstCry Parenting</span></li>
        <li><span>Login /</span><span> Register</span></li>
        <li><i class="fa-regular fa-heart"></i><span>  Shortlist</span></li>
        <li class="midicon"><i class="fa-solid fa-cart-shopping"></i></i><span id="cart_c"></span></li>
       </ul>
    </div>
    </div>
    </div>
    <div class="menu-container">
                  <!-- <button onclick="navSlideOut()" id="nav-btn">
                    <div id="nav-icon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                   </button> -->
        <ul id="navlink">
        <!-- <li class="homesymbol"> 
            <button id="homePage" onclick= window.location.href="index.html" ><i class="fas fa-home"></i>
            </button>
            <button id="nav-close" onclick="navSlideIn()" >   <i class="fas fa-times"></i> </button>
            </li> -->
            <li class="M14_42 mouse"><a href=""> All Categories<span><i class="fa fa-angle-down"></i></span></a></li>
            <li class="M14_42 mouse"><a href="../details/proDetail.html"> BOY FASHION</a></li>
            <li class="M14_42 mouse"><a href=""> GIRL FASHION</a></li>
            <li class="M14_42 mouse"><a href=""> Footwear</a></li>
            <li class="M14_42 mouse"><a href=""> Toys</a></li>
            <li class="M14_42 mouse"><a href=""> Diapering</a></li>
            <li class="M14_42 mouse"><a href=""> Gear</a></li>
            <li class="M14_42 mouse"><a href=""> Feeding</a></li>
            <li class="M14_42 mouse"><a href=""> Bath</a></li>
            <li class="M14_42 mouse"><a href=""> Nursery</a></li>
            <li class="M14_42 mouse"><a href=""> Moms</a></li>
            <li class="M14_42 mouse"><a href=""> Health</a></li>
            <li class="M14_42 mouse"><a href=""> Boutiques</a></li>
            <li class="M14_42"><a href=""><img src="https://cdn.fcglcdn.com/brainbees/images/n/club_logo.png"></a></li>
            <li class="M14_42 carters"><a href=""><img src="https://cdn.fcglcdn.com/brainbees/banners/FC-menu-carters-logo.webp"></a></li>
        </ul>
    </div>
    <div class="curser">
        <div class="all-category-container">
          <ul class="optionav lft">
            <li class="allcat">ALL CATEGORIES</li>
            <li class="allcat"><a href="">BOY FASHION</a></li>
            <li class="allcat"><a href="">GIRL FASHION</a></li>
            <li class="allcat"><a href="">FOOTWEAR</a></li>
            <li class="allcat"><a href="">TOYS</a></li>
            <li class="allcat"><a href="">DIAPERING</a></li>
            <li class="allcat"><a href="">GEAR</a></li>
            <li class="allcat"><a href="">FEEDING</a></li>
            <li class="allcat"><a href="">BATH </a></li>
            <li class="allcat"><a href="">MOMS</a></li>
            <li class="allcat"><a href="">HEALTH & SAFETY</a></li>
            <li class="allcat"><a href="">BOUTIQUES</a></li>
            <li class="allcat"><a href="">WOMEN'S BEAUTY & CARE</a></li>
            <li class="allcat"><a href="">BIRTHDAYS & GIFTS</a></li>
            <li class="allcat"><a href="">BOOKS & CD'S</a></li>
            <li class="allcat"><a href="">SCHOOL SUPPLIES</a></li>
            <li class="allcat"><a href="">OFFERS</a></li>
          </ul>
        </div>
        <div class="all-category-container1">
          <div class="options">
            <ul>
              <li class="hactive" id="allsubmenu1-1"><a class="M14_75" href="">All </a></li>
            </ul>
            <div class="option-container submenu1-1">
              <ul class="col-one">
                <li class="shopchoic spacedown "><a href="" class="B14_42">Shop By Category</a></li>
                <li class="shop_text"><a href="" class="M13_75">Sets & Suits</a></li>
                <li><a href="../details/proDetail.html" class="M13_75">T-shirts</a></li>
                <li><a href="" class="M13_75">Shirts</a></li>
                <li><a href="" class="M13_75">Jeans & Trousers</a></li>
                <li><a href="" class="M13_75">Sweatshirts</a><span class="new"> NEW</span></li>
                <li><a href="" class="M13_75">Jackets</a><span class="new"> NEW</span></li>
                <li><a href="" class="M13_75">Sweaters</a><span class="new"> NEW</span></li>
                <li><a href="" class="M13_75">Thermals</a><span class="new"> NEW</span></li>
                <li><a href="" class="M13_75">Ethnic Wear</a></li>
                <li><a href="" class="M13_75">Party Wear</a><span class="new"> NEW</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="all-category-container2">
        <div class="options2">
          <ul>
            <li class="hactive" id="allsubmenu1-1"><a class="M14_75" href=""></a></li>
          </ul>
          <div class="option-container submenu1-1">
            <ul class="col-one">
              <li class="shopchoic spacedown "><a href="" class="B14_42">SHOP BY COLLECTION</a></li>
              <li class="shop_text"><a href="" class="M13_75">Winter Wonderland</a></li>
              <li><a href="" class="M13_75">Bestsellers</a></li>
              <li><a href="" class="M13_75">Multi-packs</a></li>
              <li class="vborder"><a href="" class="M13_75">Baby Essentials</a></li>
              <li class="shopchoic spacedown "><a href="" class="B14_42">FASHION ACCESSORIES</a></li>
              <li class="shop_text"><a href="" class="M13_75">Woollen Caps & Monkey Caps</a></li>
              <li><a href="" class="M13_75">Gloves</a></li>
              <li><a href="" class="M13_75">Mittens & Booties</a></li>
              <li><a href="" class="M13_75">Ear Muffs, Mufflers & Scarves </a></li>
              <li><a href="" class="M13_75">Sunglasses</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="all-category-container3">
        <div class="options2">
          <ul>
            <li class="hactive" id="allsubmenu1-1"><a class="M14_75" href=""></a></li>
          </ul>
          <div class="option-container submenu1-1">
            <ul class="col-one">
              <li class="shopchoic spacedown "><a href="" class="B14_42">SHOP BY AGE</a></li>
              <li class="shop_text"><a href="" class="M13_75">Preemie/Tine Preemie</a></li>
              <li><a href="" class="M13_75">New Born (0-3 M)</a></li>
              <li><a href="" class="M13_75">3-6 Months</a></li>
              <li><a href="" class="M13_75">6-9 Months</a></li>
              <li><a href="" class="M13_75">9-12 Months</a></li>
              <li><a href="" class="M13_75">12-18 Months</a></li>
              <li><a href="" class="M13_75">18-24 Months</a></li>
              <li><a href="" class="M13_75">2 to 4 Years</a></li>
              <li><a href="" class="M13_75">4 to 6 Years</a></li>
              <li><a href="" class="M13_75">6 to 8 Years</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="all-category-container4">
        <div class="options2">
          <img src="https://cdn.fcglcdn.com/brainbees/images/n/desktop_drop_down_boy_winter_271022.jpg" alt="">
        </div>
      </div>
    </div>`
}



let footer = () =>{
   return `<div class="footer-rtb">
   <div class="tic">
     <div class="footer_kid_store sprite_footer_bg1"></div>
   </div>
   <div class="rtb-container liquid_header_main">
     <div class="rtb-img">
       <div class="footer_products_info1 sprite_footer_bg"></div>
       <span>2 Lakhs + <br> Unique Products</span>
     </div>
     <div class="rtb-img">
       <div class="footer_products_Brands sprite_footer_bg"></div>
       <span>5800 Brands<br> Unique Products</span>
     </div>
     <div class="rtb-img">
       <div class="footer_products_Customers sprite_footer_bg"></div>
       <span class="fc_foot">7.5 Million <br> Registered Users</span>
     </div>
     <div class="rtb-img">
       <div class="footer_products_Return sprite_footer_bg"></div>
       <span class="fc_foot">Easy Return, Replacement<br> & Exchange Policy</span>
     </div>
     <div class="rtb-img">
       <div class="footer_products_Shipping sprite_footer_bg"></div>
       <span class="fc_foot">Easy Return, Replacement<br> & Exchange Policy</span>
     </div>
   </div>
 </div>
   <div class="fc-footer">
   <div class="fctr liquid_header_main">
   <div class="lcfs link flink1">
     <div class="hdr">CATEGORIES</div>
     <div class="lcr cnt">
       <span><a href="">Clothing & Fashion</a></span>
       <span><a href="">Toys</a></span>
       <span><a href="">Books & CDs</a></span>
       <span><a href="">School Supplies</a></span>
       <span><a href="">Birthday Party Supplies</a></span>
       <span><a href="">Baby Diapering</a></span>
       <span><a href="">Feeding & Nursing</a></span>
       <span><a href="">Bath & Skin Care</a></span>
       <span><a href="">Health & Safety</a></span>
       <span><a href="">Baby Gear</a></span>
       <span><a href="">Nursery</a></span>
       <span><a href="">Moms & Maternity</a></span>
       <span><a href="">Gifts</a></span>
       <span><a href="">Preschool Admissions</a></span>
     </div>
     <div class="hdr">COMPANY INFO</div>
     <div class="lcr cnt">
       <span><a href="">About Us</a></span>
       <span><a href="">Contact Us</a></span>
       <span><a href="">Brands</a></span>
       <span><a href="">F.A.Q.s</a></span>
       <span><a href="">FirstCry Stores & Playschool</a></span>
       </div>
   </div>
   <div class="lcs link flink2">
        <div class="hdr">FIRSTCRY PARENTING</div>
        <div class="lcr cnt">
          <span><a href="">Getting Pregnant </a></span>
          <span><a href="">Pregnancy </a></span>
          <span><a href="">Baby </a></span>
          <span><a href="">Toddler </a></span>
          <span><a href="">Preschooler</a></span>
          <span><a href="">Big Kid</a></span>
          <span><a href="">Vaccination</a></span>
          <span><a href="">Growth Tracker</a></span>
          <span><a href="">Baby Names</a></span>
          <span><a href="">FirstCry Parenting YouTube </a></span>
          <span><a href="">Coloring Pages </a></span>
        </div>
        <div class="lcr cnt">
          <div class="hdr">REGIONAL PARENTING</div>
          <span><a href="">FirstCry Hindi Parenting </a></span>
          <span><a href="">FirstCry Marathi Parenting </a></span>
          <span><a href="">FirstCry Bangla Parenting </a></span>
          <span><a href="">FirstCry Arabia Parenting </a></span>
          <span><a href="">FirstCry UAE Parenting</a></span>
          </div>
        <div class="lcr cnt">
          <div class="hdr">OUR OTHER WEBSITES</div>
          <span><a href="">GlobalBees Shopping</a></span>
        </div>
      </div>
      <div class="lcr-third link flink3">
        <div class="hdr">SHIPPING & POLICIES</div>
        <div class="lcr cnt">
          <span><a href="">Payments</a></span>
          <span><a href="">Shipping Policy </a></span>
          <span><a href="">Return & Replacement Policy </a></span>
          <span><a href="">Cancellation Policy </a></span>
          <span><a href="">Terms of Use</a></span>
          <span><a href="">Privacy Policy</a></span>
          <span><a href="">Next day & Same day delivery</a></span>
          <span><a href="">Responsible Disclosure</a></span>
        </div>
        <div class="hdr">PAYMENT METHOD</div>
        <div class="lcr cnt">
          <span class="nhv">Credit Cards</span>
          <span class="nhv">Net Banking</span>
          <span class="nhv">ATM & Debit Cards</span>
          <span class="nhv">COD(Cash on Delivery)</span>
          <span class="nhv">Easy EMI</span>
          </div>
          <div class="hdr">CONNECT WITH US</div>
          <div id="socialicons">
            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
            <a href=""><i class="fa-brands fa-pinterest-p"></i></a>
            <a href=""><i class="fa-brands fa-youtube"></i></a>
        </div>
        <div class="lcr cnt gcnew">
        <span><a href="">Testimonials</a></span>
        <div class="sitemap">
          <a href="">SITEMAP</a>
        </div>
        <div class="sitemap"><a href="">LOYALTY CASH</a></div>
      </div>
  </div>
  <div class="link flink4">
    <div class="hdr">OUR APPS</div>
    <div class="lcr cnt">
      <span><a href="">FirstCry India: Shopping & Parenting</a></span>
      <span><a href="">FirstCry India: Shopping & Parenting iOS</a></span>
    </div>
    <div class="hdr">Learning & Education</div>
    <div class="lcr cnt">
      <span><a href="">Intellikits </a></span>
      <span><a href="">Intellitots</a></span>
    </div>
    <div class="hdr">SHOP INTERNATIONAL</div>
    <div class="lcr cnt">
      <span><a href="">FirstCry UAE</a></span>
      <span><a href="">FirstCry KSA</a></span>
      <span><a href="">FirstCry KSA (English)</a></span>
      <span><a href="">FirstCry Arabia: Shopping & Parenting</a></span>
      <span><a href="">FirstCry Arabia: Shopping & Parenting iOS</a></span>
    </div>
    <div class="hdr">KIDS LEARNING & EDUCATIONAL APPS</div>
        <div class="lcr cnt">
          <span><a href="">PlayBees: Kids Learning & Education App</a></span>
          <span><a href="">PlayBees: 123 Kids Numbers App</a></span>
          <span><a href="">PlayBees: ABC for Kids</a></span>
        </div>
        <div class="hdr">CAREER AT FIRSTCRY.COM</div>
        <div class="lcr cnt">
          <span><a href="">Current Openings at  FirstCry.com</a></span>
        </div>
      </div>

      <div>
                <div class="frace">
                <div class="house_img_footer sprite_footer_bg_fc"></div>
                <div class="frat">
                  <div class="text">BECOME OUR <br> FRANCHISE STORE</div>
                  <div class="know-more">
                    <input type="button" value="KNOW MORE">
                  </div>
                </div>
              </div>
              <div class="frace">
                <a><img src="https://cdn.fcglcdn.com/brainbees/images/intellitots-franchise-footer-banner.webp" alt=""></a>
              </div>
      </div>

      
    </div>
    </div>`
}




export {navbar, footer};
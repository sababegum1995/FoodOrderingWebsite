import bgimg from '../assets/Pictures/bg-header.png'
import logo from '../assets/Pictures/logo.png'
import leaf from '../assets/Pictures/section-2.png'
import dishes1 from '../assets/Pictures/special-dishes-1.png'
import dishes2 from '../assets/Pictures/special-dishes-2.jpg'
import dishes3 from '../assets/Pictures/special-dishes-3.jpg'
import dishes4 from '../assets/Pictures/special-dishes-4.jpg'
import dishes5 from '../assets/Pictures/special-dishes-5.png'
import dishes6 from '../assets/Pictures/special-dishes-6.jpg'
import dishes7 from '../assets/Pictures/product-1.jpg'
import dishes8 from '../assets/Pictures/product-8.jpg'
import about from '../assets/Pictures/section-3about-big.jpg'
import advantage1 from '../assets/Pictures/section3-1.png'
import advantage2 from '../assets/Pictures/section3-2.png'
import advantage3 from '../assets/Pictures/section3-3.png'
import section4 from '../assets/Pictures/section4-bg-offer.png'
import chef1 from '../assets/Pictures/chef-1.jpg'
import chef2 from '../assets/Pictures/chef-2.jpg'
import chef3 from '../assets/Pictures/chef-3.jpg'
import chef4 from '../assets/Pictures/chef-4.jpg'
import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import {Route, Routes, Link} from 'react-router-dom'
// import Carousel from 'react-grid-carousel'
import './style.css' 



function Main(){
   
    
        const scrollToSection = (sectionId) => {
          const section = document.getElementById(sectionId);
          section.scrollIntoView({ behavior: "smooth" });
        };
          
            
    
return(
    <>
    
    <img className="bg-img" src={bgimg} alt="bg-image"/>
    <div className='heading1'>
    <img className="logo" src={logo} alt="logo"/>
    <nav className='heading text-light fs-4 fw-bold flex'>
        <p onClick={() => scrollToSection("section1")}>HOME</p>
        <p onClick={() => scrollToSection("section2")}>ABOUTUS</p>
        <p onClick={() => scrollToSection("section3")}>CHEFS</p>
        <p onClick={() => scrollToSection("section4")}>MENU</p>
        <p onClick={() => scrollToSection("section5")}>CONTACTS</p>    
     </nav>
     </div>
     <div className='title text-light display-1 fs-2 fw-bolder' id="section1">
        <h1>BEST QUALITY FOOD</h1>
        <p className='para fs-5 fw-lighter mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio vitae rem corrupti distinctio quia, pariatur illo commodi? Natus, maxime tenetur vel dolorem dolor officiis repellat qui cum consequatur, libero magnam.</p>
     <p className='table-booking fw-bold fs-4 text-dark pt-2 mt-2'>BOOK A TABLE</p>
     <div className='section-2'>
     <div className='section-2-para'>
        <img className="leaf" src={leaf} alt="leaf"/>
        <h2 className='text-light fw-bolder mt-2'>OUR SPECIAL DISHES</h2>
        </div>
        <p className='para1 fs-5 fw-lighter'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio vitae rem corrupti distinctio quia, pariatur illo commodi? Natus, maxime tenetur vel.</p>
        </div>
        </div>
        {/* <div className='special-img'> */}
        <Carousel className='special-img' cols={3} rows={1} gap={2} loop>
      <Carousel.Item>
        <div>
        <img className='special-image' src={dishes1}  alt="dish1"/>
        <img className='special-image1' src={dishes2}  alt="dish1"/>
        <img className='special-image1' src={dishes3}  alt="dish1"/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div>
      <img className='special-image1' src={dishes4}  alt="dish1"/>
      <img className='special-image1' src={dishes5}  alt="dish1"/>
      <img className='special-image1' src={dishes6}  alt="dish1"/>
      </div>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img  src={dishes3} alt="dish1"/>
      </Carousel.Item> */}
      {/* <Carousel.Item>
      <img  src={dishes4} alt="dish1"/>
      </Carousel.Item> */}
      {/* ... */}
    </Carousel> 
    <div className='section-3'>
    <img className="about-img" src={about} alt="about"/>
    <div className='section-2-para '>
        <img className="leaf mt-4 leaf-3" src={leaf} alt="leaf"/>
        <h2 className='text-light fw-bolder display-6 width  mt-2' id="section2">GOOD FOOD FOR YOUR ALL DAY GOOD MOOD</h2>
        </div>
        <p className='text-light para-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquam iste, odio quia quas quos atque modi aspernatur amet, unde aliquid temporibus doloribus excepturi ut sed rem laborum eius nemo?</p>
        <p className='text-light para-3 para-3-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquam iste, odio quia quas quos atque modi aspernatur amet, unde aliquid temporibus doloribus excepturi ut sed rem laborum eius nemo?</p>
        <p className='text-light para-3 para-3-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquam iste, odio quia quas quos atque modi aspernatur amet, unde aliquid temporibus doloribus excepturi ut sed rem laborum eius nemo?</p>
    <div className='advantage'>
        <div className='gap '>
    <img className='ms-5'  src={advantage1} alt="advantage"/>
    </div>
    <div className='gap1'>
    <img src={advantage2} alt="advantage"/>
    </div>
    <div className='gap2'>
    <img src={advantage3} alt="advantage"/>
    </div>
    <div className='flex-action'>
    <p className='text-light fw-bolder me-3'>EXPERIENCED CHEFS</p>
    <p className='text-light fw-bolder'>ORIGINAL RECIPES</p>
    <p className='text-light fw-bolder'>FRESH INGREDIENTS</p>
    </div>
    </div>
    </div>
    {/* <div className='section-4'> */}
        <img className='section-4' src={section4} alt=""/>
    <div className='title-4 text-light display-1 fw-bolder '>
        <h1>DOUBLE CHEESE PIZZA 30% OFF FRIDAY ONLY</h1>
       <p className='table-booking fw-bold fs-4 text-dark pt-2 mt-5 ms-5'>BOOK A TABLE</p>
    </div>
    <div className='section-5 '>
     <div className='section-2-para left-new1'>
        <img className="leaf left" src={leaf} alt="leaf"/>
        <h2 className='text-light fw-bolder mt-2' id="section3">OUR BEST CHEF</h2>
        </div>
        <p className='para1 fs-5 fw-lighter text-light '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio vitae rem corrupti distinctio quia, pariatur illo commodi? Natus, maxime tenetur vel.</p>
      <div className='flex-action chef'>
        <img src={chef1} alt=""/>
        <img src={chef2} alt=""/>
        <img src={chef3} alt=""/>
        <img src={chef4} alt=""/>
        <div className='flex-action chef1 '>
    <p className='text-light fw-bolder '>RICHARD NAUZ</p>
    <p className='text-light fw-bolder '>OLIVIA GROSH</p>
    <p className='text-light fw-bolder'>JEREMY WHITE</p>
    <p className='text-light fw-bolder'>HOWARD HOLMES</p>
    </div>
      </div>
        </div>
        <div className='section-6'>
        <div className='section-2-para left-new '>
        <img className="leaf mt-4 leaf-3" src={leaf} alt="leaf"/>
        <h2 className='text-light fw-bolder display-6  mt-4' id="section4">OUR MENU</h2>
        <img className='menu-image  menu'  src={dishes1}  alt="dish1"/>
        <img className='special-image1 menu1'  src={dishes2}  alt="dish1"/>
        <img className='special-image1 menu2' src={dishes3}  alt="dish1"/>
        <img className='special-image1 menu3' src={dishes6}  alt="dish1"/>
        <div className='flex-action'>
        <div className='card-new'>
            <h5 className='text-light fw-bolder'>DOUBLE MAC BURGER</h5>
            <p className='text-light fw-bolder'>Lorem ipsum dolor sit, amet consectetur adipisicing, elit.</p>
            <p className='text-light fw-bolder'>$13.80</p>
            </div>
        <div className='card-new1'>
            <h5 className='text-light fw-bolder'>PASTA</h5>
            <p className='text-light fw-bolder'>Lorem ipsum dolor sit, amet consectetur adipisicing, elit.</p>
            <p className='text-light fw-bolder'>$16.99</p>
            </div>
            <div className='card-new1'>
            <h5 className='text-light fw-bolder'>BEEF CHEESE BURGER</h5>
            <p className='text-light fw-bolder'>Lorem ipsum dolor sit, amet consectetur adipisicing, elit.</p>
            <p className='text-light fw-bolder'>$11.50</p>
            </div>
            <div className='card-new1'>
            <h5 className='text-light fw-bolder'>SEAFOOD</h5>
            <p className='text-light fw-bolder'>Lorem ipsum dolor sit, amet consectetur adipisicing, elit.</p>
            <p className='text-light fw-bolder'>$23.99</p>
            </div>
        </div>
        </div>
        <img className='menu-image menu second-section' src={dishes4}  alt="dish1"/>
        <img className='special-image1 menu1 second-section1' src={dishes5}  alt="dish1"/>
        <img className='special-image1 menu2 second-section2' src={dishes7}  alt="dish1"/>
        <img className='special-image1 menu3 second-section3' src={dishes8}  alt="dish1"/>
        <div className='flex-action'>
        <div className='card-new-2'>
            <h5 className='text-light fw-bolder'>GRAND ITALIANO PIZZA</h5>
            <p className='text-light fw-bolder'>Lorem ipsum dolor sit, amet consectetur adipisicing, elit.</p>
            <p className='text-light fw-bolder'>$21.30</p>
            </div>
        <div className='card-new2'>
            <h5 className='text-light fw-bolder'>SALAD</h5>
            <p className='text-light fw-bolder'>Lorem ipsum dolor sit, amet consectetur adipisicing, elit.</p>
            <p className='text-light fw-bolder'>$26.99</p>
            </div>
            <div className='card-new2'>
            <h5 className='text-light fw-bolder'>DOUBLE CHEESE PIZZA</h5>
            <p className='text-light fw-bolder'>Lorem ipsum dolor sit, amet consectetur adipisicing, elit.</p>
            <p className='text-light fw-bolder'>$15.50</p>
            </div>
            <div className='card-new2'>
            <h5 className='text-light fw-bolder'>CHICKEN BURGER</h5>
            <p className='text-light fw-bolder'>Lorem ipsum dolor sit, amet consectetur adipisicing, elit.</p>
            <p className='text-light fw-bolder'>$14.35</p>
            </div>
        </div>
        </div>
        <div className='section-7'>
        <form class="row g-3 needs-validation width-new ms-5 mt-5" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label color" >First name</label>
    <input type="text" class="form-control" id="validationCustom01" placeholder="First-Name" required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label color">Last name</label>
    <input type="text" class="form-control " id="validationCustom02" placeholder="Last-Name" required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label color">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder='Enter your mail id' required />
      <div class="invalid-feedback">
        Please enter a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label color">Phone</label>
    <input type="text" class="form-control" placeholder='Enter your phone number' id="validationCustom03" required />
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label color">Date</label>
    <input class="form-select" type="datetime-local" id="validationCustom04" required />
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label color">Time</label>
    <input type="text" class="form-control" type="time" id="validationCustom05" required />
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check ">
      <input class="form-check-input " type="checkbox" value="" id="invalidCheck" required />
      <label class="form-check-label right  color" for="invalidCheck">
      Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12 w-5">
    <button class="btn right btn-warning p-2"  onClick={myFunction} type="submit">BOOK A TABLE</button>
  <h4 className='text-light' id="demo"></h4>
  </div>
</form>
<div className='right-section'>
<h2 className='text-light fw-bolder mt-5 align ms-5'>OPENING HOURS</h2>
<p className='text-light mt-5 align ms-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos impedit voluptates eaque atque. Quod fuga necessitatibus laborum quo laboriosam labore soluta, eos natus, porro, repellendus iusto sapiente aspernatur praesentium?</p>
<div className='flex-row mt-5'>
    <p className='text-light fw-bolder mt-5 '>Monday - Friday</p>
    <p className='text-light fw-bolder mt-5  left'>8AM - 6PM</p>
</div>
<div className='flex-row mt-1'>
    <p className='text-light fw-bolder mt-5'>Monday - Friday</p>
    <p className='text-light fw-bolder mt-5  left'>8AM - 6PM</p>
</div>
<div className='flex-row mt-1'>
    <p className='text-light fw-bolder mt-5'>Monday - Friday</p>
    <p className='text-light fw-bolder mt-5  left'>8AM - 6PM</p>
</div>
</div>
        </div>
<div className='section-8'>
<div className='section-2-para new' id="section5">
        <img className="leaf  ms-5 mt-1 leaf-3" src={leaf} alt="leaf"/>
        <h2 className='text-light fw-bolder display-6  mt-1  '>CONTACTS</h2>
        <div className=' flex-action'>
            <h3 className='text-light  right-new top'>LOCATION</h3>
            <p className='top2 '>2900 Lapeer Rd, Port Hurons</p>
            <h3 className='text-light  left1 me-5 top'>PHONE</h3>
            <p className='top2'>123456789</p>
            <h3 className='text-light left1 top'>EMAIL</h3>
            <p className='top2'>info@restfood.com</p>

        </div>
        </div>
</div>
    </>
)
}


export default Main;
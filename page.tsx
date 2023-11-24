"use client"
import React from "react"
import Head from "next/head"
import Link from "next/link"
function Home(){
  return(
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Xplore Skill - Sagar Developer</title>
  <link rel="stylesheet" href="style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
  />
<>
  {/* Created BY - Sagar Developer */}
  <section className="header">
    <nav>
      <a href="index.html" className="logo">
        Xplore
        <i className="fab fa-staylinked" />
        kill
      </a>
      <div className="nav-links" id="navLinks">
        {/* Reposnive bar open and close */}
        <i className="fa fa-times" onClick={()=>{}} />

        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/course">Course</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <i className="fa fa-times" onClick={()=>{}} />

      {/* Reposnive bar open and close */}
    </nav>
    <div className="text_box">
      <h2>GET READY</h2>
      <p id="headtext">TO DISCOVER CAMPUS</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
        consequuntur corrupti sapiente aut porro
        <br /> esse blanditiis in quae perspiciatis quo.
      </p>
      <a href="#" className="hero_btn">
        Visit Us To Know More
      </a>
    </div>
  </section>
  {/* Course Section Start */}
  <section className="course">
    <div className="PageBlock">
      <div className="verticalLine" />
      <div className="Clear" />
    </div>
    <h1>
      EXPLORE OUR 60+ <br /> MAJOR PROGRAMS
    </h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <div className="row">
      <div className="course-col">
        <h3>Undergraduate Programs</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          dolor corporis, commodi nihil quas soluta labore quisquam impedi
          distinctio explicabo aut minima quos pariatur unde aliquam earum
          laborum velit non.
        </p>
      </div>
      <div className="course-col">
        <h3>Graduate Programs</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          dolor corporis, commodi nihil quas soluta labore quisquam impedit
          distinctio explicabo aut minima quos pariatur unde aliquam earum
          laborum velit non.
        </p>
      </div>
      <div className="course-col">
        <h3>Adult Learning &amp; Degree Completion</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          dolor corporis, commodi nihil quas soluta labore quisquam impedit
          distinctio explicabo aut minima quos pariatur unde aliquam earum
          laborum velit non.
        </p>
      </div>
    </div>
  </section>
  {/* Course Section End */}
  {/* Campus Section Start*/}
  <section className="campus">
    <div className="PageBlock">
      <div className="verticalLine" />
      <div className="Clear" />
    </div>
    <h1>TAKE OUR VIRTUAL TOUR</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <div className="row">
      <div className="campus-col">
        <img src="img/Campus1.png" alt="" />
        <div className="layer">
          <h3>DELHI</h3>
        </div>
      </div>
      <div className="campus-col">
        <img src="img/Campus2.png" alt="" />
        <div className="layer">
          <h3>HYDERABAD</h3>
        </div>
      </div>
      <div className="campus-col">
        <img src="img/Campus3.png" alt="" />
        <div className="layer">
          <h3>MUMBAI</h3>
        </div>
      </div>
    </div>
  </section>
  {/* Campus Section End */}
  {/* Facilities Section Start */}
  <section className="facilities">
    <div className="PageBlock">
      <div className="verticalLine" />
      <div className="Clear" />
    </div>
    <h1>Our Facilities</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <div className="row">
      <div className="facilities-col">
        <img src="img/libary.png" alt="" />
        <h3>Best Libary</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          omnis asperiores atque aperiam.
        </p>
      </div>
      <div className="facilities-col">
        <img src="img/playground.png" alt="" />
        <h3>Athletics</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          omnis asperiores atque aperiam.
        </p>
      </div>
      <div className="facilities-col">
        <img src="img/food.png" alt="" />
        <h3>Tasty and Healthy Food</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          omnis asperiores atque aperiam.
        </p>
      </div>
    </div>
  </section>
  {/* Facilities Section End */}
  {/* Testimonials Section Start */}
  <section className="testimonials">
    <div className="PageBlock">
      <div className="verticalLine" />
      <div className="Clear" />
    </div>
    <h1>What Our Student Says</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <div className="row">
      <div className="testimonials-col">
        <img src="img/user.png" alt="oo.." />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            maiores in nostrum rerum voluptatem praesentium veritatis alias
            omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
            deserunt. In quia repellat maxime.
          </p>
          <h3>Student Name</h3>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      </div>
      <div className="testimonials-col">
        <img src="img/user.png" alt="oo.." />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            maiores in nostrum rerum voluptatem praesentium veritatis alias
            omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
            deserunt. In quia repellat maxime.
          </p>
          <h3>Student Name</h3>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star-half-alt" />
        </div>
      </div>
    </div>
  </section>
  {/* Testimonials Section End */}
  {/* Call To Action Section Start */}
  <section className="cta">
    <h1>GET READY FOR A BRIGHT FUTURE</h1>
    <a href="contact.html" className="hero_btn">
      CONTACT US
    </a>
  </section>
  {/* Call To Action Section End */}
  {/* Footer Section Start */}
  <section className="footer">
    <hr />
    <h4>About Us</h4>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
      incidunt odio nam facilis, eligendi Itaque fugiat cupiditate consectetur.
      Aliquid ab deserunt exercitationem, illum molestiae dolorem.
    </p>
    <div className="icons">
      <i className="fab fa-facebook-f" />
      <i className="fab fa-instagram" />
      <i className="fab fa-twitter" />
      <i className="fab fa-linkedin" />
    </div>
    <p>
      Made with <i className="fas fa-heart" /> by{" "}
      <a href="index.html">Sagar Developer</a>
    </p>
    <p>
      Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights
      Reserved
    </p>
  </section>
  {/* Footer Section End */}
</>

</>

  )
}
    

  export default Home
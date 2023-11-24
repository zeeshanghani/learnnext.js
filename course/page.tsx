"use client"
import React from "react"
import Head from "next/head"
import Link from "next/link"
function Course(){
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
  <section className="Sub-header">
    <nav>
      <a href="index.html" className="logo">
        Xplore
        <i className="fab fa-staylinked" />
        kill
      </a>
      <div className="nav-links" id="navLinks">
        {/* reposnive bar open and close */}
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

      {/* reposnive bar open and close */}
    </nav>
    <h1>Our Courses</h1>
  </section>
  {/* course start */}
  <section className="course">
    <h1>Course We Offer</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <div className="row">
      <div className="course-col">
        <h3>Undergraduate Programs</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          dolor corporis, commodi nihil quas soluta labore quisquam impedit
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
  {/* course end */}
  {/* best course start */}
  <section className="facilities">
    <h1>Best Courses</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <div className="row">
      <div className="facilities-col">
        <img src="img/course1.png" alt="" />
        <h3>Web Development</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          omnis asperiores atque aperiam.
        </p>
      </div>
      <div className="facilities-col">
        <img src="img/course2.png" alt="" />
        <h3>Artificial Intelligence</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          omnis asperiores atque aperiam.
        </p>
      </div>
      <div className="facilities-col">
        <img src="img/course3.png" alt="" />
        <h3>Data Science</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          omnis asperiores atque aperiam.
        </p>
      </div>
    </div>
  </section>
  {/* best courses end */}
  {/* Footer start */}
  <section className="footer">
    <hr />
    <h4>About Us</h4>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
      incidunt odio nam facilis, eligendi
      <br /> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt
      exercitationem, illum molestiae dolorem.
    </p>
    <div className="icons">
      <i className="fab fa-facebook-f" />
      <i className="fab fa-instagram" />
      <i className="fab fa-twitter" />
      <i className="fab fa-linkedin" />
    </div>
    <p>
      Made with <i className="fas fa-heart" /> by{" "}
      <a href="#">Sagar Developer</a>
    </p>
    <p>
      Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights
      Reserved
    </p>
  </section>
  {/* Footer end */}
</>

</>

  )
}
    

  export default Course
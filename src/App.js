import logo from "./logo.svg";
import "./App.css";
import Typewriter from "typewriter-effect/dist/core";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Experience from "./Experience";
import About from "./About";
import Projects from "./Projects";
// import $ from "jquery";

function App() {
  // var i = 0;
  // var text = "Hello! And welcome to my website! Here you will find my projects and other things I've worked on."
  // function typing(){
  //   if (i < text.length){
  //     document.getElementById("text").innerHTML += text.charAt(i);
  //     i++;
  //     setTimeout(typing, 100);
  //   }
  // }
  // document.getElementById("text").innerHTML = "";
  // typing();
  <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
        </Route>
      </Routes>
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  // const tabs = document.querySelectorAll("[data-tab-target]");
  // console.log(tabs);
  // const tabContents = document.querySelectorAll("[data-tab-content]");
  // tabs.forEach(async (tab) => {
  //   tab.addEventListener("click", () => {
  //     const target = document.querySelector(tab.dataset.tabTarget);
  //     tabContents.forEach((tabContent) => {
  //       tabContent.classList.remove("active");
  //     });
  //     tabs.forEach((tab) => {
  //       tab.classList.remove("active");
  //     });
  //     // document.querySelector(".artistBox").innerHTML = "";
  //     // console.log("executes");
  //     tab.classList.add("active");
  //     target.classList.add("active");
  //   });
  // });
  // function print() {
  //   const tabs = document.querySelectorAll("[data-tab-target]");
  //   console.log(tabs);
  //   const tabContents = document.querySelectorAll("[data-tab-content]");
  //   tabs.forEach(async (tab) => {
  //     tab.addEventListener("click", () => {
  //       const target = document.querySelector(tab.dataset.tabTarget);
  //       tabContents.forEach((tabContent) => {
  //         tabContent.classList.remove("active");
  //       });
  //       tabs.forEach((tab) => {
  //         tab.classList.remove("active");
  //       });
  //       // document.querySelector(".artistBox").innerHTML = "";
  //       // console.log("executes");
  //       tab.classList.add("active");
  //       target.classList.add("active");
  //     });
  //   });
  // }
  // $(document).ready(() => print());

  let darkModeState = 0;
  function darkMode() {
    let body = document.querySelector("body");
    let darkMode = document.querySelector(".dark-mode");
    let email = document.querySelector(".email");
    let navsvg = document.querySelectorAll(".nav-svg");
    let links = document.querySelectorAll(".links");
    // console.log(navsvg);
    if (darkModeState === 0) {
      // let body = document.querySelector('body');
      // let darkMode = document.querySelector('.dark-mode');
      body.style.background = "#1c1d20";
      body.style.color = "white";
      darkMode.style.color = "white";
      email.style.color ="white";
      navsvg.forEach((element) => (element.style.color = "white"));
      links.forEach((element) => (element.style.color = "white"));
      // navsvg.style.color = "white";
      darkModeState = 1;
    } else {
      body.style.background =
        "linear-gradient(to top, #FEFEF1 0%, #FEFCD6 100%)";
      body.style.color = "#4c5152";
      email.style.color ="#4c5152";
      darkMode.style.color = "#4c5152";
      // navsvg.style.color = "#1c1d20";
      navsvg.forEach((element) => (element.style.color = "#4c5152"));
      links.forEach((element) => (element.style.color = "#4c5152"));
      darkModeState = 0;
    }
    // console.log('button');

    // app.innerHTML = "";
    // const intro = document.querySelector('.intro');

    // setTimeout(() => {
    //   intro.classList.add('second');
    // }, 0);
    // // intro.style.top = '-100vh'
    // setIsLoading(false);
  }
  document
    .getElementById("darkMode")
    .addEventListener("click", () => darkMode());
  var slideIndex = 1;

  showDivs(slideIndex);

  function plusDivs(n, slideNo) {
    showDivs((slideIndex += n), slideNo);
    console.log("executing");
  }

  function currentDiv(n, slideNo) {
    showDivs((slideIndex = n), slideNo);
    // console.log("executing");
  }

  function showDivs(n, slideNo) {
    var i;
    if (slideNo === 1) {
      var x = document.getElementsByClassName("mySlides");
      // var y = document.getElementsByClassName("captiontext");
    } else {
      var x = document.getElementsByClassName("mySlides2");
      // var y = document.getElementsByClassName("captiontext2");
    }

    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      // y[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    // y[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " w3-white";
  }
  document
    .getElementById("w3-left")
    .addEventListener("click", () => plusDivs(-1, 1));
  document
    .getElementById("w3-right")
    .addEventListener("click", () => plusDivs(1, 1));
  document
    .getElementById("w3-left2")
    .addEventListener("click", () => plusDivs(-1, 2));
  document
    .getElementById("w3-right2")
    .addEventListener("click", () => plusDivs(1, 2));
  document
    .getElementById("1")
    .addEventListener("click", () => currentDiv(1, 1));
  document
    .getElementById("2")
    .addEventListener("click", () => currentDiv(2, 1));
  document
    .getElementById("3")
    .addEventListener("click", () => currentDiv(3, 1));
  document
    .getElementById("skipIntro")
    .addEventListener("click", () => removeTypewrite());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    typewrite();
    // console.log('Page is loaded');
  }, []);
  let intro = document.querySelector(".intro");
  var app = document.getElementById("introtext");
  function typewrite() {
    // console.log('First function is running');
    var typewriter = new Typewriter(app, {
      autoStart: true,
      delay: 75,
    });
    typewriter
      .typeString("Hello and welcome to my website!")
      .pauseFor(1000)
      .deleteAll(60)
      .typeString("Here you will find my projects")
      .pauseFor(300)
      .deleteChars(8)
      .typeString(
        "<strong>really cool</strong> projects and other things I've worked on."
      )
      .pauseFor(1000)
      .deleteAll(30)
      .typeString("Enjoy!")
      .pauseFor(1000)
      .deleteAll(60)
      .start();
    setIsLoading(true);
    setTimeout(() => {
      console.log("First function has completed");
      removeTypewrite();
    }, 21000);
  }
  function removeTypewrite() {
    console.log("Second function has completed");
    app.innerHTML = "";
    // const intro = document.querySelector('.intro');

    setTimeout(() => {
      intro.classList.add("second");
    }, 0);
    // intro.style.top = '-100vh'
    setIsLoading(false);
  }
  // app.onload(typewrite())

  // window.addEventListener("DOMContentLoaded", () =>{

  // })

  // app.addEventListener("load",typewrite())
  return <div className="App"></div>;
}

export default App;

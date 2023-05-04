import logo from "./logo.svg";
import "./App.css";
import Typewriter from "typewriter-effect/dist/core";
import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Experience from "./Experience";
import About from "./About";
import Projects from "./Projects";
// import $ from "jquery";
import { initializeApp } from "firebase/app";
import { getFirestore, updateDoc, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "db-personalwebsite.firebaseapp.com",
  projectId: "db-personalwebsite",
  storageBucket: "db-personalwebsite.appspot.com",
  messagingSenderId: "784110217143",
  appId: "1:784110217143:web:ae6f1800faeab3930eaa32",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
  // <Routes>
  //   <Route path="/" element={<Layout />}>
  //     <Route index element={<About />} />
  //     <Route path="projects" element={<Projects />} />
  //     <Route path="experience" element={<Experience />} />
  //   </Route>
  // </Routes>;
  // const navigate = useNavigate();

  // console.log(newFields);
  const updateButton = async (id) => {
    const buttonDoc = doc(db, "button", id);
    const docButtonSnap = await getDoc(buttonDoc);
    const oldNum = docButtonSnap.data().num;
    // console.log(docButtonSnap.data());
    const newFields = { num: oldNum + 1 };
    document.querySelector("#dbbutton").innerHTML = `${oldNum + 1}`;
    await updateDoc(buttonDoc, newFields);
  };
  // updateButton();
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
      email.style.color = "white";
      navsvg.forEach((element) => (element.style.color = "white"));
      links.forEach((element) => (element.style.color = "white"));
      // navsvg.style.color = "white";
      darkModeState = 1;
    } else {
      body.style.background =
        "linear-gradient(to top, #FEFEF1 0%, #FEFCD6 100%)";
      body.style.color = "#4c5152";
      email.style.color = "#4c5152";
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
  let slideIndex = 1;

  //showDivs(slideIndex);

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

  useEffect(() => {
    typewrite();
    getapi("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
    // console.log('Page is loaded');

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
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [isIntro, setIsIntro] = useState(true);

  async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);
    document.querySelector("#apiPhoto").innerHTML = `
    <h2>NASA Photo of the Day</h2>
    <p>Title: ${data.title}   </p>
    <p><img src ="${data.url}" /></p>
    <p>Copyright: ${data.copyright}</p>`;
  }

  // const api_url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

  // fetch("https://zenquotes.io/api/random")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     // Handle the fetched data here
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     // Handle errors here
  //   });
  let intro = document.querySelector(".intro");
  // var app = document.getElementById("introtext");

  // console.log(app);
  const introTextRef = useRef(null);
  function typewrite() {
    // console.log('First function is running');
    var typewriter = new Typewriter(introTextRef.current, {
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
      // console.log("First function has completed");
      removeTypewrite();
    }, 21000);
  }
  function removeTypewrite() {
    // console.log("Second function has completed");
    // app.innerHTML = "";
    const intro = document.querySelector(".intro");
    intro.classList.add("second");
    // setTimeout(() => {
    //   intro.classList.add("second");
    // }, 0);
    // intro.style.top = "-100vh";
    setIsIntro(false);
    setIsLoading(false);
  }
  // app.onload(typewrite())

  // window.addEventListener("DOMContentLoaded", () =>{

  // })

  // app.addEventListener("load",typewrite())
  return (
    <div className="App">
      {/* {isIntro ? typewrite() : } */}
      <div className="intro">
        <div ref={introTextRef}></div>
        <button id="skipIntro">Skip</button>
      </div>
      <nav>
        <a href="ResumeMarch.pdf" target="_blank" className="resume">
          Resume{" "}
        </a>
        <a
          href="https://github.com/dylmcgold"
          target="_blank"
          className="buzz-out-on-hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            alt="github"
            className="nav-svg"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/dylanmcgoldrick/"
          target="_blank"
          className="buzz-out-on-hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            alt="linked in"
            className="nav-svg"
          >
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="mailto:dylanmcgoldrick@gmail.com"
          className="email buzz-out-on-hover"
        >
          dylanmcgoldrick@gmail.com
        </a>
        <p className="nav-text">Dark Mode</p>
        <button id="darkMode" onClick={darkMode}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark-mode"
          >
            <path
              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </nav>

      <div id="main">
        <h1>About Me</h1>
        <p>
          My name is Dylan McGoldrick and I'm currently a senior Computer
          Science student at Loyola Marymount University (LMU). I'm passionate
          about software engineering and I enjoy working on projects related to
          computer science. Recently I've taken a liking to front-end
          development and building websites, but I'm always interested in the
          back-end stuff and how the underlying structures work.
        </p>
        <p>
          Hopefully you can take a look at some of my projects and find
          something that interests you!
        </p>
        {/* <!-- </div> -->
    <!-- <div id="projects" data-tab-content> --> */}

        <h1>Projects</h1>
        <h2>MusicMate</h2>

        <iframe
          className="musicmate"
          src="https://drive.google.com/file/d/1eRPjpqeXySQEg2-RvsyeYhQm7P5Bfo6q/preview"
          allow="autoplay"
        ></iframe>
        <p>
          MusicMate is a project that is designed to integrate a more social
          component into using Spotify and allow friends to see each other's
          listening preferences easily. Getting the Spotify API up and running
          was a little tricky, but it is super cool to implement it so that we
          can start seeing some data! This demo was recorded using a demo
          account which was used primarily during Christmas time and explains
          some of the limited data.
        </p>
        <h2>VikingScript</h2>
        <p>
          <img src="VikingscriptHome.png" />
        </p>
        <a
          className="links"
          href="https://willr2001.github.io/VikingScript/"
          target="_blank"
        >
          https://willr2001.github.io/VikingScript
        </a>
        <p>
          VikingScript is a programming language with syntax and semantics that
          are more aesthetically pleasing to vikings. As part of a compilers and
          language course, a compiler was developed for VikingScript that
          converts VikingScript code into JavaScript. You can find out more on
          the website hosted on GitHub Pages. You might like the Viking-themed
          music on the page!
        </p>
        <h2>Christmas tree LED</h2>

        <div className="container">
          <iframe
            className="mySlides"
            src="https://drive.google.com/file/d/19U6gt15UkBwAfvbbSfSGXw8uY9TcLIDk/preview"
            width="640"
            height="480"
            allow="autoplay"
            style={{ display: "block" }}
          ></iframe>
          <iframe
            className="mySlides"
            src="https://drive.google.com/file/d/1jIVr3HzrAJ-XpqfZJ3QyqmUJfgg6n824/preview"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
          <iframe
            className="mySlides"
            src="https://drive.google.com/file/d/1CT8BDoZHKCrPbp0HQt2zcs7NGqOB9Dub/preview"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
          <div id="w3-left" className="w3-left w3-hover-text-khaki">
            &#10094;
          </div>
          <div id="w3-right" className="w3-right w3-hover-text-khaki">
            &#10095;
          </div>
          <span
            id="1"
            className="w3-badge demo w3-border w3-transparent w3-hover-white"
          ></span>
          <span
            id="2"
            className="w3-badge demo w3-border w3-transparent w3-hover-white"
          ></span>
          <span
            id="3"
            className="w3-badge demo w3-border w3-transparent w3-hover-white"
          ></span>
        </div>
        <p>
          An Arduino and LED light strip project that I wrapped around the
          Christmas tree. Wrote custom programs such as one that plays snake,
          one that looks like lightning, one that looks like fire, and more.
        </p>
        <h2>Compound Interest Web App</h2>
        <a
          className="links"
          href="https://dylmcgold.github.io/CompoundInterest"
          target="_blank"
        >
          https://dylmcgold.github.io/CompoundInterest
        </a>
        <p>
          A very simple web app and also one of my first, that is nicely hosted
          on GitHub Pages and calculates compound interest.
        </p>

        {/* <!-- </div> -->
    <!-- <div id="experience" data-tab-content> --> */}

        <h1>Experience</h1>
        <h2>Databases</h2>
        <div className="container">
          <p>
            <img className="mySlides2" src="neo4jex1.png" />
          </p>
          <p>
            <img className="mySlides2" src="neo4jex2.png" />
          </p>
          <p>
            <img className="mySlides2" src="postgresqlex.png" />
          </p>
          <p>
            <img className="mySlides2" src="mongodbex.png" />
          </p>
          {/* <!-- <div className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:100%"> --> */}
          <div id="w3-left2" className="w3-left w3-hover-text-khaki">
            &#10094;
          </div>
          <div id="w3-right2" className="w3-right w3-hover-text-khaki">
            &#10095;
          </div>
          <span
            id="11"
            className="w3-badge demo w3-border w3-transparent w3-hover-white"
          ></span>
          <span
            id="22"
            className="w3-badge demo w3-border w3-transparent w3-hover-white"
          ></span>
          <span
            id="33"
            className="w3-badge demo w3-border w3-transparent w3-hover-white"
          ></span>
          {/* <!-- </div> --> */}
        </div>
        {/* <!-- <img src = "neo4jex1.png" width="640" height="480"/>
    <img src = "neo4jex2.png" width="640" height="480"/>
    <img src = "postgresqlex.png" width="640" height="480"/>
    <img src = "mongodbex.png" width="640" height="480"/> --> */}
        <p>
          Here I have included screenshots of some queries I've performed in a
          variety of databases including PostgreSQL, Neo4j, and MongoDB.{" "}
        </p>
        <p>
          In Neo4j, I loaded 900,000 Amazon product data points into product and
          category nodes, and created around 200,000 relationships. You can see
          the relationships and queries in the photos above.{" "}
        </p>
        <p>
          For the same dataset in PostgreSQL, I included an example of one query
          that gets the number of ratings of the top 5 available rating scores.{" "}
        </p>
        <p>
          MongoDB uses the same dataset as well, and the example query finds
          Amazon products less than or equal to $15.
        </p>
        <h2>Algorithms</h2>
        <p>
          I utilized algorithms such as A* and heuristic searching for maze
          pathfinding, minimax with alpha-beta pruning, breadth and depth first
          searching, bloom filters, CSPs, spell-checking, etc. in Java.
        </p>
        <h2>Artificial Intelligence</h2>
        <p>
          I have experience with logical inference, machine learning, deep
          learning, search trees, and neural networks.
        </p>
        <div id="apiPhoto"></div>
        <h2>Firebase Button Counter</h2>
        <p>How many times has the button been pressed?</p>
        <button
          id="dbbutton"
          onClick={() => updateButton("ytby1nUtjqjNiOOHpJzG")}
        ></button>
        {/* <!-- </div>
    </div> -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"></script>
    <script>
      VANTA.WAVES({
        el: "body",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 10.0,
        scaleMobile: 1.0,
        color: 0x2d890b,
      });
    </script> --> */}
      </div>
    </div>
  );
}

export default App;

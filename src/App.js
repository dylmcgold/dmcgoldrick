import "./App.css";
import Nav from "./Nav";
import Typewriter from "typewriter-effect/dist/core";
import { useState, useEffect, useRef } from "react";
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
  const updateButton = async (id) => {
    const buttonDoc = doc(db, "button", id);
    const docButtonSnap = await getDoc(buttonDoc);
    const oldNum = docButtonSnap.data().num;
    const newFields = { num: oldNum + 1 };
    document.querySelector("#dbbutton").innerHTML = `${oldNum + 1}`;
    await updateDoc(buttonDoc, newFields);
  };

  let slideIndex = 1;

  function plusDivs(n, slideNo) {
    showDivs((slideIndex += n), slideNo);
    console.log("executing");
  }

  function currentDiv(n, slideNo) {
    showDivs((slideIndex = n), slideNo);
  }

  function showDivs(n, slideNo) {
    var i;
    if (slideNo === 1) {
      var x = document.getElementsByClassName("mySlides");
      var y = document.getElementsByClassName("wrapper1");
    } else {
      var x = document.getElementsByClassName("mySlides2");
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
      if (slideNo === 1) {
        y[i].style.padding = "0px";
      }
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    if (slideNo === 1) {
      y[slideIndex - 1].style.paddingBottom = "56.25%";
      y[slideIndex - 1].style.paddingTop = "25px";
    }
  }

  // const [isLoading, setIsLoading] = useState(false);
  // const [isIntro, setIsIntro] = useState(isIntroParam);

  const initialMyState = useRef(true);
  useEffect(() => {
    getapi("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
  }, []);

  async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data.url);
    if (data.copyright) {
      document.querySelector("#apiPhoto").innerHTML = `
    <h2>NASA Photo of the Day</h2>
    <p>Title: ${data.title}   </p>
    <p><img src ="${data.url}" /></p>
    <p>Copyright: ${data.copyright}</p>`;
    } else if (data.url === undefined) {
      document.querySelector("#apiPhoto").innerHTML = `
      <h2>NASA Photo of the Day</h2>
    Demo API limit reached`;
    } else {
      document.querySelector("#apiPhoto").innerHTML = `
    <h2>NASA Photo of the Day</h2>
    <p>Title: ${data.title}   </p>
    <p><img src ="${data.url}" /></p>`;
    }
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
  // let intro = document.querySelector(".intro");
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
    // setIsLoading(true);
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
    // setIsIntro(false);
    // setIsLoading(false);
    // console.log(isIntro);
  }

  return (
    <div className="App">
      {/* {isIntro && typewrite()} */}
      {/* <div className="intro">
        <div ref={introTextRef}></div>
        <button id="skipIntro">Skip</button>
      </div> */}
      <Nav />
      <div id="main">
        <h1>About Me</h1>
        <div className="linkcontainer">
          <a href="DylanM_Resume.pdf" target="_blank" className="resume">
            Resume{" "}
          </a>
          <a
            href="https://github.com/dylmcgold"
            target="_blank"
            // className="buzz-out-on-hover"
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
            // className="buzz-out-on-hover"
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
            className="email"
            // buzz-out-on-hover
          >
            dylanmcgoldrick@gmail.com
          </a>
        </div>
        <p>
          My name is Dylan McGoldrick and I'm Computer Science Graduate from
          Loyola Marymount University (LMU). I'm passionate about software
          engineering and I enjoy working on projects related to computer
          science. Recently I've taken a liking to front-end development and
          building websites, but I'm always interested in the back-end stuff and
          how the underlying structures work.
        </p>
        <p>
          Hopefully you can take a look at some of my projects and find
          something that interests you!
        </p>

        <div id="apiPhoto"></div>
        <h2>Firebase Button Counter</h2>
        <p>How many times has the button been pressed?</p>
        <button
          id="dbbutton"
          onClick={() => updateButton("ytby1nUtjqjNiOOHpJzG")}
        ></button>
      </div>
    </div>
  );
}

export default App;

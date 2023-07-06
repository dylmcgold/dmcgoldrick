import "./App.css";
import { useState, useEffect, useRef } from "react";
import Nav from "./Nav";
function Projects() {
  let slideIndex = 1;

  //showDivs(slideIndex);

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
      if (slideNo === 1) {
        y[i].style.padding = "0px";
      }
      // y[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    if (slideNo === 1) {
      y[slideIndex - 1].style.paddingBottom = "56.25%";
      y[slideIndex - 1].style.paddingTop = "25px";
    }
    // y[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " w3-white";
  }
  //   function iframe() {
  //     $('#iframeTou').attr('src', 'Privacy_Policy/H2eEile%20-Terms-of-Use.pdf#page=1&zoom=100');
  //     $('#divTermsOfUse').modal("show");
  //     return false;
  // }
  useEffect(() => {
    document
      .getElementById("w3-left")
      .addEventListener("click", () => plusDivs(-1, 1));
    document
      .getElementById("w3-right")
      .addEventListener("click", () => plusDivs(1, 1));
  }, []);
  return (
    <div>
      <Nav />
      <div id="main">
        <h1>Projects</h1>
        <h2>MusicMate</h2>
        <div className="plike1">
          <div className="wrapper">
            <embed
              className="musicmate"
              src="https://drive.google.com/file/d/1eRPjpqeXySQEg2-RvsyeYhQm7P5Bfo6q/preview"
              allow="autoplay"
            ></embed>
          </div>
        </div>
        <p>
          MusicMate is a project that is designed to integrate a more social
          component into using Spotify and allow friends to see each other's
          listening preferences easily. Getting the Spotify API up and running
          was a little tricky, but it is super cool to implement it so that we
          can start seeing some data! This demo was recorded using a demo
          account which explains why the data is limited and doesn't reflect
          actual spotify accounts.
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
          <div className="plike">
            <div className="wrapper1">
              <embed
                className="mySlides"
                src="https://drive.google.com/file/d/19U6gt15UkBwAfvbbSfSGXw8uY9TcLIDk/preview"
                allow="autoplay"
              ></embed>
            </div>
          </div>

          <div className="plike">
            <div className="wrapper1" style={{ padding: "0px" }}>
              <embed
                className="mySlides"
                src="https://drive.google.com/file/d/1jIVr3HzrAJ-XpqfZJ3QyqmUJfgg6n824/preview"
                allow="autoplay"
                style={{ display: "none" }}
              ></embed>
            </div>
          </div>

          <div className="plike">
            <div className="wrapper1" style={{ padding: "0px" }}>
              <embed
                className="mySlides"
                src="https://drive.google.com/file/d/1CT8BDoZHKCrPbp0HQt2zcs7NGqOB9Dub/preview"
                allow="autoplay"
                style={{ display: "none" }}
              ></embed>
            </div>
          </div>

          <div id="w3-left" className="w3-left w3-hover-text-khaki">
            &#10094;
          </div>
          <div id="w3-right" className="w3-right w3-hover-text-khaki">
            &#10095;
          </div>
        </div>
        <p>
          <b>Use buttons on either side to see more videos.</b>
        </p>
        <p>
          An Arduino and LED light strip project that I wrapped around the
          Christmas tree. Wrote custom programs such as one that plays snake,
          one that looks like lightning, one that looks like fire, and more.
        </p>
        <h2>Payment Handler</h2>
        <p>
          <img src="paymenthandler.png" />
        </p>
        <a
          className="links"
          href="https://payment-handler-66c80.web.app/"
          target="_blank"
        >
          https://payment-handler-66c80.web.app
        </a>
        <p>
          A simple web app hosted on Firebase that given an input will provide
          forms so that users can enter names and current balances. The app will
          calculate who should pay who in order to completely even out the
          amount paid.
        </p>
      </div>
    </div>
  );
}
export default Projects;

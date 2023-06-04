import "./App.css";
import { useState, useEffect, useRef } from "react";
import Nav from "./Nav";

function Experience() {
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
  useEffect(() => {
    document
      .getElementById("w3-left2")
      .addEventListener("click", () => plusDivs(-1, 2));
    document
      .getElementById("w3-right2")
      .addEventListener("click", () => plusDivs(1, 2));
  }, []);
  return (
    <div>
      <Nav />
      <div id="main">
        <h1>Experience</h1>
        <h2>Databases</h2>
        <div className="container">
          <div className="plike">
            <img className="mySlides2" src="neo4jex1.png" />
          </div>
          <div className="plike">
            <img
              className="mySlides2"
              src="neo4jex2.png"
              style={{ display: "none" }}
            />
          </div>

          <div className="plike">
            <img
              className="mySlides2"
              src="postgresqlex.png"
              style={{ display: "none" }}
            />
          </div>

          <div className="plike">
            <img
              className="mySlides2"
              src="mongodbex.png"
              style={{ display: "none" }}
            />
          </div>
          <div id="w3-left2" className="w3-left w3-hover-text-khaki">
            &#10094;
          </div>
          <div id="w3-right2" className="w3-right w3-hover-text-khaki">
            &#10095;
          </div>
        </div>
        <p>
          <b>Use buttons on either side to see more images.</b>
        </p>
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
          searching, bloom filters, CSPs, spell-checking, etc. in Java. I am
          proficient with algorithms and have experience solving leetcodes.
        </p>
        <h2>Artificial Intelligence</h2>
        <p>
          I have experience with logical inference, machine learning, deep
          learning, search trees, and neural networks. I also have taken a class
          called Cognitive Systems, in which I gained experience in Structural
          Causal Models, Multi-Armed Bandit problems, and Q-learning.
        </p>
      </div>
    </div>
  );
}
export default Experience;

function Projects() {
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
    dots[slideIndex - 1].className += " w3-white";
  }
  document
    .getElementById("w3-left")
    .addEventListener("click", () => plusDivs(-1, 1));
  document
    .getElementById("w3-right")
    .addEventListener("click", () => plusDivs(1, 1));
  //   document
  //   .getElementById("w3-left2")
  //   .addEventListener("click", () => plusDivs(-1, 2));
  // document
  //   .getElementById("w3-right2")
  //   .addEventListener("click", () => plusDivs(1, 2));
  document
    .getElementById("1")
    .addEventListener("click", () => currentDiv(1, 1));
  document
    .getElementById("2")
    .addEventListener("click", () => currentDiv(2, 1));
  document
    .getElementById("3")
    .addEventListener("click", () => currentDiv(3, 1));
  return (
    <div>
      <h1>Projects</h1>
      <h2>MusicMate(s)</h2>
      <p>
        MusicMates is a project that is designed to integrate a more social
        component into using spotify and allow friends to see eachothers
        listening preferences easily. Getting the Spotify API up and running was
        a little tricky, but it is super cool to implement it so that we can
        start seeing some data! May contain traces of Earl Sweatshirt, Kendrick
        Lamar, and Post Malone...
      </p>
      <iframe
        class="musicmate"
        src="https://drive.google.com/file/d/1hZH92cE9TMmlXKUjcij5nFDxnWJJecHd/preview"
        width="640"
        height="480"
        allow="autoplay"
      ></iframe>
      <h2>VikingScript</h2>
      <img src="VikingscriptHome.png" width="863" height="442" />
      <a
        class="links"
        href="https://willr2001.github.io/VikingScript/"
        target="_blank"
      >
        https://willr2001.github.io/VikingScript
      </a>
      <p>
        VikingScript is a programming language with syntax and semantics that
        are more aesthetically pleasing to vikings. As part of a compilers and
        language course, a compiler was developed for VikingScript that converts
        VikingScript code into JavaScript. You can find out more on the website
        hosted on github pages. You might like the Viking-themed music on the
        page!
      </p>
      <h2>Christmas tree LED</h2>
      <p>
        An arduino and LED light strip project that I wrapped around the
        Christmas tree. Wrote custom programs such as one that plays snake, one
        that looks like lightning, one that looks like fire, and more.
      </p>

      <div class="container">
        <iframe
          class="mySlides"
          src="https://drive.google.com/file/d/1Edgbef5WvVXeM1GARqQFasjmYF1rQhhG/preview"
          width="640"
          height="480"
          allow="autoplay"
          style="display: block"
        ></iframe>
        {/* <!-- <div class="captiontext">Caption</div> --> */}
        <iframe
          class="mySlides"
          src="https://drive.google.com/file/d/1796YMjiO3fVCr3FuHJRIN5UiOthaq_lU/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
        <iframe
          class="mySlides"
          src="https://drive.google.com/file/d/1V9H9slnrJZgDWm--1C4wIFxzcFmXpBkJ/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
        {/* <!-- <div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:100%"> --> */}
        <div id="w3-left" class="w3-left w3-hover-text-khaki">
          &#10094;
        </div>
        <div id="w3-right" class="w3-right w3-hover-text-khaki">
          &#10095;
        </div>
        <span
          id="1"
          class="w3-badge demo w3-border w3-transparent w3-hover-white"
        ></span>
        <span
          id="2"
          class="w3-badge demo w3-border w3-transparent w3-hover-white"
        ></span>
        <span
          id="3"
          class="w3-badge demo w3-border w3-transparent w3-hover-white"
        ></span>
        {/* <!-- </div> --> */}
      </div>
      <h2>Compound Interest Web App</h2>
      <a
        class="links"
        href="https://dylmcgold.github.io/CompoundInterest"
        target="_blank"
      >
        https://dylmcgold.github.io/CompoundInterest
      </a>
      <p>
        A very simple web app and also one of my first, that is nicely hosted on
        github pages and calculates compound interest.
      </p>
    </div>
  );
}
export default Projects;

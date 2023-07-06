import { useNavigate } from "react-router-dom";

export default function Nav() {
  let darkModeState = 0;

  function darkMode() {
    let body = document.querySelector("body");
    let darkMode = document.querySelector(".dark-mode");
    let email = document.querySelector(".email");
    let resume = document.querySelector(".resume");
    let navsvg = document.querySelectorAll(".nav-svg");
    let tabs = document.querySelectorAll("ul li");

    let links = document.querySelectorAll(".links");
    if (darkModeState === 0) {
      body.style.background = "#1c1d20";
      body.style.color = "white";
      darkMode.style.color = "white";
      if (email !== null) {
        email.style.color = "white";
        resume.style.color = "#4c5152";
        resume.style.backgroundColor = "white";

        navsvg.forEach((element) => (element.style.color = "white"));
      }
      tabs.forEach((element) => (element.style.color = "white"));
      // tabs.forEach((element) => {
      //   const span = element.querySelector("span");
      //   span.style.backgroundColor = "white";
      // });
      links.forEach((element) => (element.style.color = "white"));
      darkModeState = 1;
    } else {
      body.style.background =
        "linear-gradient(to top, #FEFEF1 0%, #FEFCD6 100%)";
      body.style.color = "#4c5152";

      darkMode.style.color = "#4c5152";
      if (email !== null) {
        email.style.color = "#4c5152";
        resume.style.color = "#fefcd6";
        resume.style.backgroundColor = "#4c5152";
        navsvg.forEach((element) => (element.style.color = "#4c5152"));
      }
      tabs.forEach((element) => (element.style.color = "#4c5152"));
      // tabs.forEach((element) => {
      //   const span = element.querySelector("span");
      //   span.style.backgroundColor = "#4c5152";
      // });
      links.forEach((element) => (element.style.color = "#4c5152"));
      darkModeState = 0;
    }
  }
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/", { state: false });
  };
  const handleProj = () => {
    navigate("/projects");
  };
  const handleExp = () => {
    navigate("/experience");
  };

  return (
    <nav>
      <ul>
        <li onClick={handleHome}>
          <span>Home</span>
        </li>
        <li onClick={handleProj}>
          <span>Projects</span>
        </li>
        <li onClick={handleExp}>
          <span>Experience</span>
        </li>
      </ul>

      <div className="darkcontainer">
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
      </div>
    </nav>
  );
}

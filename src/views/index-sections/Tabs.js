import React from "react";
import { useNavigate } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

import VikingScript from "../../assets/img/VikingscriptHome.png";
import phandler from "../../assets/img/paymenthandler.png";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  let navigate = useNavigate();
  async function handleHome() {
    navigate("/nucleo-icons");
  }
  async function handleProj() {
    navigate("/nucleo-icons");
  }
  async function handleExp() {
    navigate("/nucleo-icons");
  }
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">MusicMate</p>
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center video"
                    // activeTab={"iconPills" + iconPills}
                  >
                    <embed
                      className="musicmate"
                      src="https://drive.google.com/file/d/1eRPjpqeXySQEg2-RvsyeYhQm7P5Bfo6q/preview"
                      allow="autoplay"
                    ></embed>
                  </TabContent>
                  <p>
                    MusicMate is a project that is designed to integrate a more
                    social component into using Spotify and allow friends to see
                    each other's listening preferences easily. Getting the
                    Spotify API up and running was a little tricky, but it is
                    super cool to implement it so that we can start seeing some
                    data! This demo was recorded using a demo account which
                    explains why the data is limited and doesn't reflect actual
                    spotify accounts.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Christmas Tree LED</p>
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        Snake
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        Lightning
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        Rainbow
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center video"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <embed
                        src="https://drive.google.com/file/d/19U6gt15UkBwAfvbbSfSGXw8uY9TcLIDk/preview"
                        allow="autoplay"
                      ></embed>
                    </TabPane>
                    <TabPane tabId="pills2">
                      <embed
                        src="https://drive.google.com/file/d/1jIVr3HzrAJ-XpqfZJ3QyqmUJfgg6n824/preview"
                        allow="autoplay"
                      ></embed>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <embed
                        src="https://drive.google.com/file/d/1CT8BDoZHKCrPbp0HQt2zcs7NGqOB9Dub/preview"
                        allow="autoplay"
                      ></embed>
                    </TabPane>
                  </TabContent>
                  <p>
                    An Arduino and LED light strip project that I wrapped around
                    the Christmas tree. Wrote custom programs such as one that
                    plays snake, one that looks like lightning, one that looks
                    like fire, and more.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">VikingScript</p>
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    // activeTab={"iconPills" + iconPills}
                  >
                    <img src={VikingScript} />
                    <a
                      className="links"
                      href="https://willr2001.github.io/VikingScript/"
                      target="_blank"
                    >
                      https://willr2001.github.io/VikingScript
                    </a>
                  </TabContent>
                  <p>
                    VikingScript is a programming language with syntax and
                    semantics that are more aesthetically pleasing to vikings.
                    As part of a compilers and language course, a compiler was
                    developed for VikingScript that converts VikingScript code
                    into JavaScript. You can find out more on the website hosted
                    on GitHub Pages. You might like the Viking-themed music on
                    the page!
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Payment Handler</p>
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <TabContent className="text-center">
                    <img src={phandler} />
                    <a
                      className="links"
                      href="https://payment-handler-66c80.web.app/"
                      target="_blank"
                    >
                      https://payment-handler-66c80.web.app
                    </a>
                  </TabContent>
                  <p>
                    A simple web app hosted on Firebase that given an input will
                    provide forms so that users can enter names and current
                    balances. The app will calculate who should pay who in order
                    to completely even out the amount paid.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;

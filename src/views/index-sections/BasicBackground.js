import React from "react";

import { initializeApp } from "firebase/app";
import { getFirestore, updateDoc, doc, getDoc } from "firebase/firestore";

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
  Button,
} from "reactstrap";

// core components
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

function BasicBackground() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [buttonCount, setButtonCount] = React.useState("");
  const updateButton = async (id) => {
    const buttonDoc = doc(db, "button", id);
    const docButtonSnap = await getDoc(buttonDoc);
    const oldNum = docButtonSnap.data().num;
    const newFields = { num: oldNum + 1 };
    // document.querySelector("#dbbutton").innerHTML = `${oldNum + 1}`;
    setButtonCount(oldNum + 1);
    await updateDoc(buttonDoc, newFields);
  };
  return (
    <>
      {/* <div id="navbar"> */}
      <div
        className="section section-tabs navigation-example special"
        style={{
          backgroundImage: "url(" + require("assets/img/bg7.jpg") + ")",
        }}
      >
        {/* <div
          className="navigation-example"
          
        > */}
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Firebase Button Counter</p>
              <Card>
                <CardHeader>
                  <h4 className="title">
                    How many times has the button been pressed?
                  </h4>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center">
                    <Button
                      className="text-center btn-db"
                      color="info"
                      //   size="lg"
                      onClick={() => updateButton("ytby1nUtjqjNiOOHpJzG")}
                    >
                      {buttonCount}
                    </Button>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* </div> */}
    </>
  );
}

export default BasicBackground;

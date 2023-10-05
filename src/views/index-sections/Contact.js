import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Alert,
} from "reactstrap";
import { template } from "@babel/core";

// core components

function Contact() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [alert1, setAlert1] = React.useState(false);
  const [alert4, setAlert4] = React.useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  function onSubmit() {
    // console.log(name);
    // console.log(email);
    // console.log(message);
    if (!name || !email || !message) {
      //   console.log("NOT WORKIng");
      setAlert1(false);
      setAlert4(true);
    } else {
      var templateParams = {
        from_name: name,
        to_name: "Dylan",
        message: message,
        reply_to: email,
      };
      emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );
      setAlert4(false);
      setAlert1(true);
    }
    // console.log(alert4);
  }
  //   const [emailFocus, setEmailFocus] = React.useState(false);
  return (
    <>
      <div className="section section-contact-us text-center">
        <Container>
          <h2 className="title">Contact Me</h2>
          <p className="description">
            I am currently looking for software engineering opportunities.
          </p>
          <Row>
            <Col className="text-center ml-auto mr-auto" lg="6" md="8">
              <InputGroup
                className={
                  "input-lg" + (firstFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons users_circle-08"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Name..."
                  type="text"
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                  onChange={(e) => setName(e.target.value)}
                ></Input>
              </InputGroup>
              <InputGroup
                className={"input-lg" + (lastFocus ? " input-group-focus" : "")}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons ui-1_email-85"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Email..."
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setLastFocus(true)}
                  onBlur={() => setLastFocus(false)}
                ></Input>
              </InputGroup>
              <div className="textarea-container">
                <Input
                  cols="80"
                  name="name"
                  placeholder="Type a message..."
                  rows="4"
                  type="textarea"
                  onChange={(e) => setMessage(e.target.value)}
                ></Input>
              </div>
              <div className="send-button">
                <Button
                  block
                  className="btn-round"
                  color="info"
                  //   href="#pablo"
                  onClick={() => onSubmit()}
                  size="lg"
                >
                  Send Message
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        {alert4 && (
          <Alert color="danger" isOpen={alert4}>
            <Container>
              <div className="alert-icon">
                <i className="now-ui-icons objects_support-17"></i>
              </div>
              <strong>Oh snap!</strong> Please fill every field.
              <button
                type="button"
                className="close"
                onClick={() => setAlert4(false)}
              >
                <span aria-hidden="true">
                  <i className="now-ui-icons ui-1_simple-remove"></i>
                </span>
              </button>
            </Container>
          </Alert>
        )}
        {alert1 && (
          <Alert color="success" isOpen={alert1}>
            <Container>
              <div className="alert-icon">
                <i className="now-ui-icons ui-2_like"></i>
              </div>
              <strong>Email Sent!</strong> Your email was successfully sent.
              <button
                type="button"
                className="close"
                onClick={() => setAlert1(false)}
              >
                <span aria-hidden="true">
                  <i className="now-ui-icons ui-1_simple-remove"></i>
                </span>
              </button>
            </Container>
          </Alert>
        )}
      </div>
    </>
  );
}

export default Contact;

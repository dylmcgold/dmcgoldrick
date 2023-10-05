import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function CompleteExamples() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">About Me</h2>
              <h5 className="description about">
                I'm passionate about software engineering and I enjoy working on
                projects related to computer science. I'm most interested in
                front-end development, but I also enjoy back-end development and
                getting "under the hood." Take a look at some of my projects and
                see if anything interests you!
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;

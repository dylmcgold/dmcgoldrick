import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function ExpExample() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h5 className="description about">
                <p>
                  Here are some screenshots of some queries I've performed in a
                  variety of databases including PostgreSQL, Neo4j, and MongoDB.{" "}
                </p>
                <p>
                  In Neo4j, I loaded 900,000 Amazon product data points into
                  product and category nodes, and created around 200,000
                  relationships. You can see the relationships and queries in
                  the photos above.{" "}
                </p>
                <p>
                  For the same dataset in PostgreSQL, I included an example of
                  one query that gets the number of ratings of the top 5
                  available rating scores.{" "}
                </p>
                <p>
                  MongoDB uses the same dataset as well, and the example query
                  finds Amazon products less than or equal to $15.
                </p>
              </h5>
            </Col>
          </Row>
        </Container>
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">Algorithms</h2>
              <h5 className="description about">
                <p>
                  I utilized algorithms such as A* and heuristic searching for
                  maze pathfinding, minimax with alpha-beta pruning, breadth and
                  depth first searching, bloom filters, CSPs, spell-checking,
                  etc. in Java. I am proficient with algorithms and have
                  experience solving leetcodes.
                </p>
              </h5>
            </Col>
          </Row>
        </Container>
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">Artificial Intelligence</h2>
              <h5 className="description about">
                <p>
                  I have experience with logical inference, machine learning,
                  deep learning, search trees, and neural networks. I also have
                  taken a class called Cognitive Systems, in which I gained
                  experience in Structural Causal Models, Multi-Armed Bandit
                  problems, and Q-learning.
                </p>
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ExpExample;

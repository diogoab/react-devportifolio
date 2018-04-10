import React from "react";

import { Row, Col, Card } from 'react-materialize';

const Home = () => (
  <Row>
    <Col m={3} s={12}>
    {/* <UserProfile /> */}
    </Col>

    <Col m={8} s={12}>
        <h5 className="subtitle">About Me</h5>
        <Card>
          <div>
            <p><b>Lorem</b></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"</p>
            <br />
            <p><b>Ipsum</b></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"</p>
          </div>
        </Card>
        <h5 className="subtitle">Experience</h5>
        {/* <Experience />}
        <Experience /> */}
    </Col>
    <Col m={4} s={12}>
    <h2> coluna 3 </h2>
    {/* <UserProfile /> */}
    </Col>
  </Row>

);

export default Home;

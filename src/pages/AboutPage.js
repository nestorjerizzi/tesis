import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { InfoCircle } from "react-bootstrap-icons";

import Contributor from "../components/Contributor";

//Import all images you want to use
const headerImg = require("../static/images/aboutHeader.png");
const noProfileImg = require("../static/images/no-profile-img.png");

// Add all contributors to this array
let contributors = [
  {
    name: "Person 1",
    jobTitle: "Lead scientist",
    img: noProfileImg, // if none provided the noProfileImg will be used
  },
  {
    name: "Person 2",
    jobTitle: "Visualisation expert",
  },
];

function AboutPage(props) {
  return (
    <Container fluid={true} className="p-0 m-0">
      {/* About header */}
      <Col
        className="p-5 m-0"
        style={{
          backgroundImage: "url('" + headerImg + "')", // add your own image
          backgroundRepeat: "no-repeat",
        }}
      >
        <Row className="p-1 justify-content-md-center">
          <h1 className="text-center text-white font-weight-light display-2">
            About
          </h1>
        </Row>
        <hr className="hr-about" />
        <Row className="p-1 justify-content-md-center">
          <h2 className="text-center text-white font-weight-light">
            One line about what you viewer is for
          </h2>
        </Row>
      </Col>

      <Row className="justify-content-center p-4">
        <Col md={6}>
          {/* Here you can include the sections you want in your about page*/}

          {/* Project information*/}
          <Row className="p-4 justify-content-md-center">
            Information about the Project... Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
            tellus. Aenean leo ligula,
          </Row>

          {/* How to use the viewer */}
          <Row className="p-1 justify-content-md-center">
            <h2 className="text-center font-weight-normal ">
              How to use the viewer
            </h2>
          </Row>
          <hr className="hr-about" />
          <Row className=" justify-content-md-center">
            <p className="p-4">
              Select map layers using the left menu. See summarised data by
              clicking the <InfoCircle /> Icon. <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
              <br />
              <br />
              Questions, comments, or feedback about the viewer? Please send us
              an <a href="mailto: abc@example.com">email</a>
            </p>
          </Row>

          {/* Contributors*/}
          <Row className="p-1 justify-content-md-center">
            <h2 className="text-center font-weight-normal ">Contributors</h2>
          </Row>
          <hr className="hr-about" />
          <Row className="p-3 justify-content-md-center">
            {makeContributors(contributors)}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;

const makeContributors = (contributors) => {
  return contributors.map((item) => {
    return (
      <Contributor
        contributor={item}
        noImg={noProfileImg}
        key={item.name}
      ></Contributor>
    );
  });
};
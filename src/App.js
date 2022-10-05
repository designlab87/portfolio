import { Fragment } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import GridBox from './UI/GridBox';
import Detail from './UI/Detail';
import Code from './UI/Code';
import Header from './UI/Header';
import './App.css';

// Code data
const exportFunction = "}; export default aFewNoteworthyProjects;";
const sethWatsonCode = "const SethWatson = (businessChallenges) => { return <FunctionalComponents />; }; // See noteworthy projects below";
const portfolioCode = "const Portfolio = (aFewNoteworthyProjects) => {";

// Header data
const inventory = "react \u2022 svg \u2022 data visualization \u2022 javascript \u2022 redux \u2022 ui/ux \u2022 html \u2022 css \u2022 ecommerce \u2022 php \u2022 mysql \u2022 docker \u2022 git \u2022 agile \u2022 human-centered \u2022 full-stack";

// GridBox data
const logoPath = "/portfolio/assets/logos/";
const imgPath = "/portfolio/assets/img/";
const gridData = [
  {
    id: "g1",
    logo: logoPath+"tbkLogo.jpg",
    fullImgs: [
      imgPath+"tbk1.jpg",
      imgPath+"tbk2.jpg",
      imgPath+"tbk3.jpg"
    ],
    title: "Assessment system",
    subtitle: "Full-Stack Development, Data Visualization",
    body: "Custom SVG Data Visualizations \u2022 Database Architecture \u2022 UI/UX Design \u2022 User Testing \u2022 API Integrations \u2022 Website Design \u2022 Branding \u2022 Content Creation",
    fullbody: [
      "The core product I developed for this project is an assessment system designed to help engaged and married couples by providing information and insights that start and guide productive conversations on a variety of key marital and relational topics. I also developed the application that would administer the assessment, manage the resulting data and provide a facilitator interface.",
      "This project required full-stack development, content creation, branding, UI/UX design as well as PDF report design. The 40 page PDF report has numerous custom designed data visualizations and custom text that auto-generate based on the resulting data from the assessment.",
      "For UI/UX design and development, this project involved leading the design team, wireframing and prototyping, user testing, and design process management.",
      "Front end development involved implementing a fast, responsive design for multiple device targets, and complex assessment form interfaces.",
      "Back end development involved relational database design, server side MVC framework, task and event driven automation, encryption and authentication, API integrations, and data visualizations rendered server-side for PDF."
    ],
    link: "https://tobeknown.com"
  },
  {
    id: "g2",
    logo: logoPath+"SARWLogo.jpg",
    fullImgs:[],
    title: "Trip Planner",
    subtitle: "Website Plugin",
    body: "UI/UX Design \u2022 Maps API \u2022 User Testing \u2022 Dynamic PDF Creation",
    fullbody:[],
    link: "https://www.thesanantonioriverwalk.com/plan-your-trip/"
  },
  {
    id: "g3",
    logo: logoPath+".jpg",
    fullImgs:[],
    title: "",
    subtitle: "",
    body: "",
    fullbody:[],
    link: "https://"
  },
  {
    id: "g4",
    logo: logoPath+".jpg",
    fullImgs:[],
    title: "",
    subtitle: "",
    body: "",
    fullbody:[],
    link: "https://"
  },
  {
    id: "g5",
    logo: logoPath+".jpg",
    fullImgs:[],
    title: "",
    subtitle: "",
    body: "",
    fullbody:[],
    link: "https://"
  },
  {
    id: "g6",
    logo: logoPath+".jpg",
    fullImgs:[],
    title: "",
    subtitle: "",
    body: "",
    fullbody:[],
    link: "https://"
  }
];

const App = () => {

  const gridList = gridData.map((item, i) => (
    <Fragment key={i+'_detail_col'}>
      <Col id={item.id+'_col'} className="grid active" xl={4}>
        <GridBox
          id={item.id} 
          logo={item.logo}
          title={item.title}
          subtitle={item.subtitle}
          body={item.body}
          link={item.link}
        />
      </Col>
      <Col id={item.id+'_detail_col'} className="detail animate" xl={12}>
        <Detail 
          id={item.id} 
          logo={item.logo}
          fullImgs={item.fullImgs}
          title={item.title}
          subtitle={item.subtitle}
          fullbody={item.fullbody}
        />
      </Col>
    </Fragment>
  ));

  return (
    <Container>
      <Row>
        <Col xl={12}>
          <Header/>
        </Col>
      </Row>
      <Row>
        <Col xl={4}>
          <Code code="// Load the Portfolio Page..."></Code>
        </Col>
        <Col xl={4}>
          <Code code="import React from 'react';"></Code>
        </Col>
        <Col xl={4}>
          <Row>
            <Col xl={9}>
              <Code code="// Download Resume..."></Code>
            </Col>
            <Col xl={3}>
              <div className="resumeLinkCol">
              <Card.Link className="resumeLink">Resume</Card.Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="inventory" xl={12}>
          {inventory}
        </Col>
      </Row>
      <Row>
        <Col xl={4}>
        </Col>
        <Col xl={4}>
        </Col>
        <Col xl={4}>
        </Col>
      </Row>
      <Row>
        <Col xl={12}><Code code={sethWatsonCode}></Code></Col>
        <Col xl={12}><Code code={portfolioCode}></Code></Col>
      </Row>
      <Row>
        {gridList}
      </Row>
      <Row>
        <Col xl={12}><Code code={exportFunction}></Code></Col>
      </Row>
      <Row>
        <Col xl={12}></Col>
      </Row>
    </Container>
  );
}

export default App;

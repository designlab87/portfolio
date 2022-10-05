import { Fragment } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GridBox from './UI/GridBox';
import Detail from './UI/Detail';
import Code from './UI/Code';
import Header from './UI/Header';
import './App.css';

import * as Constant from './Constants/Constants';

const App = () => {

  const gridList = Constant.gridData.map((item, i) => (
    <Fragment key={i+'_detail_col'}>
      <Col id={item.id+'_col'} className="grid active" xl={4}>
        <GridBox
          id={item.id} 
          logo={item.logo}
          title={item.title}
          subtitle={item.subtitle}
          body={item.body}
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
          link={item.link}
        />
      </Col>
    </Fragment>
  ));

  return (
    <Container>
      <Row>
        <Col xl={4}>
          <div className="contactInfo">
            <p>{Constant.myname}</p>
            <p><a href={"tel:"+Constant.myphone.replace(/\D/g,'')}>{Constant.myphone}</a></p>
            <p><a href={"mailto:"+Constant.myemail}>{Constant.myemail}</a></p>
          </div>
        </Col>
        <Col xl={4}>
          <Header headLink={Constant.headLink}/>
        </Col>
        <Col xl={4}>
        </Col>
      </Row>
      <Row>
        <Col xl={4}>
          <Code code={Constant.codeBlock1}></Code>
        </Col>
        <Col xl={4}>
          <Code code={Constant.codeBlock2}></Code>
        </Col>
        <Col xl={4}>
          <Row>
            <Col sm={9}>
              <Code code={Constant.codeBlock3}></Code>
            </Col>
            <Col sm={3}>
              <div className="resumeLinkCol">
                <a className="resumeLink" target="_blank" rel="noreferrer" href={Constant.resumePath}>Resume</a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="inventory" xl={12}>
          {Constant.inventory}
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
        <Col xl={12}><Code code={Constant.codeBlock4}></Code></Col>
        <Col xl={12}><Code code={Constant.codeBlock5}></Code></Col>
      </Row>
      <Row>
        {gridList}
      </Row>
      <Row>
        <Col xl={12}><Code code={Constant.codeBlock6}></Code></Col>
      </Row>
      <Row>
        <Col xl={12}></Col>
      </Row>
    </Container>
  );
}

export default App;

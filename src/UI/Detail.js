import { Fragment } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";
import './Detail.css';

const detailHideHandler = (id) => {
  const elements = document.getElementsByClassName("grid");
  for (const el of elements){
      el.classList.add('active');
  }
  const element = document.getElementById(id);
  element.classList.remove('active');
};

const Detail = (props) => {
  return (
    <Fragment>
      <Card id={props.id+'_detail'} className="mb-3 animate">
        <Card.Body className="detailBody">
          <div className="iconBox"><Image className="iconImg" src={props.logo} alt="logo"/></div>
          <Row>
            <Col xl={6}>
              <Card.Title>{props.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
            </Col>
            <Col xl={6}>
              <Card.Link className="detailLink" onClick={()=>detailHideHandler(props.id+'_detail_col')}>Back To Projects</Card.Link>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              {props.fullImgs.map((img, i)=>{
                return <Image fluid className="detailImg" src={img} alt="img" key={i+'_detail_img'} />
              })}
            </Col>
            <Col xl={6}>
              {props.fullbody.map((text, i)=>{
                return <div className="detailText" key={i+'_detail_text'} dangerouslySetInnerHTML={{__html: text}} />
              })}
              <Card.Link className="detailLink" target="_blank" rel="noreferrer" href={props.link.link}>{props.link.text}</Card.Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Detail;
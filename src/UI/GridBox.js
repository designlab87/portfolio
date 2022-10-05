import { Fragment } from 'react';

//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './GridBox.css';

const GridBox = (props) => {

  const detailShowHandler = (id) => {
    console.log(id);
    const elements = document.getElementsByClassName("grid");
    for (const el of elements){
        el.classList.remove('active');
    }
    const element = document.getElementById(id);
    element.classList.add('active');
  };

  return (
    <Fragment>
      <Card id={props.id+'_grid_card'} className="mb-3 animate">
        <Card.Body>
          <div className="iconBox"><img className="iconImg" src={props.logo} alt="logo"/></div>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
          <Card.Text>
            {props.body}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link onClick={()=>detailShowHandler(props.id+'_detail_col')}>View Details</Card.Link>
        </Card.Footer>
      </Card>
    </Fragment>
  );
};

export default GridBox;
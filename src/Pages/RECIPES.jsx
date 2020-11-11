import React from "react";
import { Card, CardColumns, Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import "./RECIPES.css";
function RECIPES() {
  return (
    <div className="Recipes"> <br/><br/>
        <div className="header__text" >
        <Container>
          <Row>
            <Col className="font_large">
              <b> .The Recipes We Have. </b>
            </Col>
          </Row>
          <Row>
            <Col>
              <i> FOOD IS OUR LIFE,SO WE TRY BEST TO GIVE PROPER SATISFACTION</i>
            </Col>
          </Row>
          </Container>
          </div>

          <br/>
          <br/>
          

          <div className="buncher_cards container" >


          <Container   >
  <Row>
    <Col xs={0.89} ><b> SOME SNAKS FOR EVENING CHILL: </b></Col>
  </Row>
</Container>
   
   <br/>
   
            

            

          <CardColumns>
  <Card>
    <Card.Img variant="top" src="/beef.jpg
" />
    <Card.Body>
      <Card.Title>Masala Beef</Card.Title>
      <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.    <a href="http://localhost:3000/ODER" className="href">
                    <b> ODER NOW </b>
                  </a>    
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
    <Card.Img variant="top" src="/ice.jpg" />
    <Card.Body>
      <Card.Title>Mango Icecream</Card.Title>
      <Card.Text>
        This has the test of pure mango. It's one of the best selling item. Go for it otherwise it would finish.<a href="http://localhost:3000/ODER" className="href">
                    <b> ODER NOW </b>
                  </a>    
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="danger" text="white" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-dark">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>

  <Card className="text-center">
  <Card.Img src="/Noodules.png" />
    <Card.Body>
      <Card.Title> Butter Chowmin</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.I love    <a href="http://localhost:3000/ODER" className="href">
                    <b> ODER NOW </b>
                  </a>    
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>
  
  <Card className="text-right">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  
</CardColumns>

          </div>

          <Footer />

    </div>
  );
}

export default RECIPES;

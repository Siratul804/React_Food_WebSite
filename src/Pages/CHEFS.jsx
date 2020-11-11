import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import "./CHEFS.css";
import Footer from "./Footer";
function CHEFS() {
  return (
    <div className="Chefs">
      <div className="EBIMG" >
        <br/>
        
      <Card className="cardtwo"  >
          <Card.Img variant="top" src="/EPIZA.jpg" className="EPIZA" />
          <Card.Body className="btclr" >
            <Card.Text className="btclr" >
            <p>Made By: <b>  Nusrat Jahan Saima(Esha) </b> </p>  <a href="http://localhost:3000/ODER" className="href">
                    <i> ODER NOW </i>
                  </a> <br/><br/>
            </Card.Text>
          </Card.Body> 
        </Card>   
      </div> <br/> <br/> <br/>
     <div className="introduction container " >
     <Container>
  <Row> <br/><br/>
    <Col md={{ span: 3, offset: 1 }} className="E_font" > <br/><br/><br/> <p>Esha is a Finalce Student, Traveler, Ayno's wife. She is now host of Esha's Cooking Studio. She is the head cheif of this company.She has cooked many foods. Any food you want,it will go though her.So the test would be the best experience for you.
 </p> </Col>


    <Col>  <img
      className=" esha__pic "
      src="/ehsa.jpg"
      alt="First slide"
    /> <p> <b> Nushat Jahan Saima (Esha)  </b> </p> </Col>

     
  </Row>

  <Row>
      <Col  >
      
      <a href="https://www.facebook.com/saima.jahan.77964"    >
                  <span className="fab fa-facebook">
                    <FacebookIcon  />
                  </span>
                </a>  
      <a href="https://www.instagram.com/nujhatfarihasaima/?hl=en">
                  <span className="fab fa-instagram">
                    <InstagramIcon  />
                  </span>
                </a>
      <a href="https://www.facebook.com/siratul.islam.31"   >
                  <span className="fab fa-twitter">
                    <TwitterIcon  />
                  </span>
                </a>

      </Col>
      </Row>

      <br/>
      <hr/>



</Container>
     </div>

      <div className="SIMG" > 

      <div className="EBIMG" >
      <Card  >
          <Card.Img variant="top" src="/SCHCK.jpg" className="EPIZA" />
          <Card.Body className="btclr" >
            <Card.Text className="btclr" >
            <p>Made By: <b>  Janntul Ferdous Mim </b> </p>  <a href="http://localhost:3000/ODER" className="href">
                    <i> ODER NOW </i>
                  </a> <br/><br/>
            </Card.Text>
          </Card.Body> 
        </Card>   
      </div> <br/> <br/> <br/>

      <div className="introduction container " >
     <Container>
  <Row> <br/><br/>


    <Col xs={6} >  <img
      className=" esha__pic "
      src="/sreya.jpg"
      alt="First slide"
    /> <p> <b> Janntul Ferdous Mim  </b> </p> </Col>

<Col md={{ span: 3, offset: 1 }} className="E_font" > <br/><br/><br/> <p>Mim is a Student of medical, chef, Siratul's wife. She is the assitent host of Esha's Cooking Studio. She is cheif's sister.She has cooked many foods for this company. Any food you want,it will go though her.So the test would be the best experience for you.
 </p> </Col>

     
  </Row>

  <Row>
      <Col  >
      
      <a href="https://www.facebook.com/sidratul.muntaha.5205622"    >
                  <span className="fab fa-facebook">
                    <FacebookIcon  />
                  </span>
                </a>  
      <a href="https://www.instagram.com/sanjida_sreya/?hl=en">
                  <span className="fab fa-instagram">
                    <InstagramIcon  />
                  </span>
                </a>
      <a href="https://www.facebook.com/siratul.islam.31"   >
                  <span className="fab fa-twitter">
                    <TwitterIcon  />
                  </span>
                </a>

      </Col>
      </Row>
        <br/>


</Container>
     </div>

      </div>

      
      <Footer />

    </div>
  );
}

export default CHEFS;

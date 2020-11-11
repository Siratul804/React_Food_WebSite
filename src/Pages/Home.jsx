import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import "./Home.css";
function Home() {
  return (
    <div className="home">
     <div className="causal" >

      

     <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 cSize "
      src="/Pizza.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <div className="t_clr">
      <h3 className="text-dark" >Masala Pizza</h3>
      <p className="text-dark" > <b> One of the best pizza we have, You need to test it. </b> </p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 cSize "
      src="/Chickens.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <div className="t_clr">
      <h3>Spicy Checken</h3>
      <p>Wow,so jucy and delicious Chicken we ever have.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 cSize "
      src="/cakeone.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <div className="t_clr">
      <h3>Chocklet Cake</h3>
      <p>One of the best cake we have in our stock,oder it NOW!!!</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

     </div>
      <br />
      <br />
      <div className="text container ">
        <Container>
          <Row>
            <Col className="font_large">
              <b> What to Cook This Week </b>
            </Col>
          </Row>
          <Row>
            <Col>
              <i> RECIPES, GUIDES AND MORE FOR THE WEEK OF OCTOBER 11TH</i>
            </Col>
          </Row>
          <br />
          <br />

          <hr />
          <br />
          <br />

          <Row>
            <Col xs={5}>
              <h6>
                <b> SAM SIFTON </b>
              </h6>
              <p> Oct. 9, 2020 10:30 a.m. ET </p>
            </Col>
            <Col sm={7}>
              <h3 className="fonttwo">
                Good morning. I went to high school near La Caridad 78, a
                Cuban-Chinese restaurant on the Upper West Side of Manhattan
                that closed in July, a victim of the coronavirus. I ate there so
                often I’m hard-pressed to put a number to it, most happily with
                the architecture critic Michael Kimmelman, who loved{" "}
                <a
                  href="https://cooking.nytimes.com/newsletters?action=click&module=read-more&region=Newsletter%20Module"
                  className="href"
                >
                  <b> READ MORE.. </b>
                </a>
              </h3>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <div className="cards container ">
        <Container>
          <Row>
            <Col>

              <Card className="card" style={{ width: "18rem" } }>
                <Card.Img variant="top" src="/food(1).jpg" />
                <Card.Body>
                  <Card.Title>Cheese blast pizza</Card.Title>
                  <Card.Text>
                    <b> Chefs: </b> Esha & Jannat
                  </Card.Text>
                  <a href="http://localhost:3000/ODER" className="href">
                    <b> ODER NOW </b>
                  </a>
                </Card.Body>
              </Card>

            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="food(2).jpg" />
                <Card.Body>
                  <Card.Title>Juicy bbq chicken grill</Card.Title>
                  <Card.Text>
                    <b> Chefs: </b> Esha
                  </Card.Text>
                  <a href="http://localhost:3000/ODER" className="href">
                    <b> ODER NOW </b>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="food(3).jpg" />
                <Card.Body>
                  <Card.Title>Miky Pasta</Card.Title>
                  <Card.Text>
                    <b> Chefs: </b> Esha & Jannat
                  </Card.Text>
                  <a href="http://localhost:3000/ODER" className="href">
                    <b> ODER NOW </b>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <br /> <br />
      <hr />
      <div className="container" >
        <Card>
          <Card.Img variant="top" src="/caketwo.jpg" className="cake__size" />
          <Card.Body>
            <Card.Text>
             <b> This is one of our best recipe. wants to oder??? </b> <br/> <a href="http://localhost:3000/ODER" className="href">
                    <i> ODER NOW </i>
                  </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <hr/>

      <Footer/>

    </div>
  );
}

export default Home;

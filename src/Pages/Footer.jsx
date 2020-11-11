import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

import "./Footer.css";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer__body">
     
        <Row>
      <footer>
        <div className="main-content">
         <Col> <div className="left">
            
            <div className="content">
              
            <img
                className="nav_photo2 font ml-3 .ml-sm-0"
                src={process.env.PUBLIC_URL + "/E.png"}
                alt="Logo"
              />
             
            </div>
          </div> </Col>

          <Col></Col>
          <Col></Col>
          <Col></Col>

          

        <Col>  <div className="right">
            
            <div className="content">
              <div>
                <a href="#" className=" sfont text-primary" > facebook</a>  <a href="#">
                  <span className="fab fa-facebook">
                    <FacebookIcon />
                  </span>
                </a>  <br/>
                <a href="#" className=" sfont text-primary" > Twitter </a>  <a href="#">
                  <span className="fab fa-twitter">
                    <TwitterIcon />
                  </span>
                </a> <br/>
                <a href="#" className=" sfont text-danger" > Instagram  </a>   <a href="#">
                  <span className="fab fa-instagram">
                    <InstagramIcon className="text-danger" />
                  </span>
                </a> <br/>
              </div>
            </div>
          </div> </Col>
        </div>
      </footer>
      </Row>
      
    </div>
  );
}

export default Footer;

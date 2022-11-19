import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center">
            <div className="social-icon mt-5 mb-4">
              <a href="mailto:luampelus@gmail.com">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.linkedin.com/in/luamanuelpelus/">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://github.com/luampelus">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <div className="copyright">
              © 2022 Copyright Lua Pelus
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Profile = () => {
  return (
    <section className="profile" id="profile">
      <Container>
        <Row className="align-items-center">
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Sobre Mí</h2>
                  <p>
                    Hola! Mi nombre es Lua, soy un Full Stack Developer de 21
                    años. Desde muy chico siempre me atrajo mucho el mundo de la
                    tecnología, por eso, en 2022 decidí dar un salto en mí
                    carrera y realizar un Coding Bootcamp de +800hs, en donde
                    aprendí las tecnologías más demandadas de la industria IT, y
                    a trabajar con metodologías agiles tales como Scrum y Pair
                    Programming. Me considero una persona creativa, dedicada,
                    flexible y perseverante. Actualmente me encuentro en
                    búsqueda de un empleo el cual me permita poner a prueba
                    todos mis conocimientos, y que al mismo tiempo, me ofrezca
                    la oportunidad de seguir creciendo tanto personal como
                    profesionalmente, incorporando nuevas habilidades
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

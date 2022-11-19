import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xdojjaol");

  return (
    <section className="contact" id="connect">
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
                  <h2>Contactame</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-2 py-2">
                        <input id="nombre" type="text" name="nombre" placeholder="Nombre" />
                        <ValidationError
                          prefix="Nombre"
                          field="nombre"
                          errors={state.errors}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-2 py-2">
                        <input id="apellido" type="text" name="apellido" placeholder="Apellido" />
                        <ValidationError
                          prefix="Apellido"
                          field="apellido"
                          errors={state.errors}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-2 py-2">
                        <input id="email" type="email" name="email" placeholder="Email" />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-2 py-2">
                        <input id="telefono" type="text" name="telefono" placeholder="Teléfono" />
                        <ValidationError
                          prefix="Teléfono"
                          field="telefono"
                          errors={state.errors}
                        />
                      </Col>
                      <Col size={12} className="px-2 py-2">
                        <textarea rows="6" id="mensaje" name="mensaje" placeholder="Mensaje" />
                        <ValidationError
                          prefix="Mensaje"
                          field="mensaje"
                          errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting}>
                          Enviar
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

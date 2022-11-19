import iconHtml from "../assets/img/icon-html.svg";
import iconCss from "../assets/img/icon-css.svg";
import iconJs from "../assets/img/icon-js.svg";
import iconNode from "../assets/img/icon-nodejs.svg";
import iconExpress from "../assets/img/icon-express.svg";
import iconPostgres from "../assets/img/icon-postgres.svg";
import iconSequelize from "../assets/img/icon-sequelize.svg"
import iconMongo from "../assets/img/icon-mongodb.svg"
import iconJWT from "../assets/img/icon-jwt.svg"
import iconReact from "../assets/img/icon-react.svg"
import iconRedux from "../assets/img/icon-redux.svg"
import iconSocket from "../assets/img/icon-socketio.svg"
import iconMaterialUi from "../assets/img/icon-material-ui.svg"
import iconTailwindCSS from "../assets/img/icon-tailwind-css.svg"
import iconGit from "../assets/img/icon-git.svg"
import iconGitHub from "../assets/img/icon-github.svg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Mis Skills</h2><br></br><br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider ">
                            <div className="item">
                                <img src={iconHtml} alt="Image" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={iconCss} alt="Image" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={iconJs} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={iconNode} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={iconExpress} alt="Image" />
                                <h5>Express.js</h5>
                            </div>
                            <div className="item">
                                <img src={iconPostgres} alt="Image" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={iconSequelize} alt="Image" />
                                <h5>Sequelize</h5>
                            </div>
                            <div className="item">
                                <img src={iconMongo} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={iconJWT} alt="Image" />
                                <h5>JWT</h5>
                            </div>
                            <div className="item">
                                <img src={iconReact} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={iconRedux} alt="Image" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={iconSocket} alt="Image" />
                                <h5>Socket.IO</h5>
                            </div>
                            <div className="item">
                                <img src={iconMaterialUi} alt="Image" />
                                <h5>Material UI</h5>
                            </div>
                            <div className="item">
                                <img src={iconTailwindCSS} alt="Image" />
                                <h5>Tailwind CSS</h5>
                            </div>
                            <div className="item">
                                <img src={iconGit} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={iconGitHub} alt="Image" />
                                <h5>GitHub</h5>
                            </div>
                           
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

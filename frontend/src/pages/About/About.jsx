import React from "react";
import "./About.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
        <div className="about-us">
            <div className="heading-container">
                <h2 className="heading">About us</h2>
            </div>
            {/* <div className="image-container">
                <img
                    className="image"
                    src="../../../public/images/placeholder/Hamburger.jpg"
                    alt="Hamburger"
                />
            </div> */}
            <div className="picture-container">
                <div className="first-container">
                    <img
                        className="image"
                        src="../../../public/images/placeholder/Hamburger.jpg"
                        alt=""
                    />
                    <p className="name">Manuel</p>
                    <a
                        href="https://github.com/mrbubbles-src"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* <FontAwesomeIcon icon={faGithub} />{" "} */}
                    </a>
                    <a
                        href="https://www.linkedin.com/in/manuel-fahrenholz/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* <FontAwesomeIcon icon={faLinkedin} /> */}
                    </a>
                </div>
                <div className="second-container">
                    <img
                        className="image"
                        src="../../../public/images/placeholder/Hamburger.jpg"
                        alt=""
                    />
                    <p className="name">Jacqueline</p>
                    <a
                        href="https://github.com/jacqueline-s-w"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* <FontAwesomeIcon icon={faGithub} /> */}
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jacqueline-scharrer-weißgerber/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* <FontAwesomeIcon icon={faLinkedin} /> */}
                    </a>
                </div>
                <div className="third-container">
                    <img
                        className="image"
                        src="../../../public/images/placeholder/Hamburger.jpg"
                        alt=""
                    />
                    <p className="name">Muhammed</p>
                    <a
                        href="https://github.com/MuhammedTinmaz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* <FontAwesomeIcon icon={faGithub} /> */}
                    </a>
                    <a
                        href="https://www.linkedin.com/in/muhammed-tinmaz-b562a225a/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* <FontAwesomeIcon icon={faLinkedin} /> */}
                    </a>
                </div>
                <div className="fourth-container">
                    <img
                        className="image"
                        src="../../../public/images/placeholder/Hamburger.jpg"
                        alt=""
                    />
                    <p className="name">Katharina</p>
                    <a
                        href="https://github.com/Katharina-Groller"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* <FontAwesomeIcon icon={faGithub} /> */}
                    </a>
                    <a
                        href="https://www.linkedin.com/in/katharina-g-354362276/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* <FontAwesomeIcon icon={faLinkedin} /> */}
                    </a>
                </div>
                <div className="fifth-container">
                    <img
                        className="image"
                        src="../../../public/images/placeholder/Hamburger.jpg"
                        alt=""
                    />
                    <p className="name">Metin</p>
                    <a
                        href="https://github.com/MetinArsu"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* <FontAwesomeIcon icon={faGithub} /> */}
                    </a>
                    <a
                        href="https://www.linkedin.com/in/metin-m-arsu-4991b8276/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* <FontAwesomeIcon icon={faLinkedin} /> */}
                    </a>
                </div>
            </div>
            <div className="paragraph-container container">
                <p className="first-paragraph">
                    Wir sind roomTwenty - eine Gruppe von Freunden die sich
                    während der Weiterbildung zum Fullstack Webentwickler beim
                    DCI Digital Career Institute gefunden hat.
                </p>
                <p className="second-paragraph">
                    Dies ist unser Finales Projekt unserer Weiterbildung,
                    'bookNook', eine Anwendung in der du nach Buchinformationen
                    suchen und deinen Lesefortschrit verwalten kannst in dem du
                    den Seitenstand der Bücher die du aktuell liest verfolgen
                    kannst und je eine Liste für deine bereits gelesenen Bücher
                    und den Büchern die noch lesen möchtes zur verfügung hast.
                </p>
                <p className="third-paragraph">
                    Wir hoffen dir gefällt es hier und, dass bookNook dir in
                    deiner Lesereise helfend zur Seite steht!
                </p>
            </div>
        </div>
    );
};

export default About;
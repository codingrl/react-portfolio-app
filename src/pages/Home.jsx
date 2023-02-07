import project01 from "../assets/projects/01.jpg";
import project02 from "../assets/projects/02.jpg";
import project03 from "../assets/projects/03.jpg";
import project04 from "../assets/projects/04.jpg";
import project05 from "../assets/projects/05.jpg";
import project06 from "../assets/projects/06.jpg";

// import { projects } from "../mock/projects";

function Home() {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Hi, my name is <em>Yurii</em>
            </strong>
            <br />a frontend developer
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating.</p>
          </div>
          <a href="#!" className="btn">
            Download CV
          </a>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            <li className="project">
              <a href="./project-page.html">
                <img
                  src={project01}
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Gaming streaming portal</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img
                  src={project02}
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Video service</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img
                  src={project03}
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Video portal</h3>
              </a>
            </li>

            <li className="project">
              <img src={project04} alt="Project img" className="project__img" />
              <h3 className="project__title">Dating app</h3>
            </li>
            <li className="project">
              <img src={project05} alt="Project img" className="project__img" />
              <h3 className="project__title">Landing</h3>
            </li>
            <li className="project">
              <img src={project06} alt="Project img" className="project__img" />
              <h3 className="project__title">Gaming community</h3>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Home;
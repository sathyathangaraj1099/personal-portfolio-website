import "./index.css";
import Header from "./components/Header";
import ProjectDetails from "./components/ProjectDetails";

const Projects = () => (
  <>
    <Header />
    <div className="project-container">
      <h1 className="heading">
        <u className="underline">Projects</u>
      </h1>
      <div className="card1">
        <div className="details-container1">
          <h1 className="project-name">Project Name</h1>
          <p>
            I created this personal project in order to shw how to create an
            interface in Figma using a portfolio as an example.
          </p>
          <button type="button" className="view-project-button" onClick={ProjectDetails}>
            View Project
          </button>
        </div>
        <div className="image-card">
          <img
            src="file:///C:/Users/Sathya/Downloads/pexels-elly-fairytale-3823207%201.png"
            className="card-image"
            alt="card1"
          />
        </div>
      </div>

      <div className="card2">
        <div className="details-container2">
          <h1 className="project-name">Project Name</h1>
          <p>
            What was your role, your deliverables, if the project was personal,
            freelancing.
          </p>
          <button type="button" className="view-project-button">
            View Project
          </button>
        </div>
        <div className="image-card">
          <img
            src="file:///C:/Users/Sathya/Downloads/Rectangle%207.png"
            className="card-image"
            alt="card2"
          />
        </div>
      </div>

      <div className="card3">
        <div className="details-container3">
          <h1 className="project-name">Project Name</h1>
          <p>
            You can also add in this description the type of the project, if it
            was for web, mobile, electron.
          </p>
          <button type="button" className="view-project-button">
            View Project
          </button>
        </div>
        <div className="image-card">
          <img
            src="file:///C:/Users/Sathya/Downloads/Rectangle%207%20(1).png"
            className="card-image"
            alt="card3"
          />
        </div>
      </div>
    </div>
  </>
);

export default Projects;

import "./index.css";

const About = () => (
  <div className="about-container">
    <h1 className="heading">
      <u className="underline">Add Project</u>
    </h1>
    <label>Project Name</label>
    <input type="text" className="project-name-input"></input>
    <label>Project Link</label>
    <input type="text" className="project-link-input"></input>
    <label>Description</label>
    <input type="text" height={10} width={40} className="description"></input>
    <div className="add-btn-container">
      <button type="button" className="add-btn">
        Add
      </button>
    </div>
  </div>
);

export default About;

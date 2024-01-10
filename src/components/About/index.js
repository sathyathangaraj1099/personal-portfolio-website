import "./index.css";
import ProjectDetails from "../ProjectDetails";

const About = () => (
  <div className="about-container">
    <form className="add-details" onSubmit={this.addDetails}>
      <h1 className="heading">Add Project</h1>
      <label>Project Name</label>
      <input
        type="text"
        className="project-name-input"
        onChange={this.projectNameValue}
        value={projectName}
      ></input>
      <label>Project Link</label>
      <input
        type="text"
        className="project-link-input"
        onChange={this.projectLinkValue}
        value={projectLink}
      ></input>
      <label>Description</label>
      <input
        type="text"
        height={10}
        width={40}
        className="description"
        onChange={this.descriptionValue}
        value={description}
      ></input>
      <div className="add-btn-container">
        <button type="submit" className="add-btn">
          Add
        </button>
      </div>
    </form>
  </div>
);

export default About;

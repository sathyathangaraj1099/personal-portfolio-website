import { Component } from "react";
import About from "../About";
import "./index.css";

class ProjectDetails extends Component {
  state = { projectName: "", projectLink: "", description: "", updatedForm: [], };

  projectNameValue = e => {
      this.setState({projectName: e.target.value})
  }

  projectLinkValue = e => {
      this.setState({projectLink: e.target.value})
  }

  descriptionValue = e => {
      this.setState({description: e.target.value})
  }

  addDetails = e => {
      e.preventDefault()
    const {projectName, projectLink, description} = this.state
    const newValues = {
      id: v4(),
      projectNameVal: projectName,
      projectLinkVal: projectLink,
      description: description,
    }
    this.setState(prevState => ({
      updatedForm: [...prevState.updatedForm, newValues],
      projectName: '',
      projectLink: '',
      description: '',
    }))
  }

  render() {
      const {
          projectName,
          projectLink,
          description,
          updatedForm,
      } = this.state

      return (
          <>
           <ul className="result-container">
              {updatedForm.map(eachValue => (
                <li className="item-list" id={eachValue.id} key={eachValue.id}>
                  <div className="list-content">
                    <h1 className="name">{eachValue.projectNameVal}</h1>
                    <p className="link">{eachValue.projectLinkVal}</p>
                    <p className="description">{eachValue.description}</p>
                 </div>
                </li>
            </ul>
            </>
      )
  }
}

export default ProjectDetails
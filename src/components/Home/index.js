import "./index.css";

import Header from "./component/Header";
import Projects from "../Projects";

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="para-container">
        <h4 className="uiux">UI/UX DESIGNER</h4>
        <h1>Hello, my name is Madelyn Torff</h1>
        <p>
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </p>
        <div className="btn-container">
          <button type="button" className="projects-btn" onClick={Projects}>
            Projects
          </button>
          <button type="button" className="linkedin-btn">
            LinkedIn
          </button>
        </div>
      </div>
      <div className="img-container">
        <img
          src="file:///C:/Users/Sathya/AppData/Local/Temp/Rar$DIa8420.1112/image.png"
          className="girl-image"
          alt="image"
        />
      </div>
    </div>
  </>
);

export default Home;

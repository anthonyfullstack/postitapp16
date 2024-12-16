import React from "react"; // Ensure this line is present if necessary
import userImage from "../Images/user.png"; // Import a default user image

const About = () => {
  return (
    <div>
      <h1>About this project</h1>

      <p>This project is developed by: Anthony</p>
      <p>Email: anthony.madlambayan@utas.edu.om</p>
      <img src={userImage} alt="devimage" className="userImage" />
      <button>Contact developer</button>

      <h1>My first project</h1>
    </div>
  );
};

export default About;

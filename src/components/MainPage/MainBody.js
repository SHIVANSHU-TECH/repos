import react from "react";
import "./MainBody.css";
const MainBody = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <div className="header" id="myHeader">
        <h1>All Courses</h1>{" "}
      </div>
      <div id="btn">
        {" "}
        <button className="btn active" onclick="one()">
          learning
        </button>
        <button className="btn" onclick="two()">
          lets start
        </button>
        <button className="btn" onclick="three()">
          journey begins
        </button>
        <button className="btn" onclick="four()">
          best of luck
        </button>
      </div>
      <div className="row">
        <div className="column">
          <img src="images/download (1).jpg" />
          <img src="images/download (2).jpg" />
          <img src="images/download (3).jpg" />
          <img src="images/download (4).jpg" />
        </div>
        <div className="column">
          <img src="images/download (1).jpg" />
          <img src="images/download (2).jpg" />
          <img src="images/download (3).jpg" />
          <img src="images/download (4).jpg" />
        </div>
        <div className="column">
          <img src="images/download (1).jpg" />
          <img src="images/download (2).jpg" />
          <img src="images/download (3).jpg" />
          <img src="images/download (4).jpg" />
        </div>
        <div className="column">
          <img src="images/download (1).jpg" />
          <img src="images/download (2).jpg" />
          <img src="images/download (3).jpg" />
          <img src="images/download (4).jpg" />
        </div>
      </div>
    </div>
  );
};
export default MainBody;

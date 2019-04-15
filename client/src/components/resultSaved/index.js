import React from "react";
import "./style.css";

function ResultSaved(props) {
  const authors = props.authors ? props.authors.toString().split(",").join(", ") : "Not Listed";

  return (
    <div className="container">
      <div className="col s12 m7">
        <h2 className="header">{props.title}</h2>
        <div className="card horizontal">
          <div className="card-image">
            <img src={props.picture} alt="Book Cover" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>{props.description}</p>
              <p>By {authors}</p>
            </div>
            <div className="card-action">
              <a className="infoLink" href={props.info}>More Information on this Book</a>
              <button className="removeBtn" onClick={props.deleteBook} type="button">Remove from Saved</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
    
export default ResultSaved;

import React from "react";
import "./card.scss";

function index({ imageUrl, title, description, date, tag, link }) {
  return (
    <div>
      <section className="cards-wrapper">
        <div className="card-grid-space">
          <a
            className="card"
            href={link}
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          >
            <div>
              <h1>{title}</h1>
              <p>{description}</p>
              <div className="date">{date}</div>
              <div className="tags">
                <div className="tag">{tag}</div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}


export default index;

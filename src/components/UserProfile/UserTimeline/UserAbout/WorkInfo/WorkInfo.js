import React from "react";

import "./WorkInfo.css";

function WorkInfo() {
  return (
    <article className="work-info">
      {/**** header ****/}

      <div className="work-header">
        <span>Work</span>
      </div>
      <div className="work-address-info">
        <div className="work-info-item">
          <span>+</span>
        </div>

        <div className="work-info-text">
          <span>Add Work Place</span>
        </div>
      </div>

      {/**** container with persons starts ****/}

      <div className="work-container">
        <div className="work-people-container">
          <div className="work-people">
            <div className="work-avatar-caption">
              <img
                src="../img/pexels-shvets-production-7194609.jpg"
                alt="person photo"
                className="relationship-avatar"
              />
            </div>
            <div className="work-people-text">
              <span className="work-people-name">Anna Mull</span>
              <span className="work-people-status">Web Designer</span>
            </div>
          </div>

          <div className="work-people">
            <div className="work-avatar-caption">
              <img
                src="../img/pexels-becca-correia-8487441.jpg"
                alt="person photo"
                className="relationship-avatar"
              />
            </div>
            <div className="work-people-text">
              <span className="work-people-name">Paige Turner</span>
              <span className="work-people-status">Web Developer</span>
            </div>
          </div>

          <div className="work-people">
            <div className="work-avatar-caption">
              <img
                src="../img/pexels-lucas-pezeta-2112728.jpg"
                alt="person photo"
                className="relationship-avatar"
              />
            </div>
            <div className="work-people-text">
              <span className="work-people-name">Paul Molive</span>
              <span className="work-people-status">Designer</span>
            </div>
          </div>
        </div>

        <div className="work-edit-container">
          <div className="work-edit-btn">
            <span>
              <i class="fa-solid fa-pen"></i>
            </span>
            <span className="work-edit-btn-text">Edit</span>
          </div>

          <div className="work-edit-btn">
            <span>
              <i class="fa-solid fa-pen"></i>
            </span>
            <span className="work-edit-btn-text">Edit</span>
          </div>

          <div className="work-edit-btn">
            <span>
              <i class="fa-solid fa-pen"></i>
            </span>
            <span className="work-edit-btn-text">Edit</span>
          </div>
        </div>
      </div>

      {/**** container with persons ends ****/}

      {/**** header ****/}

      <div className="work-header">
        <span>Professional Skills</span>
      </div>
      <div className="work-address-info">
        <div className="work-info-item">
          <span>+</span>
        </div>

        <div className="work-info-text">
          <span>Add Professional Skills</span>
        </div>
      </div>

      {/**** header ****/}

      <div className="work-header">
        <span>College</span>
      </div>
      <div className="work-address-info">
        <div className="work-info-item">
          <span>+</span>
        </div>

        <div className="work-info-text">
          <span>Add College</span>
        </div>
      </div>

      {/**** container with persons starts ****/}

      <div className="work-container">
        <div className="work-people-container">
          <div className="work-people">
            <div className="work-avatar-caption">
              <img
                src="../img/pexels-shvets-production-7194609.jpg"
                alt="person photo"
                className="relationship-avatar"
              />
            </div>
            <div className="work-people-text">
              <span className="work-people-name">Anna Mull</span>
              <span className="work-people-status">Web Designer</span>
            </div>
          </div>
        </div>
        <div className="work-edit-container">
          <div className="work-edit-btn">
            <span>
              <i class="fa-solid fa-pen"></i>
            </span>
            <span className="work-edit-btn-text">Edit</span>
          </div>
        </div>
      </div>

      {/**** container with persons ends ****/}
    </article>
  );
}

export default WorkInfo;

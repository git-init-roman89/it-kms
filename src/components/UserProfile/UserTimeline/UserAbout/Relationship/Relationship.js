import React from "react";

import "./Relationship.css";

function Relationship() {
  return (
    <article className="relationship-info">

      {/**** header ****/}

      <div className="relationship-header">
        <span>Relationship</span>
      </div>
      <div className="relationship-address-info">
        <div className="relationship-info-item">
          <span>+</span>
        </div>

        <div className="relationship-info-text">
          <span>Add Your Relationship Status</span>
        </div>
      </div>

      <div className="relationship-header">
        <span>Websites and Social Links</span>
      </div>
      <div className="relationship-address-info">
        <div className="relationship-info-item">
          <span>+</span>
        </div>

        <div className="relationship-info-text">
          <span>Add Family Members</span>
        </div>
      </div>

      {/**** container with persons starts ****/}

      <div className="relationship-container">   {/**** holds avatars, names and edit button together ****/}

        <div className="relationship-people-container"> {/**** holds avatar and name together ****/}

          <div className="relationship-people">
            <div className="relationship-avatar-caption">
              <img
                src="../img/pexels-shvets-production-7194609.jpg"
                alt="person photo"
                className="relationship-avatar"
              />
            </div>
            <div className="relationship-people-text">
              <span className="relationship-people-name">Anna Mull</span>
              <span className="relationship-people-status">Sister</span>
            </div>
          </div>

          <div className="relationship-people">
            <div className="relationship-avatar-caption">
              <img
                src="../img/pexels-becca-correia-8487441.jpg"
                alt="person photo"
                className="relationship-avatar"
              />
            </div>
            <div className="relationship-people-text">
              <span className="relationship-people-name">Paige Turner</span>
              <span className="relationship-people-status">Cousin</span>
            </div>
          </div>

          <div className="relationship-people">
            <div className="relationship-avatar-caption">
              <img
                src="../img/pexels-lucas-pezeta-2112728.jpg"
                alt="person photo"
                className="relationship-avatar"
              />
            </div>
            <div className="relationship-people-text">
              <span className="relationship-people-name">Paul Molive</span>
              <span className="relationship-people-status">Brother</span>
            </div>
          </div>
        </div>

        <div className="relationship-edit-container">  {/**** holds all edit buttons together ****/}
          <div className="relationship-edit-btn">
            <span>
              <i class="fa-solid fa-pen"></i>
            </span>
            <span className="relationship-edit-btn-text">Edit</span>
          </div>

          <div className="relationship-edit-btn">
            <span>
              <i class="fa-solid fa-pen"></i>
            </span>
            <span className="relationship-edit-btn-text">Edit</span>
          </div>

          <div className="relationship-edit-btn">
            <span>
              <i class="fa-solid fa-pen"></i>
            </span>
            <span className="relationship-edit-btn-text">Edit</span>
          </div>
        </div>
      </div>

      {/**** container with persons ends ****/}
    </article>
  );
}

export default Relationship;

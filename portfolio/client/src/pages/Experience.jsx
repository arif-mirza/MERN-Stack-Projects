import React from "react";
import { useState } from "react";
import "../styles/Experience.css";
import Smit from "../components/Smit";
import Lablab from "../components/Lablab";
import Accountant from "../components/Accountant";
import SkillBtn from "../components/SkillBtn";
import ExperienceData from "../DB/experienceData";
function Experience() {
  const [activeComponent, setActiveComponent] = useState("one");

  return (
    <>
      <div className="py-5">
        <div className="container py-5">
          <div className="row text-center">
            <div className="col-12">
              <h1 id="section-title-03">Experience</h1>
              <h1 id="section-title-04">Experience</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-info">
                <h2 className="skill-name">Where I've Worked</h2>
                <hr className="skill-line" />
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-2">
              <div className="skill-btns">
                {ExperienceData.map((experience) => {
                  return (
                    <SkillBtn
                      key={experience.id}
                      label={experience.label}
                      isActive={activeComponent === experience.id}
                      onClick={() => setActiveComponent(experience.id)}
                    />
                  );
                })}
              </div>
            </div>
            <div className="col-12 col-md-10">
              {ExperienceData.map(
                (experience) =>
                  activeComponent === experience.id && (
                    <div key={experience.id}>{experience.component}</div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;

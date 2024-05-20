import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Masters Of Science - Computer Science"
            date="2022 — Present"
            college="MES's Abasaheb Garware College, Pune 41"
            description="Currently Pursuing"
          />
          <TimelineItem
            title="Bachelor In Science - Computer Science"
            date="2019 — 2022"
            college="AES's Tuljaram Chaturchand College, Baramati 413102"
            description="C.G.P.A = 8.45"
          />
          <TimelineItem
            title="Higher Secondary School Certificate Examination"
            date="2017 — 2019"
            college="Shri. Wardhaman Vidyalaya And Junior College, Walachandnagar 413114"
            description="Percentage = 63.85"
          />
          <TimelineItem
            title="Secondary School Certificate Examinantion"
            date="2016 — 2017"
            description="Shri. Nilkantheshwar Vidyalaya And Junior College, Lasurne 413114"
            description="Percentage = 88.20"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Business Web Solutions"
            date="Jan 2024 — May 2024"
            description="Full Stack Web Developer Intern"
          />
          <TimelineItem
            title="Oasis Infobyte"
            date="March 2024"
            description="Web Developer"
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="MERN Stack" value={90} />
          <SkillItem title="Java" value={70} />
          <SkillItem title="SQL" value={85} />
          <SkillItem title="JavaScript" value={90} />
          <SkillItem title="HTML/CSS" value={90} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;

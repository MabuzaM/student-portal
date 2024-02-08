import React from 'react';
import './Course.css';

export const Course = () => {
  return (
    <section className="Course">
      <h1 className="Course__name">Systems Development NQF5</h1>

      <div className="Module-wrapper">
        <div className="Course__progress">
          0%
        </div>

        <div className="Module Course__module">
          <div className="Module__info">
            <h2 className="Module__name">Web Development</h2>
            <h2 className="Module__instructor">Instructor: M Ncube</h2>
          </div>

          <p className="Module__description">
            In this module, you will learn about how to transform a website designed in Figma or photoshop into a working website. You will enjoy learning about and using modern web development technologies such as HTML5, CSS3, SASS, JavaScript . At t he end of t hi s module, you wi l l be able to develop and deploy your own por t fol io webs i te where you wi l l showcase al l your projec ts you have completed dur ing your s tudy t ime at GCC. And of cour se, any ot her projec ts you complete on your own and would l i ke prospec t i ve employer s to know about . Happy coding.
          </p>

          <button className="Module__Topics">Show Topics</button>
        </div>
      </div>     
    </section>
  );
}

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

      <div className="Module-wrapper">
        <div className="Course__progress">
          0%
        </div>

        <div className="Module Course__module">
          <div className="Module__info">
            <h2 className="Module__name">Project Management</h2>
            <h2 className="Module__instructor">Instructor: M Ncube</h2>
          </div>

          <p className="Module__description">
            Wel l in order to be suc ces s ful in any IT projec t , you need to have t he s k i l l s to ini t iate, plan, implement , moni tor, evaluate and complete a projec t . In t hi s module, you wi l l be equipped wi t h s k i l l s to help you manage any IT projec t , hopeful l y, you wi l l be a tech team leader one day. You need to know how to use t hose s chedul ing tool s such as Ghant t Char ts , Wor k Break Down St ruc tures (WBS) as wel l as ident i f y ing t he Cr i t i cal Pat h and es t imat ing t he durat ion of your projec t . Not onl y t hi s , you wi l l al so be taught how to proper l y al locate resources to tas k and proper l y manage t hem in order for t he projec t to bew suc ces s ful l y completed.
          </p>

          <button className="Module__Topics">Show Topics</button>
        </div>
      </div>    

      <div className="Module-wrapper">
        <div className="Course__progress">
          0%
        </div>

        <div className="Module Course__module">
          <div className="Module__info">
            <h2 className="Module__name">Advanced Database Management Systems</h2>
            <h2 className="Module__instructor">Instructor: M Ncube</h2>
          </div>

          <p className="Module__description">
            In this module, you will learn about how to transform a website designed in Figma or photoshop into a working website. You will enjoy learning about and using modern web development technologies such as HTML5, CSS3, SASS, JavaScript . At t he end of t hi s module, you wi l l be able to develop and deploy your own por t fol io webs i te where you wi l l showcase al l your projec ts you have completed dur ing your s tudy t ime at GCC. And of cour se, any ot her projec ts you complete on your own and would l i ke prospec t i ve employer s to know about . Happy coding.
          </p>

          <button className="Module__Topics">Show Topics</button>
        </div>
      </div>    

      <div className="Module-wrapper">
        <div className="Course__progress">
          50%
        </div>

        <div className="Module Course__module">
          <div className="Module__info">
            <h2 className="Module__name">Advanced Programming in Java</h2>
            <h2 className="Module__instructor">Instructor: M Ncube</h2>
          </div>

          <p className="Module__description">
            Wel l in f i r s t year, you were int roduced to programming and learn how to wr i te s t ruc tured programs us ing C++. Thi s i s t he t ime to learn how to use a modern and favored programming paradigm, t he Objec t Or iented Programming (OOP) . To do t hi s , you wi l l be learning how to wr i te programs us ing JAVA programming language. Of cour se t hi s wi l l help you get s tar ted developing Android appl i cat ions , hopeful l y you wi l l be ale develop your own appl i cat ion tat t hat wi l l show you as present at s chool even i f you are out dr ink ing at wi t h your f r iends , how cool would t hat be.
          </p>

          <button className="Module__Topics">Show Topics</button>
        </div>
      </div>    
    </section>
  );
}

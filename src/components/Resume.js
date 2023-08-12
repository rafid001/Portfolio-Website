import React from 'react';
import Header from './Header';


const Resume = () =>{
return (
  <div>
    <Header/>
    <div className="about_container">
    <object width="100%" height="1100" type="application/pdf" data="assets/resume.pdf">
      <p>PDF cannot be displayed.</p>
    </object>
      <div className="spaceAbout">
      </div>
    </div>
  </div>
);
}
export default Resume;

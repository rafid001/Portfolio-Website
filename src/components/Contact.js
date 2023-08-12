import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const contactEmail = "hrafid001@gmail.com"


const Contact = ()=>{
    return (
      <div className="contact_container">
        <h1>Get in touch.</h1>
        <p>I would be happy to further discuss my experiences with you, simply shoot me an email or message me on LinkedIn! :)</p>
        <a className="email_link" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
        <div className="social_links">
          <ul>
            <li>
              <a id="end" href={`mailto:${contactEmail}`}>
                <FaEnvelope/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rafid-hasan-860063219/">
                <FaLinkedin/>
              </a>
            </li>
            <li>
              <a href="https://github.com/rafid001">
                <FaGithub/>
              </a>
            </li>
          </ul>
        </div>
       
      </div>
    );
}

export default Contact

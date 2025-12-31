import React from 'react';
import './About.css';
import avatar from '../assets/images/pfp.jpg';
import githubIcon from '../assets/images/github-mark.svg';
import linkedinIcon from '../assets/images/linkedin.png';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-card">
          <img src={avatar} alt="avatar" className="about-avatar" />
          <h2>About Me</h2>
          <p>
            I'm a web developer focused on building accessible, performant, and
            delightful user experiences using React and modern JavaScript.
          </p>
          <div className="social-row">
            <a className="social-link" href="https://github.com/omar-sami-oss" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a className="social-link" href="https://www.linkedin.com/in/omar-sami-oss" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
          <Link to="/contact" className="btn contact-btn">Get in touch</Link>
        </div>

        <div className="about-details">
          <h3>Skills</h3>
          <ul className="skills">
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML & CSS</li>
            <li>REST APIs</li>
            <li>Responsive Design</li>
          </ul>

          <h3>Bio</h3>
          <p>
            I build interactive web applications and enjoy solving problems with
            clean, maintainable code. I collaborate well with designers and
            backend developers to ship high-quality products.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
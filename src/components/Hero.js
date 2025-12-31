import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, my name is Omar Sami</h1>
        <p>I'm a web developer passionate about creating amazing user experiences.</p>
        <Link to="/about" className="btn">Learn More</Link>
      </div>
    </section>
  );
}

export default Hero;
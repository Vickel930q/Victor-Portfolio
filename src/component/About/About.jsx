import React from 'react';
import './About.css';
import Image from 'next/image';

const About = () => {
  return (

    <section id="about" className="about">
      <div className="abt-image">
        <Image src='/ab-img.png' width={350} height={250} alt='about' />
      </div>

      <div className="abt-textt">
        <h2>About Me</h2>
        <p>I'm Victor, a passionate Frontend Developer, Graphic Designer, and Photographer with a knack for creating stunning visuals and intuitive user experiences.</p>
      </div>
    </section>
  );
};

export default About;

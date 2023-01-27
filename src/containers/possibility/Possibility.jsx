import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Artificial general intelligence (AGI), would involve creating AI that is capable of thinking and feeling in a way that is similar to human beings. AGI could have a wide range of applications, from performing complex tasks that currently require human intelligence, such as scientific research and medical diagnosis, to potentially developing emotional and social intelligence.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;

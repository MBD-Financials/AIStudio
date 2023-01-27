import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Increased efficiency',
    text: 'AI can automate repetitive tasks and process large amounts of data quickly, leading to increased efficiency and productivity.',
  },
  {
    title: 'Improved decision making',
    text: 'AI can analyze vast amounts of data and provide insights that would be difficult for humans to uncover, leading to more informed and accurate decision making.',
  },
  {
    title: 'Cost savings',
    text: 'AI can help reduce labor costs, improve operational efficiency, and optimize resource allocation, resulting in significant cost savings.',
  },
  {
    title: 'Improved security',
    text: 'AI can be used in industries such as transportation, manufacturing, and healthcare to improve safety and prevent accidents.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

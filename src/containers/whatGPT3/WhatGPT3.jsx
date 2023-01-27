import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Hey May" text="Introducing Hey May, a cutting-edge AI model that utilizes GPT-3 technology to deliver highly customized and fine-tuned results. Hey May is designed to evolve and improve as we move forward, constantly learning and adapting to better serve your needs." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="human-like chatbots is their ability to provide 24/7 customer service. They can handle a wide range of inquiries and requests, from answering frequently asked questions to processing orders." />
      <Feature title="Education" text="AI-powered educational technology, such as intelligent tutoring systems and adaptive learning platforms, can analyze student data and adjust instruction in real-time to meet the unique needs of each student." />
    </div>
  </div>
);

export default WhatGPT3;

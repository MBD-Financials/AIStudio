import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something Amazing With Hey May AI</h1>
      <p>Unlock the power of AI with our state-of-the-art studio platform. From Image generation, data analysis to model support, our user-friendly interface empowers you to easily , train and deploy custom AI models to drive business growth and efficiency.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Coming Soon" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested early access since our announcement</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;

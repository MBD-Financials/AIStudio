import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Jan 1, 2023" text="Hey May and Neural Network  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Jan 3, 2023" text="Hey May and Neural Network  AI in Business: How It's Revolutionizing Industries" />
        <Article imgUrl={blog03} date="Jan 10, 2023" text="Hey May and Neural Network  Exploring the Endless Possibilities of AI" />
        <Article imgUrl={blog04} date="Jan 17, 2023" text="Hey May and Neural Network  The Future is Here: The Impact of AI on Society" />
        <Article imgUrl={blog05} date="Jan 24, 2023" text="Hey May and Neural Network  AI Ethics: Navigating the Gray Area" />
      </div>
    </div>
  </div>
);

export default Blog;

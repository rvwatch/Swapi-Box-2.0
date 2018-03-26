import React from 'react';
import { string } from 'prop-types';
import './Scroller.css';

const Scroller = ({ title, opening_crawl }) => {
  return (
    <section className="star-wars">
      <div className="fade" />
      <div className="crawl">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <p>{opening_crawl}</p>
      </div>
    </section>
  );
};

Scroller.propTypes = {
  title: string,
  opening_crawl: string
};

export default Scroller;

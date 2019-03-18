import * as React from 'react';

import TaskGroups from '../../shared/TaskGroups';

import './Home.scss';
const Home = () => (
  <section className="home">
    <header>
      <h1>
        Things To Do
      </h1>
    </header>
    <div className="home-content">
      <TaskGroups /> 
    </div>
  </section>
);

export default Home;
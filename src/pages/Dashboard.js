/** @format */

import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);
  return (
    <main>
      <Navbar></Navbar>
      <Search></Search>
      {isLoading ? (
        <img src={loadingImage} className='loading-img' alt='loading' />
      ) : (
        <>
          <Info></Info>
          <User></User>
          <Repos></Repos>
        </>
      )}
    </main>
  );
};

export default Dashboard;

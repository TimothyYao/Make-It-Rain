/* eslint-disable global-require */
import React from 'react';
import styles from './AboutPage.css';

export function AboutPage() {
  return (
    <div className={styles.about}>
      <h1>About</h1>
      <hr></hr>
      <p> Our inspiration began in California where citizens are plagued by rough periods of drought and fire.  As the period of drought increases in California, 
        so does the presence of forest fires. These weather conditions greatly impact the population and the environment of California. </p>
      <p> Our solution? MAKE IT RAIN! </p>
      <p>Have you ever wanted to make it rain literally and figuratively?
        Make it Rain's simple platform allows individuals to make it rain
        without paper. Simply find the location of the person
        you want to send money to and swipe! </p>
    </div>
  );
}

export default (AboutPage);

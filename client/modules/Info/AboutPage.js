/* eslint-disable global-require */
import React from 'react';
import styles from './AboutPage.css';

export function AboutPage() {
  return (
    <div className={styles.about}>
      <h1>About</h1>
      <hr></hr>
      <p>Have you ever wanted to make it rain literally and figuritively?
        Make it Rain is the app for you! Find the location of the person you want
        to send it to and make it rain (HWA HWA)
      </p>
    </div>
  );
}

export default (AboutPage);

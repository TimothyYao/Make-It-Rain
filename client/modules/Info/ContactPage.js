/* eslint-disable global-require */
import React from 'react';

import styles from './ContactPage.css'
import photo from './bitCampAbout.jpg';

export function ContactPage() {
  return (
    <div className={styles.contact}>
      <h1>Contact Page</h1>
      <p>Contact Arkham City if you have any questions!</p>
      <img style={{ width: '100%' }} src={photo}></img>
    </div>
  );
}

export default (ContactPage);

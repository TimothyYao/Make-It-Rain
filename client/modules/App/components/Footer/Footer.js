import React from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './Footer.css';

export function Footer() {
  return (
    <div className={styles.footer}>
      <p>&copy; 2018 &middot; Bitcamp &middot; Arkham City Inc.</p>
      {/* <p><Link to="/contact" >Contact</Link> &middot; <Link to="/about" >About</Link></p> */}
    </div>
  );
}

export default Footer;

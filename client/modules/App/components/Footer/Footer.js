import React from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
      <p>&copy; 2018 &middot; Bitcamp &middot; Arkham City Inc.</p>
      <p><Link to="/contact" >Contact</Link> &middot; <Link to="/about" >About</Link></p>
    </div>
  );
}

export default Footer;

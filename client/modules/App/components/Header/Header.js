import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';

export function Header(props) {
  return (
    <div className={styles.header}>
      <ul className={styles.navcontainer}>
        <li className={styles.navitem}>
          <p className={styles['menu-button']} onClick={props.toggleSideBar}>&#9776;</p>
        </li>
        <li className={styles.navitem}>
          <p className={styles['site-title']}>
            <Link to="/" ><FormattedMessage id="siteTitle" /></Link>
          </p>
        </li>
        <li className={styles.navitem}>
          <p className={styles['money-button']}>
            <Link to="/raining">$</Link>
          </p>
        </li>
      </ul>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;

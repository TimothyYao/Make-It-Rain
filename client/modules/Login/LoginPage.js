/* eslint-disable global-require */
import React from 'react';
import styles from './LoginPage.css';


export function LoginPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Login</h1>
      <form>
        <div className={styles.pic}></div>
        <div>
          <label>
            Username:
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default (LoginPage);

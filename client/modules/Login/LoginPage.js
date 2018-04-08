/* eslint-disable global-require */
import React from 'react';
import styles from './LoginPage.css';


export function LoginPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        <font color="#1D65A6">W</font>
        <font color="#00743F">e</font>
        l
        <font color="#1D65A6">c</font>
        <font color="#00743F">o</font>
        m
        <font color="#1D65A6">e</font>
      </h1>
      <form>
        <div className={styles.pic}></div>
        <div>
          <center><table>
            <tr>
              <td>
                Username:&nbsp;&nbsp;&nbsp;
                <input type="text" name="name" placeholder=" Username" />
              </td>
            </tr>
            <tr>
              <td>
                Password:&nbsp;&nbsp;&nbsp;
                <input type="password" name="password" placeholder=" Password" />
              </td>
            </tr>
            <tr>
              <td><small><a href="">Forget your password?</a></small></td>
            </tr>
            <tr>
              <td><input type="submit" value="Submit" className={styles.submitButton} /></td>
            </tr>
          </table></center>
        </div>
      </form>
    </div>
  );
}

export default (LoginPage);

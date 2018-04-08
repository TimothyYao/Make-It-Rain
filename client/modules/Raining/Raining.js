/* eslint-disable global-require */
import React from 'react';
import styles from './Raining.css';
import Swipe from 'react-easy-swipe';


class Raining extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fade: false,
      dollars: 0,
    };
    this.fadingDone = this.fadingDone.bind(this);
  }
  componentDidMount() {
    const elm = this.refs.button;
    elm.addEventListener('animationend', this.fadingDone);
  }
  componentWillUnmount() {
    const elm = this.refs.button;
    elm.removeEventListener('animationend', this.fadingDone);
  }
  fadingDone() {
    // will re-render component, removing the animation class
    this.setState({ fade: false });
  }
  cashing = () => {
    this.setState({
      fade: true,
      dollars: this.state.dollars + 1,
    });
    setTimeout(() => {
      this.setState({
        fade: false,
      });
    }, 200);
  };

  render() {
    const fade = this.state.fade;
    return (
      <div className={styles.container}>
        <div className={styles.money}>
          <Swipe
            onSwipeUp={this.cashing}
            allowMouseEvents={true}
          >
            <div
              className={styles.money}
              onClick={this.cashing}
              className={fade ? `${styles.money} ${styles.cashing}` : styles.money}
            >
            </div>
          </Swipe>
        </div>
        <div className={styles.info}>
          <h1>Dollars: {this.state.dollars}</h1>
        </div>
      </div>
    );
  }
}

export default (Raining);

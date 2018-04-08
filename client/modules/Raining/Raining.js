/* eslint-disable global-require */
import React from 'react';
import styles from './Raining.css';


class Raining extends React.Component {
  constructor(props) {
    super(props);
    this.updatePosition = this.updatePosition.bind(this);
    this.next = this.next.bind(this);

    this.state = {
      images: [],
      slidesLength: null,
      currentPosition: 0,
      slideTransform: 0,
      interval: null,
    };
  }

  componentDidMount() {
    this.hammer = hammer(this._slider);
    this.hammer.on('swipeleft', this.next);
  }

  componentWillUnmount() {
    this.hammer.off('swipeleft', this.next());
    this.hammer.off('swiperight', this.prev());
  }

  updatePosition(nextPosition) {
    const { visibleItems, currentPosition } = this.state;
    return nextPosition;
  }

  next() {
    console.log('swipe');
    const currentPosition = this.updatePosition(this.state.currentPosition - 10);
    this.setState({ currentPosition });
  }


  handleSwipe() {
    console.log('swipe');
  }

  render() {
    return (
      <div>
        <div className={styles.money}></div>
        {/* <Hammer
          onSwipe={handleSwipe}
        >
          <div className={styles.money}></div>
        </Hammer> */}
      </div>
    );
  }
}

export default (Raining);

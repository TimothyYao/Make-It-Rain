import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Sidebar from 'react-sidebar';

// Import Style
import styles from './App.css';
import scrooge from './scrooge-mcduck.png';

// Import Components
import Helmet from 'react-helmet';
// import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import Actions
import { toggleAddPost } from './AppActions';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      sideBarOpen: false,
      docked: props.docked,
      open: props.open,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentDidMount() {
    this.setState({ isMounted: true }); // eslint-disable-line
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };

  toggleSideBar = () => {
    this.setState({ sidebarOpen: !this.state.open });
  };

  closeSideBar = () => {
    this.setState({ sidebarOpen: false });
  }

  render() {
    let sidebarContent = (
      <div className={styles.sidebar}>
        <img styles={{ width: '30px' }} src='https://images.forbes.com/media/lists/fictional/2011/scrooge-mcduck.png'></img>
        <b>Scrooge McDuck</b>
        <hr></hr>
        <a href="#">QR Code</a>
        <Link onClick={this.closeSideBar} to="/map">
          Location
        </Link>
        <a href="#">History</a>
        <a href="#">Settings</a>
        <Link onClick={this.closeSideBar} to="/contact">
          Contact
        </Link>
        <Link onClick={this.closeSideBar} to="/about">
          About
        </Link>
      </div>
    );

    let sidebarProps = {
      sidebar: this.state.sidebarOpen,
      docked: this.state.sidebarDocked,
      onSetOpen: this.onSetSidebarOpen,
    };
    return (
      <div>
        <Helmet
          title="Make it Rain Boys"
          titleTemplate="%s - Finance App"
          meta={[
            { charset: 'utf-8' },
            {
              'http-equiv': 'X-UA-Compatible',
              content: 'IE=edge',
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
            },
            {
              name: 'apple-mobile-web-app-capable',
              content: 'yes',
            },
            {
              name: 'apple-mobile-web-app-status-bar-style',
              content: 'black-translucent',
            },
          ]}
        />
        <Sidebar
          sidebar={sidebarContent}
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
        >
          <Header
            intl={this.props.intl}
            toggleSideBar={this.toggleSideBar}
            toggleAddPost={this.toggleAddPostSection}
          />
          <div className={styles.container}>
            {this.props.children}
          </div>
          {
            this.props.location.pathname === '/raining'
              ? null
              : <Footer />
          }
        </Sidebar>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);

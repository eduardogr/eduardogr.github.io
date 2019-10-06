import React from 'react';
import injectSheet from 'react-jss'
import logo from './logo.svg';

const stylesheet = {    
    'app': {
        'textAlign': 'center'
    },

    'appLogo': {
    height: '40vmin'
    },

    'appHeader': {
        'backgroundColor': '#282c34',
        'minHeight': '100vh',
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'fontSize': 'calc(10px + 2vmin)',
        'color': 'white'
    },

    'appLink': {
        'color': '#09d3ac'
    }
}

const App = ({
    classes,
}) => {
    return (
        <div className={classes.app}>
          <header className={classes.appHeader}>
            <img src={logo} className={classes.appLogo} alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className={classes.appLink}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
};

export default injectSheet(stylesheet)(App);

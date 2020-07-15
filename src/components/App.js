import React from 'react';
import injectSheet from 'react-jss'

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import { profileAvatar } from '../resources'

const stylesheet = {    
    'app': {
        'textAlign': 'center',
    },

    'appLogo': {
      'height': '40vmin',
      'pointerEvents': 'none'
    },

    'appHeader': {
        'backgroundColor': '#ffecba',
        'minHeight': '5vh',
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'fontSize': 'calc(10px + 2vmin)',
        'color': 'white'
    },

    'main': {
      'backgroundColor': '#ffecba',
      'minHeight': '95vh',
      'display': 'flex',
      'flexDirection': 'column',
      'alignItems': 'center',
      'justifyContent': 'center',
      'fontSize': 'calc(10px + 2vmin)',
      'color': '#b35718'
    },

    'appLink': {
        'color': '#61dafb'
    }
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(45),
    height: theme.spacing(45),
  },
}));

const App = ({
    classes,
}) => {
  const moreClasses = useStyles();

  return (
      <div className={classes.app}>
        <header className={classes.appHeader}>
        </header>
        <div className={classes.main}>
          <Avatar src={profileAvatar} className={moreClasses.large} alt="profile" />
          <p>
            Hi! This will be my web page soon!
          </p>
        </div>
      </div>
    );
};

export default injectSheet(stylesheet)(App);

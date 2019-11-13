import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'; // make sure you add this for firestore

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { firebase as fbConfig, reduxFirebase as rfConfig } from 'config';
import firebase from 'firebase/app';
import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import { createFirestoreInstance } from 'redux-firestore';
import ThemeSettings from 'theme';

const theme = createMuiTheme(ThemeSettings);

// Initialize Firebase instance
firebase.initializeApp(fbConfig);

function App({ routes, store }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <ReactReduxFirebaseProvider
          firebase={firebase}
          config={rfConfig}
          dispatch={store.dispatch}
          createFirestoreInstance={createFirestoreInstance}
        >
          <Router>{routes}</Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  routes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default App;

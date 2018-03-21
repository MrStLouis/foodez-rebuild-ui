/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// Apollo related
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const {
  REACT_APP_GRAPHQL_PORT,
} = process.env;

// TODO: add production credentials and uri
const client = new ApolloClient({
  link: new HttpLink({
    uri: `http://localhost:${REACT_APP_GRAPHQL_PORT}/graphql`,
    credentials: 'include',
  }),
  shouldBatch: true,
  cache: new InMemoryCache(),
});

const store = createStore(reducers);

injectTapEventPlugin();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
);
registerServiceWorker();

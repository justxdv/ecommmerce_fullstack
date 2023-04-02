import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
    domain = {process.env.REACT_APP_DOMAIN}
    clientId= {process.env.REACT_APP_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
        <Provider store={store}>
            <PersistGate loading={"loading"} persistor={persistor}>
             <App />
            </PersistGate>
        </Provider>
        </Auth0Provider>
);


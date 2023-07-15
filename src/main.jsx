import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store, { persistore } from './redux/store.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import Router from './router/index.jsx'
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistore}>
      <RouterProvider router={Router} />
    </PersistGate>
  </Provider>
)

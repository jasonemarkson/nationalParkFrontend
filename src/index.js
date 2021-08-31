import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// thunk allows you to create functions with dispatching 
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { rootReducer } from './reducers/RootReducer'

const store = createStore(
  // 1. reducer 2. dev tools
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <Router> 
        <App />
     </Router>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



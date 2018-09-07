import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

// import store from './store'
import Root from './components/root'

render(
  <Provider >
    <Router>
      <Root />
    </Router>
  </Provider>,
  document.getElementById('main')
)


// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <div>Hello, world!</div>,
//   document.getElementById('main') // make sure this is the same as the id of the div in your index.html
// );

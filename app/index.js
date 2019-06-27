import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/_app/App';
const rootEl = document.getElementById('root');
ReactDOM.render(<App />, rootEl);

if (module.hot) {
    module.hot.accept('./components/_app/App', () => {
      const NextApp = require('./components/_app/App').default
      ReactDOM.render(
        <NextApp />,
        rootEl
      )
    })
}

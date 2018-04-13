import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import App from './containers/App';

import registerServiceWorker from './static/js/registerServiceWorker';
import 'tachyons';

ReactDOM.render(<App/> , document.getElementById('root'));
registerServiceWorker();

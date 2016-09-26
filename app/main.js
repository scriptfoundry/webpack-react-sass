import '../sass/screen.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application.jsx';

ReactDOM.render(<Application phrase="main" />, document.querySelector('.app'));
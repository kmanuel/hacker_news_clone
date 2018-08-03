import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Root from './Root';
import Navigation from './components/Navigation';
import Newest from './components/Newest';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <div className="page">
                <Navigation />
                <Route path="/" component={Newest}/>
            </div>
        </BrowserRouter>
    </Root>
    , document.getElementById('root'));
registerServiceWorker();

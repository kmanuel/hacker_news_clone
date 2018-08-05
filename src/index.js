import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.less';
import registerServiceWorker from './registerServiceWorker';
import Root from './Root';
import Navigation from './components/Navigation';
import Newest from './components/Newest';
import StoryDetail from './components/StoryDetail/index';
import Footer from './components/Footer';

ReactDOM.render(
    <Root>
        <BrowserRouter basename="/hacker_news_clone">
            <div className="page">
                <Navigation />
                <div>
                    <Route exact path="/" component={Newest}/>
                    <Route path="/stories/:id" component={StoryDetail}/>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    </Root>
    , document.getElementById('root'));
registerServiceWorker();

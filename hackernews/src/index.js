import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import ExplainBindingsComponent from './ExplainBind'
import EventHandling from './EventHandling'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
                <div>
                    <App />
                    <App2 />
                    <ExplainBindingsComponent />
                    <hr/>
                    <EventHandling />
                </div>
                )
                , document.getElementById('root'));

/*
// foolin around
const element = <h1>Hello, world!</h1>;

ReactDOM.render(
    element,

    document.getElementById('root')
);
*/

registerServiceWorker(); // not strictly needed; used to cache assets

if (module.hot) {
    module.hot.accept();
}
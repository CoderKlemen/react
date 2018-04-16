import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import ExplainBindingsComponent from './ExplainBind'
import EventHandling from './EventHandling'
import Toggle from './Toggle'
import NameForm from './Form'
import registerServiceWorker from './registerServiceWorker';
import AppOld1 from './App_oldVersion1';
import Composition1 from './Composition1';

ReactDOM.render((
                <div>
                    <App />
                    <AppOld1 />
                    <App2 />
                    <ExplainBindingsComponent />
                    <EventHandling />
                    <Toggle />
                    <NameForm />
                    <Composition1 />
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
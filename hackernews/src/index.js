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
import Composition1 from './Composition1';
import StyledComponent from './StyledComponent';
import Clock from './Clock'
import ErrorBoundary from './ErrorBoundary'
import Synthetic from './Synthetic';
import LoginControl from './LoginControl';
import Page from './Page';
import Counter from './Counter';
import Log from './test/i_head'

ReactDOM.render((
                <div>
                    <ErrorBoundary>
                        <App />
                        <App2 />
                        <h3>--Different components--</h3>
                        <ExplainBindingsComponent />
                        <EventHandling />
                        <Toggle />
                        <NameForm />
                        <Composition1 />
                        <StyledComponent />
                    </ErrorBoundary>
                </div>
                )
                , document.getElementById('root'));


ReactDOM.render((
            <div>
                <h3>--Different components--</h3>
                <Log />
                <Clock />
                <Synthetic />
                <LoginControl />
                <Page />
                <Counter />
            </div>
            )
            , document.getElementById('my_root'));

registerServiceWorker(); // not strictly needed; used to cache assets


if (module.hot) {
    module.hot.accept();
}
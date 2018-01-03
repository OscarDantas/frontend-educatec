import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app'

<<<<<<< HEAD
=======
import './index.less'

>>>>>>> 113eee1c5420217209bd600e03b4c4684bf63712
const target = document.querySelector('#root')

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
<<<<<<< HEAD
            <div style={{ height: '100%' }}>
=======
            <div>
>>>>>>> 113eee1c5420217209bd600e03b4c4684bf63712
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    target
);

registerServiceWorker();
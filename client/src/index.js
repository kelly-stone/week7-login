import React from 'react';
import ReactDOM from 'react-dom';

// import App from './components/App';
import NavigationBar from './components/NavigationBar'

import * as serviceWorker from './serviceWorker';

import logger from 'redux-logger' // 3)写在{createStore, applyMiddleware}，同时也写在createStore里面
import { composeWithDevTools } from 'redux-devtools-extension'// 2) 写在createstore 里面

import thunk from 'redux-thunk' //4)

import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'

import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducers' // 1) 建立reducers folder, 里面包括auth.js and index.js. 然后这个就注入下面createstore里面

import { Provider } from 'react-redux'

const store = createStore(
    rootReducer,                    //1）
    composeWithDevTools(            //2）
    applyMiddleware(thunk,logger)     //3）4)
    )

)

ReactDOM.render(
    <Provider store={ store }>
    <Router routes={routes}>
        <div>
          <NavigationBar />
          { routes }
        </div>
    </Router>
    </Provider>,
    document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

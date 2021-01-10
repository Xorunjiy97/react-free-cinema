import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { createStore } from 'redux';
// import rootReducer from './rootReducer/rootReducer';
// import { Provider } from 'react-redux';



    // const store = createStore(rootReducer)
    // window.store = store;

    ReactDOM.render(
        // <Provider store={store}>
            <App />,
            document.getElementById('root')
        // </Provider>,
    );



import React from 'react';
import ReactDOM from 'react-dom';

// components
import ComponentA from "./components/ComponentsA/ComponentA";
import ComponentB from "./components/ComponentsB/ComponentB";
import AppContainer from "./components/AppContainer";

// router
import {Router, Route} from "react-router";
import { HashRouter } from 'react-router-dom'

// redux
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {persistStore, autoRehydrate} from "redux-persist";
import {asyncSessionStorage} from "redux-persist/storages";

// reducer
import reducers from "./reducers/index";
// store
export const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(...[thunk]),
    autoRehydrate()
  )
);

// sync store with storage
persistStore(store, {storage: asyncSessionStorage}, () => {
  console.log('store rehydration complete');
});

ReactDOM.render(
  (<Provider store={store}>
      <HashRouter>
        <Route exact={true} path="/" component={AppContainer}>
          <Route path="componentA" component={ComponentA}/>
          <Route path="componentB" component={ComponentB}/>
        </Route>
      </HashRouter>
    </Provider>),
  document.getElementById('root')
);
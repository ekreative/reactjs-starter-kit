# React JS Starter Kit

* Creating application with [create-react-app](https://github.com/facebookincubator/create-react-app) (update before start) or in custom way 
* Using [Webpack](https://github.com/webpack/webpack) as modules bundler
* Use SCSS for styling: pre-processing [config](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc) for `create-react-app` or you custom webpack pre-processing
* Libs:
    * for routing [react-router](https://github.com/ReactTraining/react-router) (optional with [react-router-redux](https://github.com/reactjs/react-router-redux) if you want sync you router with redux)
    * [redux](http://redux.js.org/docs/basics/UsageWithReact.html) and [react-redux](https://github.com/reactjs/react-redux) if you want have global state of your application, and sync your components with this state
        * for redux you have to use middlewear [redux-thunk](https://github.com/gaearon/redux-thunk)
        * recommended using with redux [redux-persist](https://github.com/rt2zz/redux-persist) to sync redux store with storage
    * [immutability-helper](https://github.com/kolodny/immutability-helper) for immutable updates
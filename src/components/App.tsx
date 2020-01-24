// @ts-ignore
import React from "react";
// router
import { Route, Switch } from "react-router";
import { HashRouter, Link, RouteComponentProps } from "react-router-dom";
// components
import ComponentAContainer from "./ComponentsA/ComponentAContainer";
import ComponentBContainer from "./ComponentsB/ComponentBContainer";
import PersonContainer from "./Person/PersonContainer";
import PlanetContainer from "./Planets/PlanetContainer";
import StarshipsContainer from "./Starships/StarshipsContainer";
// @ts-ignore
import logo from "../assets/images/logo.svg";
import "./App.scss";
import { IProps } from "./AppInterfaces";

const NotFound = () => {
  return (
    <Route
      render={({ staticContext }: RouteComponentProps<string, any, string>) => {
        if (staticContext) {
          staticContext.status = 404;
        }
        return (
          <div>
            <h1>Sorry, can’t find that.</h1>
          </div>
        );
      }}
    />
  );
};

export const App: React.FC<IProps> = props => {
  return (
    <HashRouter>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div>
          <ul>
            <li>
              <Link to="/">AppContainer(Home)</Link>
            </li>
            <li>
              <Link to="/componentA">ComponentAContainer</Link>
            </li>
            <li>
              <Link to="/componentB">ComponentBContainer</Link>
            </li>
            <li>
              <Link to="/componentPerson">componentPerson</Link>
            </li>
            <li>
              <Link to="/componentPlanet">componentPlanet</Link>
            </li>
            <li>
              <Link to="/componentStarships">componentStarships</Link>
            </li>
          </ul>
        </div>

        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <div>
                    <h2>Welcome to App</h2>
                    <p className="App-intro">
                      <code>src/components/App.js</code>
                    </p>
                    <p>Value: {props.value}</p>
                    <p>
                      <button
                        onClick={() =>
                          props.changeStateProp("value", 0, "main")
                        }
                      >
                        Reset to "0"
                      </button>
                    </p>
                  </div>
                );
              }}
            />
            <Route path="/componentA" component={ComponentAContainer} />
            <Route path="/componentPerson" component={PersonContainer} />
            <Route path="/componentPlanet" component={PlanetContainer} />
            <Route path="/componentStarships" component={StarshipsContainer} />
            <Route
              path="/componentB"
              render={obj => {
                return (
                  <ComponentBContainer
                    {...obj}
                    description="Value (custom description)"
                  />
                );
              }}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
};

App.defaultProps = {
  value: 0,
  changeStateProp: () => {},
  myCustomPropsFunc: () => {}
};

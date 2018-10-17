import "bootstrap-loader";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Routes }  from "components";
import { users } from "./redux/modules/users/users"

const store = createStore(users, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById("app")
);

// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { users } from "../../redux/modules/users/users"
import { Main } from "components";
import { Home } from "modules";

describe("Main component tests", () => {
    it("Check Main Component Render", () => {
        const store = createStore(users, applyMiddleware(thunk));
        const component = renderer.create(<Provider store={store}><Router><Main path="/home" component={Home} checkAuthentication={false} /></Router></Provider>).toJSON();
        expect(component).toMatchSnapshot();
    });
});
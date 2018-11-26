// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import React from "react";
import renderer from "react-test-renderer";
import { Navigation } from "components";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { users } from "../../redux/modules/users/users"

describe("Navigation component tests", () => {
    it("Check Navigation Component Render", () => {
        const store = createStore(users, applyMiddleware(thunk));
        const component = renderer.create(<Provider store={store}><Router><Navigation history={[]} /></Router></Provider>).toJSON();
        expect(component).toMatchSnapshot();
    });
});
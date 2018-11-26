// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import React from "react";
import renderer from "react-test-renderer";
import { Routes } from "components";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { users } from "../../redux/modules/users/users"

describe("Routes component tests", () => {
    it("Check Routes Component Render", () => {
        const store = createStore(users, applyMiddleware(thunk));
        const component = renderer.create(<Provider store={store}><Routes /></Provider>).toJSON();
        expect(component).toMatchSnapshot();
    });
});
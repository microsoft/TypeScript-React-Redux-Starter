// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import React from "react";
import renderer from "react-test-renderer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { users } from "../../redux/modules/users/users"
import { Home } from "modules";

describe("Home component tests", () => {
    it("Check Home Component Render", () => {
        const store = createStore(users, applyMiddleware(thunk));
      const component = renderer.create(<Provider store={store}><Home history={[]} /></Provider>).toJSON();
      expect(component).toMatchSnapshot();
    });
});
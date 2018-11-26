// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import React from "react";
import renderer from "react-test-renderer";
import { NotFound } from "components";

describe("NotFound component tests", () => {
    it("Check NotFound Component Render", () => {
        const component = renderer.create(<NotFound />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
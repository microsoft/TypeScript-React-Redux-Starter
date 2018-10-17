import React from "react";
import renderer from "react-test-renderer";
import { NotFound } from "components";

describe("NotFound component tests", () => {
    it("Check NotFound Component Render", () => {
        const component = renderer.create(<NotFound />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
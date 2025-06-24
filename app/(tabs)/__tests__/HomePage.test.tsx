import { render } from "@testing-library/react-native";
import React from "react";
import HomeScreen from "../index";

describe("HomeScreen", () => {
  it("renders correctly", () => {
    const tree = render(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

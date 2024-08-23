import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { expect } from "@storybook/test";
import * as stories from "./button.stories";

const { Default } = composeStories(stories);

test("Default", () => {
  render(<Default {...Default.args} />);
  const buttonElement = screen.getByText(/Default Button/i);
  expect(buttonElement).toHaveTextContent(/Default Button/i);
});

import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import * as stories from "./button.stories";
import { QueryClientWrapper } from "@/utils";

const { Default } = composeStories(stories);

test("Default 속성을 가진 버튼이 화면에 보인다.", () => {
  render(<Default {...Default.args} />);
  const buttonElement = screen.getByText(/Default Button/i);
  expect(buttonElement).toHaveTextContent(/Default Button/i);
});

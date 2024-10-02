import { Meta, StoryObj } from "@storybook/react";
import { Rating } from "./rating";

const meta: Meta<typeof Rating> = {
  title: "Components/Rating",
  component: Rating,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  render: (argTypes) => {
    return <Rating rate={argTypes.rate} />;
  },
  args: {
    rate: 4,
  },
  argTypes: {
    rate: {
      control: { type: "number" },
      description: "평점을 의미하는 숫자입니다 (1~5 자연수)",
    },
  },
};

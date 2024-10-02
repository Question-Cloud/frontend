import { Meta, StoryObj } from "@storybook/react";
import { Workbook } from "./workbook";
import { Rating } from "../Rating";
import { Badge } from "../Badge";

const meta: Meta<typeof Workbook> = {
  title: "Components/Workbook",
  component: Workbook,
  argTypes: {
    data: {
      description: "문제집의 데이터입니다.",
    },
    onDownload: {
      description: "문제집을 다운로드하는 버튼입니다.",
    },
    onEdit: {
      description: "문제집을 편집하는 버튼입니다.",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Workbook>;

export const Default: Story = {
  render: () => (
    <Workbook
      data={{ id: 1, title: "1번째 문제집", createdAt: "2024.01.01", questionCount: 13 }}
      onDownload={() => console.log("Download")}
      onEdit={() => console.log("Edit")}
    />
  ),
};

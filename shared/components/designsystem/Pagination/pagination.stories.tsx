import { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { Pagination } from "./pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (argTypes) => {
    const [currentPage, setCurrentPage] = useState<number>(argTypes.currentPage);

    useEffect(() => {
      setCurrentPage(argTypes.currentPage);
    }, [argTypes.currentPage]);

    return <Pagination {...argTypes} currentPage={currentPage} setCurrentPage={setCurrentPage} />;
  },
  args: {
    totalContent: 87,
    contentPerPage: 10,
    currentPage: 1,
  },
  argTypes: {
    totalContent: {
      control: { type: "number" },
      description: "전체 데이터의 개수입니다.",
    },
    contentPerPage: {
      control: { type: "number" },
      description: "페이지당 노출할 데이터의 개수입니다.",
    },
    currentPage: {
      control: { type: "number" },
      description: "현재 위치한 페이지입니다.",
    },
    setCurrentPage: {
      action: "setValue",
      description: "페이지를 핸들링하는 함수입니다.",
    },
  },
};

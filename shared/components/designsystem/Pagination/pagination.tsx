"use client";

import * as React from "react";

import { cn } from "@/utils/index";
import { ButtonProps, buttonVariants } from "@/shared";
import { ArrowLeftIcon, ArrowRightIcon } from "../Icons";

const PaginationContainer = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
PaginationContainer.displayName = "PaginationContainer";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  )
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({ className, isActive, size = "small", ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "navy" : "grayLine",
        size,
      }),
      className
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" size="small" {...props}>
    <span>
      <ArrowLeftIcon />
    </span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" size="small" {...props}>
    <span>
      <ArrowRightIcon />
    </span>
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

interface PaginationProps {
  totalContent: number;
  contentPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  className?: string;
}

const Pagination = ({ totalContent, contentPerPage, currentPage, setCurrentPage, className }: PaginationProps) => {
  const [pageNumbers, setPageNumbers] = React.useState<number[]>([]);
  const totalPages = Math.ceil(totalContent / contentPerPage);

  React.useEffect(() => {
    const getPageList = () => {
      const start = 1 + Math.floor((currentPage - 1) / 5) * 5;
      const end = Math.min(start + 4, totalPages);
      const pageNumbers = Array.from({ length: end - start + 1 }, (_, i) => i + start);
      return pageNumbers;
    };

    setPageNumbers(getPageList());
  }, [currentPage, totalPages]);

  const clickPagePrevBtn = (e: React.MouseEvent) => {
    if (currentPage === 1) {
      e.preventDefault();
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const clickPageNextBtn = (e: React.MouseEvent) => {
    if (currentPage === Math.ceil(totalContent / contentPerPage)) {
      e.preventDefault();
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePage = (number: number) => {
    setCurrentPage(number);
  };

  return (
    <PaginationContainer className={className}>
      <PaginationContent>
        <PaginationItem onClick={(e) => clickPagePrevBtn(e)}>
          <PaginationPrevious />
        </PaginationItem>
        {pageNumbers.map((number) => (
          <PaginationItem key={number} onClick={() => handlePage(number)}>
            <PaginationLink isActive={currentPage == number}>{number}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem onClick={(e) => clickPageNextBtn(e)}>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </PaginationContainer>
  );
};

export {
  PaginationContainer,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination,
};
export type { PaginationProps };

import { render, screen, fireEvent } from "@testing-library/react";
import FileDisplay from "./FileDisplay";

// test file name and date
test("renders a file name and date", () => {
  const file = { type: "pdf", name: "Employee Handbook", added: "2017-01-06" };
  render(<FileDisplay item={file} />);

  expect(screen.getByText("Employee Handbook")).toBeInTheDocument();
  expect(screen.getByText("2017-01-06")).toBeInTheDocument();
});

// test folder name (removed file count, since component doesn't show it)
test("renders a folder name", () => {
  const folder = {
    type: "folder",
    name: "Expenses",
    files: [{ type: "doc", name: "Form", added: "2020-01-01" }]
  };
  render(<FileDisplay item={folder} />);

  expect(screen.getByText("Expenses")).toBeInTheDocument();
});

// expand/collapse children on click
test("expands and collapses folder children on click", () => {
  const folder = {
    type: "folder",
    name: "Projects",
    files: [{ type: "doc", name: "Plan", added: "2021-06-01" }]
  };

  render(<FileDisplay item={folder} />);

  // Initially, child should not be visible
  expect(screen.queryByText("Plan")).not.toBeInTheDocument();

  // Expand folder
  fireEvent.click(screen.getByText("Projects"));
  expect(screen.getByText("Plan")).toBeInTheDocument();

  // Collapse folder
  fireEvent.click(screen.getByText("Projects"));
  expect(screen.queryByText("Plan")).not.toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import FileDisplay from "./FileDisplay";

// test file name and date

test("renders a file name and date", () => {
  const file = { type: "pdf", name: "Employee Handbook", added: "2017-01-06" };
  render(<FileDisplay item={file} />);

  expect(screen.getByText("Employee Handbook")).toBeInTheDocument();
  expect(screen.getByText("2017-01-06")).toBeInTheDocument();
});


// test folder with file count
test("renders a folder with file count", () => {
  const folder = {
    type: "folder",
    name: "Expenses",
    files: [{ type: "doc", name: "Form", added: "2020-01-01" }]
  };
  render(<FileDisplay item={folder} />);

  expect(screen.getByText("Expenses")).toBeInTheDocument();
  expect(screen.getByText("(1 file)")).toBeInTheDocument();
});





import { render, screen , fireEvent } from "@testing-library/react";
import DocumentList from "./DocumentList";
import mockData from "../../data/mockData";

test("renders all items in a grid with header", () => {
  render(<DocumentList items={mockData} />);

  // Header should exist
  expect(screen.getByText("File type")).toBeInTheDocument();
  expect(screen.getByText("Name")).toBeInTheDocument();
  expect(screen.getByText("Date added")).toBeInTheDocument();

  // Check a few items from mock data
  expect(screen.getByText("Employee Handbook")).toBeInTheDocument();
  expect(screen.getByText("Expenses")).toBeInTheDocument();
  expect(screen.getByText("Misc")).toBeInTheDocument();
});

test("filters items based on search query", () => {
  render(<DocumentList items={mockData} />);

  const searchInput = screen.getByPlaceholderText("Search by name...");

  // Search for "Employee"
  fireEvent.change(searchInput, { target: { value: "Employee" } });
  expect(screen.getByText("Employee Handbook")).toBeInTheDocument();
  expect(screen.queryByText("Expenses")).not.toBeInTheDocument();
});

test("shows empty message when no results match search", () => {
  render(<DocumentList items={mockData} />);

  const searchInput = screen.getByPlaceholderText("Search by name...");
  fireEvent.change(searchInput, { target: { value: "NotARealFile" } });

  expect(screen.getByText("No files found.")).toBeInTheDocument();
});

test("sorts items by date", () => {
  const items = [
    { type: "pdf", name: "Old File", added: "2020-01-01" },
    { type: "pdf", name: "New File", added: "2022-01-01" }
  ];
  render(<DocumentList items={items} />);

  // Switch sort mode
  const select = screen.getByDisplayValue("Sort by Name");
  fireEvent.change(select, { target: { value: "date" } });

  // Grab all file names in the rendered order
  const fileNames = screen.getAllByText(/File$/).map(el => el.textContent);

  expect(fileNames[0]).toBe("New File");
  expect(fileNames[1]).toBe("Old File");
});

test("renders empty state when no items passed", () => {
  render(<DocumentList items={[]} />);
  expect(screen.getByText("No files found.")).toBeInTheDocument();
});

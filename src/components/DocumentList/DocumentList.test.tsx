import { render, screen } from "@testing-library/react";
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

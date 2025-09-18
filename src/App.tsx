import * as React from "react";
import DocumentList from "./components/DocumentList/DocumentList";
import mockData from "./data/mockData";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Document Viewer</h1>
      <DocumentList items={mockData} />
    </div>
  );
}

export default App;


import * as React from 'react';
import FileDisplay from "./components/FileDisplay/FileDisplay";
import mockData from "./data/mockData";

import './App.css';

function App() {
  const firstItem = mockData[0];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Document Viewer</h1>
      <FileDisplay item={firstItem} />
    </div>
  );
}

export default App;



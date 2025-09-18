
import DocumentList from "./components/DocumentList/DocumentList";
import mockData from "./data/mockData";

import './App.css'

function App() {
  return (
    <div className="document-viewer">
      <h1 className="main-headline">Document Viewer</h1>
      <DocumentList items={mockData} />
    </div>
  );
}

export default App;

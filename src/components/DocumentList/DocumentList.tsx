import React, {useState} from "react";
import FileDisplay from "../FileDisplay/FileDisplay";

type FileItem = {
  type: string;
  name: string;
  added?: string;
  files?: FileItem[];
};

interface Props {
  items: FileItem[];
}

const DocumentList: React.FC<Props> = ({ items }) => {

  const [query, setQuery] = useState("");
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto bg-white shadow rounded">
    {/* Search input */}
    <div className="p-2 border-b">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search by name..."
        className="w-full p-2 border rounded"
      />
    </div>

    {/* Header */}
    <div className="grid grid-cols-3 gap-4 p-2 font-bold border-b bg-gray-100">
      <div>File type</div>
      <div>Name</div>
      <div>Date added</div>
    </div>

    {/* File rows */}
    {filteredItems.map((item, idx) => (
      <FileDisplay key={idx} item={item} />
    ))}

    {/* Optional: show message if no results */}
    {filteredItems.length === 0 && (
      <div className="p-4 text-center text-gray-500">No files found.</div>
    )}
  </div>
  );
};

export default DocumentList;

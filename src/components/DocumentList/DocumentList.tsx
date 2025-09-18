import React, { useState } from "react";
import FileDisplay from "../FileDisplay/FileDisplay";
import "./DocumentListStyles.css";

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
  const [sortBy, setSortBy] = useState<"name" | "date">("name");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "date") {
      const dateA = a.added ? new Date(a.added).getTime() : 0;
      const dateB = b.added ? new Date(b.added).getTime() : 0;
      return dateB - dateA;
    }
    return 0;
  });

  return (
    <div className="document-list">
      {/* Search & Sort */}
      <div className="document-list-controls">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name..."
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "name" | "date")}
        >
          <option value="name">Sort by Name</option>
          <option value="date">Sort by Date</option>
        </select>
      </div>

      {/* Header */}
      <div className="document-list-header">
      <div>Name</div>
        <div>Date added</div>
        <div>File type</div>
        
      </div>

      {/* File rows */}
      {sortedItems.map((item, idx) => (
        <FileDisplay key={idx} item={item} />
      ))}

      {/* No results message */}
      {sortedItems.length === 0 && (
        <div className="document-list-empty">No files found.</div>
      )}
    </div>
  );
};

export default DocumentList;

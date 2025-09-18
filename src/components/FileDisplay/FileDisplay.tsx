import React, { useState } from "react";
import type { FileItem } from "./DocumentList";
import "./FileDisplayStyles.css";

interface Props {
  item: FileItem;
}

const FileDisplay: React.FC<Props> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasFiles = item.files && item.files.length > 0;

  return (
    <>
      <div
        className={`file-row ${hasFiles ? "clickable" : ""}`}
        onClick={() => hasFiles && setIsOpen(!isOpen)}
      >
        
        <div className="file-icon">
          {hasFiles && <span className={`chevron ${isOpen ? "open" : ""}`}>▶</span>}
        </div>
        <div className="file-name">{item.name}</div>
        <div className="file-added">{item.added || ""}</div>
        <div className="file-type">{item.type}</div>
        
      </div>

      
      {hasFiles && isOpen && (
        <div className="file-children">
          {item.files!.map((child, idx) => (
            <FileDisplay key={idx} item={child} />
          ))}
        </div>
      )}
    </>
  );
};

export default FileDisplay;

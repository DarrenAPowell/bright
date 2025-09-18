import * as React from "react";
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
  return (
    <div className="max-w-4xl mx-auto bg-white shadow rounded">
      {/* Header */}
      <div className="grid grid-cols-3 gap-4 p-2 font-bold border-b bg-gray-100">
        <div>File type</div>
        <div>Name</div>
        <div>Date added</div>
      </div>

      {/* File rows */}
      {items.map((item, idx) => (
        <FileDisplay key={idx} item={item} />
      ))}
    </div>
  );
};

export default DocumentList;

import * as React from "react";


type FileItem = {
  type: string;
  name: string;
  added?: string;
  files?: FileItem[];
};

interface Props {
  item: FileItem;
}

const FileDisplay: React.FC<Props> = ({ item }) => {
  const isFolder = item.type === "folder";

  return (
    <div className="grid grid-cols-3 gap-4 p-2 border-b hover:bg-gray-50">
      {/* File type */}
      <div>{isFolder ? "📁" : "📄"} {item.type}</div>

      {/* Name */}
      <div className="font-medium">{item.name}</div>

      {/* Date added or file count */}
      <div className="text-gray-500">
        {isFolder && item.files ? `(${item.files.length} file${item.files.length > 1 ? "s" : ""})` : item.added}
      </div>
    </div>
  );
};

export default FileDisplay;

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
    <div>
      <span>{item.name}</span>
      {!isFolder && item.added && <span>{item.added}</span>}
      {isFolder && item.files && (
        <span>
          ({item.files.length} file{item.files.length > 1 ? "s" : ""})
        </span>
      )}
    </div>
  );
};

export default FileDisplay;

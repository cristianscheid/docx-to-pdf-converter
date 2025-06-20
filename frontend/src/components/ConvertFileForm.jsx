import { useState } from "react";

import useConvertFile from "../hooks/useConvertFile";

const ConvertFileForm = () => {
  const [file, setFile] = useState();
  const [dragging, setDragging] = useState(false);
  const { convertFile, loading } = useConvertFile();

  return (
    <div className={`card max-w-md w-full p-8 shadow bg-base-100 rounded-lg`}>
      <input
        type="file"
        accept=".docx"
        onChange={(e) => setFile(e.target.files[0])}
        onDragEnter={() => setDragging(true)}
        onDragLeave={() => setDragging(false)}
        onDrop={() => setDragging(false)}
        className={`
          file-input file-input-bordered w-full mb-6
          hover:border-primary hover:scale-105 transition-transform
          ${dragging ? "border-primary scale-105 transition-transform" : ""}
        `}
      />
      <button
        onClick={() => convertFile(file)}
        disabled={!file || loading}
        className={"btn btn-primary w-full"}
      >
        {loading ? "Converting..." : "Convert and Download"}
      </button>
    </div>
  );
};

export default ConvertFileForm;

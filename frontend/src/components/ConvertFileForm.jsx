import { useState } from "react";
import useConvertFile from "../hooks/useConvertFile";

const ConvertFileForm = () => {
  const [file, setFile] = useState();
  const { convertFile, loading } = useConvertFile();

  return (
    <div className="card max-w-md w-full p-8 shadow bg-base-100 rounded-lg">
      <input
        type="file"
        accept=".docx"
        onChange={(e) => setFile(e.target.files[0])}
        className="file-input file-input-bordered w-full mb-6"
      />
      <button
        onClick={() => convertFile(file)}
        disabled={!file || loading}
        className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
      >
        {loading ? "Converting..." : "Convert and Download"}
      </button>
    </div>
  );
};

export default ConvertFileForm;

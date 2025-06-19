import { useState } from "react";
import { saveAs } from "file-saver";
import config from "../config";

const API_URL = config.API_URL;

export default function useConvertFile() {
  const [loading, setLoading] = useState(false);

  const convertFile = async (file) => {
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`${API_URL}/convert-file`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error();

      const blob = await res.blob();
      saveAs(blob, "converted.pdf");
    } catch {
      alert("Conversion failed.");
    } finally {
      setLoading(false);
    }
  };

  return { convertFile, loading };
}

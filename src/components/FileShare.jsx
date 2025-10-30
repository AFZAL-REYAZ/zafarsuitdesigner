import React, { useState } from "react";
import axios from "axios";
import { UploadCloud } from "lucide-react";

export default function FileShare() {
  const [file, setFile] = useState(null);
  const [link, setLink] = useState("");
  const [progress, setProgress] = useState(0);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/api/files/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (event) => {
          setProgress(Math.round((event.loaded * 100) / event.total));
        },
      });

      setLink(res.data.downloadLink);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-8 flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold text-gray-800">📤 File & Video Sharing</h2>

      <label className="border-2 border-dashed border-gray-400 rounded-lg p-6 cursor-pointer flex flex-col items-center gap-2 w-full text-center">
        <UploadCloud size={32} />
        <span>Drag & drop or click to select</span>
        <input
          type="file"
          className="hidden"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </label>

      {file && <p className="text-gray-600">Selected: {file.name}</p>}

      {progress > 0 && (
        <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
          <div
            className="bg-blue-500 h-3 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Upload
      </button>

      {link && (
        <div className="mt-4 bg-green-100 p-4 rounded w-full text-center">
          ✅ Share this link:{" "}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline break-all"
          >
            {link}
          </a>
        </div>
      )}
    </div>
  );
}

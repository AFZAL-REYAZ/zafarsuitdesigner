import { useRef, useState } from 'react';
import { UploadCloud } from 'lucide-react';

const FileDropZone = ({ handleDrop, handleFileChange }) => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center w-full max-w-lg p-8 rounded-lg cursor-pointer 
        transition-all duration-300
        ${isDragging ? 'bg-blue-200 border-blue-500' : 'bg-blue-500 hover:bg-blue-600'} 
        text-white shadow-lg`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        setIsDragging(false);
        handleDrop(e);
      }}
      onClick={() => fileInputRef.current?.click()}
    >
      {/* Cloud Upload Icon */}
      <UploadCloud size={48} className="mb-3 text-white" />
      
      {/* Instruction Text */}
      <p className="text-lg font-semibold">Drop files or click here</p>

      {/* Choose File Button */}
      <button
        type="button"
        className="mt-4 bg-white text-blue-600 font-medium px-4 py-2 rounded shadow hover:bg-gray-100"
      >
        📂 Choose File
      </button>

      {/* Hidden Input */}
      <input
        type="file"
        accept="image/jpeg, image/jpg, image/png, application/pdf"
        multiple
        hidden
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileDropZone;

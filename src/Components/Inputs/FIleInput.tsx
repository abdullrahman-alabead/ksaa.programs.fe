// @ts-nocheck
import { Upload } from "@mui/icons-material";
import { useRef, useState } from "react";

const FileInput = ({ inputLabel, name }: { inputLabel: string; name: string }) => {
  const fileRef = useRef();
  const [file, setFile] = useState(null);
  return (
    <div className="mb-6">
      <p className="mb-2 text-green">{inputLabel}</p>
      <div
        className="px-4 py-2 border-2 border-green rounded-md flex items-center gap-2 w-fit text-green cursor-pointer"
        onClick={() => fileRef.current && fileRef.current.click()}
      >
        <Upload />
        <span className="text-gray">{file ? file.name : "إرفاق ملف"}</span>
      </div>

      <input
        onChange={(e) => setFile(e.currentTarget.files[0])}
        type="file"
        ref={fileRef}
        className="hidden"
        name={name}
      />
    </div>
  );
};

export default FileInput;

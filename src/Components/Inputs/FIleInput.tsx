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
        className="placeholder px-4 py-2 border-2 border-green rounded-md flex items-center gap-2 w-fit text-green cursor-pointer peer-invalid:border-[red]"
        onClick={() => fileRef.current && fileRef.current.click()}
      >
        <Upload />
        <span className="text-gray">{file ? file.name : "إرفاق ملف"}</span>
        <input
          onChange={(e) => setFile(e.currentTarget.files[0])}
          type="file"
          required
          ref={fileRef}
          className="opacity-10 w-0"
          name={name}
        />
      </div>
    </div>
  );
};

export default FileInput;

import { ChangeEvent, FC, useState } from "react";

import { ReactComponent as Upload } from "@/shared/icons/upload.svg";
import { classNames } from "@/shared/lib/classNames";

interface IUploadFormProps {
  extensionsText?: string;
  accept: string;
  onFileUpload: (file: File) => void;
}

export const UploadForm: FC<IUploadFormProps> = ({
  accept,
  extensionsText,
  onFileUpload,
}) => {
  const [isDragging, setDragging] = useState<boolean>(false);

  const handleFileUpload = (evt: ChangeEvent<HTMLInputElement>) => {
    const file = evt.target.files?.[0];

    if (file) {
      onFileUpload(file);
    }
  };

  const handleDragEnter = () => setDragging(true);
  const handleDragLeave = () => setDragging(false);

  return (
    <div>
      <div
        className={classNames(
          "border-2 relative border-gray-200 p-5 rounded-lg flex flex-col items-center justify-center",
          {
            "border-dashed": isDragging,
            "border-solid": !isDragging,
          }
        )}
      >
        <div className="rounded-full bg-gray-100 flex items-center justify-center w-[40px] h-[40px] mb-6">
          <Upload />
        </div>
        <p className="text-sm leading-[20px] text-gray-600 max-w-[280px] text-center m-0">
          <span className="font-semibold text-gray-700">Click to upload</span>{" "}
          or drag and drop{" "}
          {extensionsText && (
            <>
              <br /> <span className="text-xs">{extensionsText}</span>{" "}
            </>
          )}
        </p>
        <input
          type="file"
          className="absolute top-0 left-0 right-0 bottom-0 z-10 opacity-0 cursor-pointer"
          accept={accept}
          onChange={handleFileUpload}
          onDragOver={handleDragEnter}
          onDragLeave={handleDragLeave}
        />
      </div>
    </div>
  );
};

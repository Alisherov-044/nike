import { UploadInterface } from "@/interface";

export function Upload({ placeholder, onClick }: UploadInterface) {
  return (
    <div className="upload" onClick={onClick}>
      <span className="upload__placeholder">{placeholder}</span>
      <div className="upload__button--wrapper">
        <span className="upload__button--hl"></span>
        <span className="upload__button--vl"></span>
      </div>
    </div>
  );
}

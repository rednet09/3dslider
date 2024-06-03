import * as nifti from "nifti-reader-js";

function FileUpload({ onFileUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const arrayBuffer = e.target.result;
      let niftiHeader, niftiImage;

      try {
        if (nifti.isCompressed(arrayBuffer)) {
          const decompressed = nifti.decompress(arrayBuffer);
          if (nifti.isNIFTI(decompressed)) {
            niftiHeader = nifti.readHeader(decompressed);
            niftiImage = nifti.readImage(niftiHeader, decompressed);
          }
        } else if (nifti.isNIFTI(arrayBuffer)) {
          niftiHeader = nifti.readHeader(arrayBuffer);
          niftiImage = nifti.readImage(niftiHeader, arrayBuffer);
        }

        if (niftiHeader && niftiImage) {
          console.log("NIfTIiii Header:", niftiHeader);
          console.log(
            "NIfTIii Image Length:",
            niftiImage ? niftiImage.length : "undefined"
          );
          onFileUpload({
            header: niftiHeader,
            image: new Uint8Array(niftiImage),
          });
        } else {
          console.error("The file is not a valid NIfTI file.");
        }
      } catch (error) {
        console.error("An error occurred while reading the file:", error);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="my-3">
      <input
        type="file"
        className="form-control border p-2"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default FileUpload;

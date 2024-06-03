import { useState } from "react";
import FileUpload from "./components/FileUpload";
import ImageViewer from "./components/ImageViewer";

function App() {
  const [niftiData, setNiftiData] = useState(null);

  const handleFileUpload = (data) => {
    setNiftiData(data);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-5">
          3D NIfTI Image Viewer
        </h1>
        <FileUpload onFileUpload={handleFileUpload} />
        {niftiData && <ImageViewer niftiData={niftiData} />}
      </div>
    </>
  );
}

export default App;

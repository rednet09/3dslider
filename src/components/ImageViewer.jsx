import { useState, useEffect, useRef } from "react";
import ImageSlider from "./ImageSlider";

function ImageViewer({ niftiData }) {
  const { header, image } = niftiData;
  const [currentSlice, setCurrentSlice] = useState(0);
  const canvasRef = useRef(null);

  const sliceCount = header.dims[3];
  const cols = header.dims[1];
  const rows = header.dims[2];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imageData = ctx.createImageData(cols, rows);
    const sliceOffset = currentSlice * cols * rows;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const pixelIndex = sliceOffset + row * cols + col;
        const pixelValue = image[pixelIndex];
        const index = (row * cols + col) * 4;

        imageData.data[index] = pixelValue;
        imageData.data[index + 1] = pixelValue;
        imageData.data[index + 2] = pixelValue;
        imageData.data[index + 3] = 255;
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }, [currentSlice, cols, rows, image]);

  return (
    <div>
      <ImageSlider
        sliceCount={sliceCount}
        currentSlice={currentSlice}
        onChange={(value) => setCurrentSlice(value)}
      />
      <canvas
        ref={canvasRef}
        width={cols}
        height={rows}
        className="border"
      ></canvas>
    </div>
  );
}

export default ImageViewer;

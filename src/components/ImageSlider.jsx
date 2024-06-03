function ImageSlider({ sliceCount, currentSlice, onChange }) {
  return (
    <>
      <div className="my-3">
        <label className="block text-gray-700">
          Slice: {currentSlice + 1} / {sliceCount}
        </label>
        <input
          type="range"
          min="0"
          max={sliceCount - 1}
          value={currentSlice}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full"
        />
      </div>
    </>
  );
}

export default ImageSlider;

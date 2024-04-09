import React, { useState } from 'react';
const ImageInput = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  return (
    <div className="avatar-container flex flex-col items-center">
      <label htmlFor="avatar-input" className="mb-2 font-bold">
        Choose image
      </label>
      <input
        type="file"
        id="avatar-input"
        accept="image/*"
        className="w-24 h-24 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer overflow-hidden"
        onChange={handleImageChange}
      />
        {selectedImage ? (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-4xl text-gray-500">+</span>
        )}
    
    </div>
  );
};

export default ImageInput;
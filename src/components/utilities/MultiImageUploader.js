import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function MultiImageUploader({ images, setImages }) {

  const imagesRef = useRef([]);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleImageChange = (event, index) => {
    const files = event.target.files;

    if (files.length === 1) {
      const updatedImages = [...images];
      updatedImages[updatedImages.indexOf(null)] = files[0]; //Put the image in the first null container found
      setImages(updatedImages);
    }

    if (files.length > 1) {
      const updatedImages = [...images];
      let i = updatedImages.indexOf(null); //find the first empty container available
      for (let file of files) {
        if (i >= updatedImages.length) break;
        updatedImages[i] = file;
        i++;
      }
      setImages(updatedImages);
    }
  };
  const handleDeleteImage = (index) => {
  	const updatedImages = [...images]
  	if (updatedImages[index] != null){
  		updatedImages[index] = null
  		setImages(updatedImages)
  	}
  }
  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };
  const handleDragOver = (e) => {
  	e.preventDefault(); 
  }
  const handleDrop = (index) => {
    if (draggedIndex === null || draggedIndex === index) return;
    const updatedImages = [...images];
    const draggedItem = updatedImages[draggedIndex];

    // Swap positions
    updatedImages[draggedIndex] = updatedImages[index];
    updatedImages[index] = draggedItem;

    setImages(updatedImages);
    setDraggedIndex(null);
  };

  return (
    <div className="multi-image-uploader-section"style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', paddingBottom: '50px'}}>
      {images.map((image, index) => (
      	<div style={{display: 'flex', flexDirection: 'column'}}>
        <div
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          onClick={() => imagesRef.current[index].click()}
          style={{
            width: '150px',
            height: '150px',
            border: '2px dotted #ccc',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '48px',
            color: '#E2E2E2',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#fafafa',
          }}>
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt={`Uploaded ${index}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            '+'
          )}
          <input
            type="file"
            accept="image/*"
            multiple
            ref={(el) => (imagesRef.current[index] = el)}
            onChange={(e) => handleImageChange(e, index)}
            style={{ display: 'none' }}
          />
        </div>
        {image && (
          <FontAwesomeIcon
            icon={faTrashCan}
            size="2x"
            onClick={()=> handleDeleteImage(index)}
            style={{ alignSelf: 'center', cursor: 'pointer', color: 'black', marginTop: '5px' }}
          />
        )}
      </div>
      ))}
    </div>
  );
}

export default MultiImageUploader;
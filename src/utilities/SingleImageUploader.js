import React, {useRef} from 'react'; 

function SingleImageUploader({onImageSelected}){
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); 
  };

  const handleFileUpload = (event) => {
    onImageSelected(event.target.files[0]); 
  };

	return (
    	<div>
    	  <button type="button" onClick={handleButtonClick}>Upload</button>
    	  	<input type="file" ref={fileInputRef} 
    	  style={{ display: "none"}}accept="image/*" onChange={handleFileUpload} />
    	</div>
	);
}

export default SingleImageUploader; 


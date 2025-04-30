import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import SingleImageUploader from "../../../utilities/SingleImageUploader.js";

const ThumbnailUploaderSection = React.memo(({ thumbnail, setThumbnail, updateProductData }) => {
  return (
    <section className="upload-thumbnail-image-section">
      {!thumbnail ? (
        <>
          <h4>Upload a 200x200 image for thumbnail</h4>
          <SingleImageUploader
            onImageSelected={(file) => {
              setThumbnail(file);
              updateProductData("thumbnail_image", file);
            }}
          />
        </>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <img
            style={{ marginRight: "10px" }}
            src={URL.createObjectURL(thumbnail)}
            alt="Thumbnail Preview"
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            style={{ paddingBottom: "10px" }}
            size="2x"
            onClick={() => setThumbnail(null)}
          />
        </div>
      )}
    </section>
  );
});

export default ThumbnailUploaderSection;
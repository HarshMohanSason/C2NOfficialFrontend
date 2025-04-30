import React from "react";
import MultiImageUploader from "../../../utilities/MultiImageUploader.js";

const CarouselUploaderSection = React.memo(({ images, setImages }) => {
  return (
    <section className="upload-carousel-images-section">
      <h4
        style={{
          fontSize: "clamp(25px, 3.5vh, 40px)",
          fontWeight: "200",
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        Upload 500x500 images for carousel
      </h4>
      <MultiImageUploader
        images={images}
        setImages={(imgs) => setImages("carousel_images", imgs)}
      />
    </section>
  );
});

export default CarouselUploaderSection;
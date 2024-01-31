import Layout from "@/components/layout/layout";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { GALLERY_IMAGES } from "@/constants";
import { useState } from "react";

export default function Gallery() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Convert StaticImageData to string URLs for Lightbox
  const imageUrls = GALLERY_IMAGES.map((img) => img.src);

  return (
    <Layout>
      <section className="pt-20">
        <div className="p-5 md:p-10 pt-12">
          <div className="masonry-grid">
            {GALLERY_IMAGES.map((image, index) => (
              <div key={index} className="masonry-grid-item cursor-pointer" onClick={() => { setPhotoIndex(index); setIsOpen(true); }}>
                <img
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {isOpen && (
        <Lightbox
          mainSrc={imageUrls[photoIndex]}
          nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
          prevSrc={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + imageUrls.length - 1) % imageUrls.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imageUrls.length)}
        />
      )}
    </Layout>
  );
}

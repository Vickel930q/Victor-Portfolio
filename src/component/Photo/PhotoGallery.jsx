import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

const photos = [
  {
    src: 'https://via.placeholder.com/600x400',
    width: 4,
    height: 3,
  },
  {
    src: 'https://via.placeholder.com/600x600',
    width: 1,
    height: 1,
  },
  {
    src: 'https://via.placeholder.com/600x800',
    width: 3,
    height: 4,
  },
  {
    src: 'https://via.placeholder.com/800x600',
    width: 4,
    height: 3,
  },
  {
    src: 'https://via.placeholder.com/800x1200',
    width: 2,
    height: 3,
  },
  {
    src: 'https://via.placeholder.com/600x600',
    width: 1,
    height: 1,
  },
  // Add more photos as needed
];

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default PhotoGallery;

import React from "react";
import "./Gallery.css";

const Gallery = ({ photos }) => {
  return (
    <div className="gallery">
      {photos.length > 0 ? (
        photos.map((photo) => (
          <div className="photo-card" key={photo.id}>
            <img src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))
      ) : (
        <p>Nenhuma foto encontrada</p>
      )}
    </div>
  );
};

export default Gallery;

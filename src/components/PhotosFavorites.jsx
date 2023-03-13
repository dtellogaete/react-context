import React, { useContext } from 'react';

import Gallery from 'react-photo-gallery';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { Button, Image } from 'react-bootstrap';

/* Pexels */
import Pexels from "./Pexels";

/* Context */
import Context from "../context";

const GalleryComponentFav = () => {

  /* Favoritos Context*/  
  const {favorites} = useContext(Context);

  /* Importar fotos */
  const pics = Pexels().filter((pic) => favorites.includes(pic.id));

  return (    
    <Gallery
      photos={pics.map((pic) => ({
        src: pic.src.large,
        width: pic.width,
        height: pic.height,
        key: pic.id,
        favorite: favorites.includes(pic.id),
      }))}
      renderImage={(props) => {
        const { favorite, ...imageProps } = props.photo;
        return (
          <div style={{ position: "relative" }}>
            <Image
              {...imageProps}
              fluid
              style={{ objectFit: "cover" }}                
            />
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: "white",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                zIndex: "1",
              }}
            >
              <Button
              variant="light"                
              style={{ padding: "0", border: "none", background: "none" }}
            >
                {favorite ? (
                  <BsHeartFill size={20} style={{ color: "red" }} />
                ) : (
                  <BsHeart size={20} style={{ color: "black" }} />
                )}
              </Button>
            </div>
          </div>
        );
      }}
    />    
  );    
};

export default GalleryComponentFav;

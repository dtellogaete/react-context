import React, { useState, useEffect, useContext } from 'react';

import axios from 'axios';
import Gallery from 'react-photo-gallery';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { Button, Image } from 'react-bootstrap';

/* Context */
import Context from '../context';
import { ContextProvider } from "../context";

const GalleryComponent = () => {
    const key = 'DbVzmApsg0n8PVNbyZnQetcSkfpt4jJOoxFbMik2Xd7L1x4ZVbk8TdRK';    
    const query = 'Mayan';
    const perPage = 20;

    const [pics, setPics] = useState([]);

    /* Favoritos Context*/
    const {favorites, setFavorites} = useContext(Context);    

    const handleFavorite = (id) => {
        setFavorites((prevFavorites) => {
            if (!prevFavorites) {
                prevFavorites = [];
            }
            if (prevFavorites.includes(id)) {
                return prevFavorites.filter((fav) => fav !== id);
            } else {
                return [...prevFavorites, id];
            }
        });
    };

    console.log(favorites)    

    useEffect(() => {
        const fetchPics = async () => {
        const url = `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`;
        try {
            const response = await axios.get(url, { headers: { Authorization: key } });
            setPics(response.data.photos);
        } catch (error) {
            console.error(error);
        }
        }
        fetchPics();
    }, [query, perPage]);

    return (
        <ContextProvider>
        <Gallery photos={pics.map((pic) => ({
            src: pic.src.large,
            width: pic.width,
            height: pic.height,
            key: pic.id,
            favorite:  favorites.includes(pic.id),
        }))} 
            renderImage={(props) => {
                const { favorite, ...imageProps } = props.photo;
                return (
                <div style={{ position: "relative" }}>
                    <Image {...imageProps} fluid style={{ objectFit: "cover" }} />
                    <div style={{ 
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
                    zIndex: "1"
                    }}>
                    <Button 
                        variant="light" 
                        onClick={() => handleFavorite(imageProps.id)}
                        style={{ padding: "0", border: "none", background: "none" }}
                    >
                        {favorite ? <BsHeartFill size={20} style={{ color: "red" }} /> : <BsHeart size={20} style={{ color: "black" }} />}
                    </Button>
                    </div>
                </div>
                );
            }} />
            </ContextProvider>
            
            );
    };

export default GalleryComponent;

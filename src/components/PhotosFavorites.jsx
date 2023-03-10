import React, { useState, useEffect, useContext } from 'react';

import axios from 'axios';
import Gallery from 'react-photo-gallery';
import { BsHeartFill} from 'react-icons/bs';
import { Button, Image } from 'react-bootstrap';

/* Context */
import Context from '../context';

const GalleryComponentFav = () => {
    const key = 'DbVzmApsg0n8PVNbyZnQetcSkfpt4jJOoxFbMik2Xd7L1x4ZVbk8TdRK';    
    const query = 'Mayan';
    const perPage = 20;

    const [pics, setPics] = useState([]);
    const [picsFilter, setPicsFilter] = useState([]);

    /* Favoritos Context*/
    const {favorites} = useContext(Context);

    useEffect(() => {
        
        setPicsFilter(pics.filter(pic => favorites.includes(pic.id)));
    }, [favorites, pics]);



    

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
        <Gallery photos={picsFilter.map((pic) => ({
            src: pic.src.large,
            width: pic.width,
            height: pic.height,
            id: pic.id,
            favorite: favorites.includes(pic.id)
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
                        style={{ padding: "0", border: "none", background: "none" }}
                    >
                       <BsHeartFill size={20} style={{ color: "red" }} /> 
                    </Button>
                    </div>
                </div>
                );
            }} />
            );
    };

export default GalleryComponentFav;

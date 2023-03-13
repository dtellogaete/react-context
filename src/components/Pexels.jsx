import axios from 'axios';
import { useState, useEffect } from 'react'; 

export const Pexels = () =>{
    const key = 'DbVzmApsg0n8PVNbyZnQetcSkfpt4jJOoxFbMik2Xd7L1x4ZVbk8TdRK';    
    const query = 'Mayan';
    const perPage = 20;

    const [pics, setPics] = useState([]);

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

    return pics;
}

export default Pexels;


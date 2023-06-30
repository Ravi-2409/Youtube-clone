import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {

    
    params: {
       
        maxResults: '50'
      },
      headers: {
        'X-RapidAPI-Key': '49cdb32276mshedbba439462f45bp1fc086jsn3c5447e8a3e6',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };

    

    export const fetchFromAPI = async (url) =>{
        const {data} = await axios.get(`${BASE_URL}/${url}`, options);

        return data;

    }
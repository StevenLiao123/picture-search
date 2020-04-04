import axios from 'axios';

const URL_BASE =  "https://www.flickr.com/services/rest";

export const fetchAllPicturesByGeolocationAjax = (lat, lon, page) => axios.get(`${URL_BASE}/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&lat=${lat}&lon=${lon}&per_page=10&page=${page}&format=json&nojsoncallback=1`);

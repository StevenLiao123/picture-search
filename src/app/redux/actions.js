/*
    The module includes some functions of action creator
*/

import { 
    SET_LATITUDE, 
    SET_LONGTITUDE,
    RECEIVE_PHOTOS_DATA,
    ADD_PHOTOS_TO_FAVOURITES_LIST,
    RESET_PHOTOS_DATA
} from './action-types';

import { fetchAllPicturesByGeolocationAjax } from '../api';
import { message } from 'antd';
import storageUtils from '../utils/storageUtils';

// synchronous 
export const setLatitude = (lat) => ({
    type: SET_LATITUDE,
    lat: lat
});

export const setLongtitude = (lon) => ({
    type: SET_LONGTITUDE,
    lon: lon
});

export const addPhotosToFavouritesList = (photo) => ({
    type: ADD_PHOTOS_TO_FAVOURITES_LIST,
    photo: photo
});

export const receivePhotosDataSuccess = (data) => ({
    type: RECEIVE_PHOTOS_DATA,
    data
});

export const resetPhotosData = () => {
    // delete the photos data in the local storage
    storageUtils.removePhotosData();

    //return action
    return {type: RESET_PHOTOS_DATA}
};

// asynchronous
export const receivePhotosData = (lat, lon, page) => {
    return async dispatch => {
        const result = await fetchAllPicturesByGeolocationAjax(lat, lon, page);
        if (result) {
            const data = result.data;
            // save the data to the local storage
            storageUtils.savePhotosData(data);
            message.success('receive photos data successful!'); 
            dispatch(receivePhotosDataSuccess(data));
        } else {
            message.error(result.data.message);
        }
    } 
};

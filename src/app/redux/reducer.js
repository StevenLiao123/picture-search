/*
    The reducer is a function, which used to return new state based on the prevState and actions
*/
import { combineReducers } from "redux";
import storageUtils from "../utils/storageUtils";
import {
  SET_LATITUDE,
  SET_LONGTITUDE,
  RECEIVE_PHOTOS_DATA,
  ADD_PHOTOS_TO_FAVOURITES_LIST,
  RESET_PHOTOS_DATA
} from "./action-types";

// The function is used to set the latitude
const initialLat = -33.8548157;
function Latitude(state = initialLat, action) {
  switch (action.type) {
    case SET_LATITUDE:
      return action.lat;
    default:
      return state;
  }
}

// The function is used to set the longtitude
const initialLon = 151.2164539;
function Longtitude(state = initialLon, action) {
  switch (action.type) {
    case SET_LONGTITUDE:
      return action.lon;
    default:
      return state;
  }
}

// The function is get the photos data
const initialPhotosData = storageUtils.getPhotosData();
function PhotosData(state = initialPhotosData, action) {
  switch (action.type) {
    case RECEIVE_PHOTOS_DATA:
      return action.data;
    case RESET_PHOTOS_DATA:
      return {};
    default:
      return state;
  }
}

// The function is used to save photos to the favourites list
const initialPhotos = {
  photos: []
};
function FavouritesPhotos(state = initialPhotos, action) {
  switch (action.type) {
    case ADD_PHOTOS_TO_FAVOURITES_LIST:
      return {
        ...state,
        photos: [...state.photos, action.photo]
      };
    default:
      return state;
  }
}

export default combineReducers({
  Latitude,
  Longtitude,
  PhotosData,
  FavouritesPhotos
});

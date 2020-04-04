/*
    used to save data in local storage
*/
import store from "store";

const DATA_KEY = "data_key";

export default {
  // save photo data
  savePhotosData(data) {
    store.set(DATA_KEY, data);
  },

  // read photo data
  getPhotosData() {
    return store.get(DATA_KEY) || {};
  },

  // delete photo data
  removePhotosData() {
    store.remove(DATA_KEY);
  },
};

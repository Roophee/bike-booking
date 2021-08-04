import localforage from 'localforage';

const bikeStorage = localforage.createInstance({
  name: 'bikeStorage',
});

bikeStorage.clear();

export default bikeStorage;

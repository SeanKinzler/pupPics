import axios from 'axios';

export default (state) => {
  axios.get('https://www.reddit.com/r/dogpictures/hot.json').then((result) => {
    state.picCache = result.data.data.children;
    state.cacheStatus = true;
  }).catch((error) => {
    console.log(error);
  });
}
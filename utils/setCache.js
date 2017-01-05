import axios from 'axios';

export default (state) => {
  axios.get('https://www.reddit.com/r/puppies/hot.json').then((result) => {
    console.log('cache update success!');
    state.picCache = result.data.data.children;
  }).catch((error) => {
    console.log(error);
  });
}
export default (cache) => {
  let pic = Math.floor((cache.length - 1) * Math.random()) + 1;
  let url = `${cache[pic].data.url}`;
  if(url.slice(url.length-3) !== 'jpg') {
    url = url + '.jpg'
  }
  let split = url.split('&amp;');

  return split.join('&');
}
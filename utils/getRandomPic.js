export default (cache) => {
  let pic = `${Math.floor(cache.length * Math.random())}`;
  while (cache[pic].data.url.indexOf('/a/') !== -1 && cache[pic].data.url.indexOf('/gallery/') !== -1) {
    console.log(pic);
    pic = `${Math.floor(cache.length * Math.random())}`;
  }
  
  console.log(cache);
  console.log(`${cache[pic].data.url}.jpg`);
  console.log('number: ', pic)
  return `${cache[pic].data.url}.jpg`
}
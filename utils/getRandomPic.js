
export default (cache) => {
  let pic = Math.floor(cache.length * Math.random())
  console.log(cache);
  console.log(`${cache[pic].data.url}.jpg`);
  console.log('number: ', pic)
  return `${cache[pic].data.url}.jpg`
}
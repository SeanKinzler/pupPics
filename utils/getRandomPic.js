
export default (cache) => {
  console.log('ranom cache: ', cache)
  let pic = Math.floor(cache.length * Math.random())
  console.log(`${cache[pic].data.url}.jpg`);
  return `${cache[pic].data.url}.jpg`
}
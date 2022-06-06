export {}
Array.prototype.map = function (callback, thisArg) {
  if (this == null) return
  if (typeof callback !== 'function') return
  const array = this
  const newArray = new Array(array.length)
  for (let i = 0; i < array.length; i++) {
    newArray[i] = callback.call(thisArg, array[i], i, array)
  }
  return newArray
}

const result = [1, 2].map(i => i * 2)
console.log(result);

export {}
Array.prototype.map = function (callback: any, thisArg?: any): Array<any> {
  if (this == null) throw new Error("this is null or not defined")
  if (typeof callback !== 'function') throw new TypeError('callback must be a function')
  const array = this
  const newArray = new Array(array.length)
  for (let i = 0; i < array.length; i++) {
    newArray[i] = callback.call(thisArg, array[i], i, array)
  }
  return newArray
}

const result: any = [1, 2].map(i => i * 2)
console.log(result);

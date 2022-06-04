export function shallowClone(target: any) {
  if (typeof target !== 'object' || target === null) return target
  const constructor = target.constructor
  if (/^(Function | Date | RegExp | Map | Set)$/i.test(constructor.name)) return target
  const cloneTarget: any = Array.isArray(target) ? [] : {}
  for (const prop in target) {
    cloneTarget[prop] = target[prop]
  }
  return cloneTarget
}

const obj = {
  a: 1,
  b: true,
  c: 'Jay',
  d: (val: any) => (val),
  e: null
}
console.log(obj);
console.log(shallowClone(obj));
console.log(obj === shallowClone(obj)); // false
console.log(obj.d === shallowClone(obj).d); // true
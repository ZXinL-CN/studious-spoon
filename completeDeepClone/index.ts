export const _completeDeepClone = (target: any, map = new WeakMap()) => {
  if (typeof target !== 'object' || target === null) return target
  const constructor = target.constructor
  if (/^(Function | Date | RegExp | Map | Set)$/i.test(constructor.name)) return new constructor(target)
  if (map.get(target)) return map.get(target)
  const cloneTarget: any = Array.isArray(target) ? [] : Object.create(null)
  map.set(target, cloneTarget)
  for (const prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = _completeDeepClone(target[prop], map)
    }
  }
  return cloneTarget
}

const obj: any = {
  a: 1,
  b: true,
  c: 'Jay',
  d: {
    da: 'Tom',
    db: null,
    dc: [1, 2, 3]
  },
  e: null,
  f: [1, 2, {
    fa: [1, 2, 3],
    fb: [{
      fc: 99
    }]
  }],
  g: (val: any) => val,
  h: new Date(),
  i: new RegExp(/[0-9]/),
}
obj.obj = obj

console.log(obj);
console.log(_completeDeepClone(obj));
console.log(obj === _completeDeepClone(obj)); // false
console.log(obj.d === _completeDeepClone(obj).d); // false
console.log(obj.f === _completeDeepClone(obj).f); // false
console.log(obj.obj === _completeDeepClone(obj).obj); // false
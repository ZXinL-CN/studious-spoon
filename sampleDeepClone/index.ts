export const _sampleDeepClone = (target: any) => {
  if (typeof target !== 'object' || target === null) return target;
  const cloneTarget: any = Array.isArray(target) ? [] : {}
  for (const prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = _sampleDeepClone(target[prop]);
    }
  }
  return cloneTarget;
}


const obj = {
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
  }]
}
console.log(obj);
console.log(_sampleDeepClone(obj));
console.log(obj === _sampleDeepClone(obj)); // false
console.log(obj.d === _sampleDeepClone(obj).d); // false
console.log(obj.f === _sampleDeepClone(obj).f); // false
function flattenObject(obj, prefix = '') {
  let result = {};

  for (let key in obj) {
    let newKey = prefix ? `${prefix}.${key}` : key;
    console.log(newKey);
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(result, flattenObject(obj[key], newKey));
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
}

const obj = {
  newObj: {
    obj2: {
      obj5: {
        one: 1,
      },
    },
  },
  obj3: {
    obj4: {
      two: 2
    },
  },
};

obj.obj3.obj4.two = 4;

console.log(flattenObject(obj));


// function flattenObject(ob) {
//   // Write your solution here ========================
//   let result = {};
//   function recursiveCall(ob, prefix = '') {
//     for (let key in ob) {
//       let newKey = prefix ? `${prefix}.${key}` : key;
//       if (typeof ob[key] === 'object' && ob[key] !== null) {
//         Object.assign(result, flattenObject(ob[key]))
//       } else {
//         result[newKey] = ob[key];
//       }
//     }
//   }
//   recursiveCall(ob, '')
//   return result;
// }


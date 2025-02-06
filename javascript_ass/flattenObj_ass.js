function flattenObject(ob) {
    // Write your solution here ========================
    let result = {};
    function recursiveCall(ob, prefix = '') {
        for (let key in ob) {
            let newKey = prefix ? `${prefix}.${key}` : key;
            if (typeof ob[key] === 'object' && ob[key] !== null) {
                recursiveCall(ob[key], newKey);
            } else {
                result[newKey] = ob[key];
            }
        }
    }
    recursiveCall(ob, '');
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

const result = flattenObject(obj);
console.log(result);
const obj = {
    first: {
        second: {
            third: 4
        }
    },

    one: {
        two: {
            three: 'four',
            last: 'five'
        }
    }
}


function flatten(obj, prefix = '') {
    let result = {};
    for (let key in obj) {
        let newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object') {
            Object.assign(result,flatten(obj[key],newKey));
        }else{
            result[newKey] = obj[key];
        }
    }
    return result;
}

console.log(flatten(obj));
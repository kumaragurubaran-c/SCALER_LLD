let obj = { id: 1, name: 'arun' };
// console.log("obj =", JSON.stringify(obj, null, 2));
let copy = obj;
copy.age = 12;
// console.log("obj =", JSON.stringify(obj, null, 2));
// console.log("copy =", JSON.stringify(copy, null, 2));


let obj2 = { id: 1, name: 'guru', inner: { course: 'BE', JOB: 'Fullstack' }, hobbies: 'sketching' };
// console.log('obj2 =',obj2);
let shallowCopy = {...obj2};
// console.log('shallowCopy =', shallowCopy);
shallowCopy.like = 'actress';
// console.log('shallowCopy =',shallowCopy);
// console.log('obj2 =',obj2);
shallowCopy.inner.stream = 'Aero';
// console.log('shallowCopy =',shallowCopy);
// console.log('obj2 =',obj2);

let ass = Object.assign({},shallowCopy);
console.log('ass',ass);
ass.fav = 'kristen stewart';
console.log('ass',ass);
console.log('obj2 =',obj2);
console.log('shallowCopy =',shallowCopy);

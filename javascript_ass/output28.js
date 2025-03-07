Promise.resolve(1)
.finally((data) => {
  console.log(data); //undefined
  return Promise.reject('error')
})
.catch((error) => {
  console.log(error) //'error'
  throw 'error2'
})
.finally((data) => {
  console.log(data); //undefined
  return Promise.resolve(2).then(console.log)
})
.then(console.log)
.catch(console.log)
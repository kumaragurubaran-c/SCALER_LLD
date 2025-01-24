const createPromise = () => Promise.resolve(1)

function func1() {
    // inside this fn
  createPromise().then(console.log)//executes next
  console.log(2) //executes first
}

async function func2() {
  await createPromise()
  console.log(3)
}

console.log(4)
func1()
func2()
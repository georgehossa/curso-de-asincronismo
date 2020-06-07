const doSomethingPromise = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Do Something Async'), 3000)
      : reject(new Error('Test Error'))
  })
}

const doSomethingAsync = async () => {
  const doSomething = await doSomethingPromise();
  console.log(doSomething);
}

console.log('Before');
doSomethingAsync();
console.log('After');

// Manejo de Errores usando Try Catch

const anotherFunction = async () => {
  try{
    const something = await doSomethingPromise();
    console.log(something)
  } catch (error){
    console.log(error)
  }
}

console.log('Another Before');
anotherFunction();
console.log('Another After');
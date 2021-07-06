const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 3000);
});

promise1.then((output) => console.log(output))
    .catch((error) => console.error(error))

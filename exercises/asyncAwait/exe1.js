function makePizza() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve("Pizza sendo preparada...")
      }, 5000)
    } catch (error) {
        reject(error)
    }
  });
}

function eatPizza() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve("Pizza Pronta! Já pode comer")
      }, 10000)
    } catch (e) {
      reject("Espera mais um pouquinho")
    }
  });
}

makePizza()
  .then(make => {
    console.log(make)
    return eatPizza()
  })
  .then(eat => {
    console.log(eat)
  })


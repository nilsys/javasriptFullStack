function makePizza() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => resolve("Pizza sendo preparada..."), 5000)
    } catch (error) {
        reject(error)
    }
  });
}

function eatPizza() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => resolve("Pizza Pronta! Já pode comer"), 1000)
    } catch (e) {
      reject("Espera mais um pouquinho")
    }
  });
}

const exec = async () => {
  const first = await makePizza();
  return first

  const second = await eatPizza();
  console.log(second);
}

exec();
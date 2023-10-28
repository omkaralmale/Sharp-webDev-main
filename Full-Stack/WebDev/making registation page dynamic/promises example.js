function buyCar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Got car");
    }, 5000);
  });
}

function license() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Got license");
    }, 4000);
  });
}

function trip() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("do trip");
    }, 3000);
  });
}

function home() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Home");
    }, 2000);
  });
}

// buyCar()
//   .then((result) => {
//     console.log(result);
//     return license();
//   })
//   .then((result) => {
//     console.log(result);
//     return trip();
//   })
//   .then((result) => {
//     console.log(result);
//     return home();
//   })
//   .then((result) => {
//     console.log(result);
//   });

//promises hell
//code becoming messy
//avoid this using async and await
async function run() {
  console.log(await buyCar());
  console.log(await license());
  console.log(await trip());
  console.log(await home());
}
run();

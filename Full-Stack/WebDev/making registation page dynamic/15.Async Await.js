console.log("1 : Got Ticket");
console.log("2 : Got Ticket");
const preMovie = async () => {
  const wifeBringTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Got Ticket");
    }, 2000);
  });

  const getPopcorn = new Promise((resolve, reject) => {
    console.log("Got Popcorn");
    resolve();
  });

  const getButter = new Promise((resolve, reject) => {
    console.log("Got Butter");
    resolve();
  });

  const getColdDink = new Promise((resolve, reject) => {
    console.log("Got coldDrink");
    resolve();
  });

  let Ticket = await wifeBringTicket;
  let Popcorn = await getPopcorn;
  let Butter = await getButter;
  let coldDrink = await getColdDink;
  return Ticket;
};

preMovie()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("4 : Got Ticket");
console.log("5 : Got Ticket");

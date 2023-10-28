const cart = ["shoes", "pants", "shirt"];

createOrder(cart, function () {
  //order created
  proceedToPayment(function () {
    //payment done
    showOrderSummery(function () {
      //showed summery
      updateWallet(function () {
        //wallet updated
      });
    });
  });
});

// hard to maintain
//callback hell:- nested loop issue 1
//inversion of control :- loose control of code when we use callback. issue 2
//pyramid of doom
// calling function in hand of other function even we don't know coding and issues of api
//

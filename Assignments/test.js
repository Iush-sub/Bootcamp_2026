function orderCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Preparing your coffee...");

        setTimeout(() => {
            // resolve("☕ Your coffee is here!");
            reject("☕ Your coffee is rejected!")

        }, 2000);
        
    });
}

orderCoffee()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
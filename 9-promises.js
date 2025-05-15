console.log("Starting a promise....")

const event = new Promise((resolve, reject) => {
    var name = "Hassaan"
    if (name === "Hassan") {
        resolve(name);
    }else {
        reject(`Name was not Hassan. It was ${name}`);
    }
})

// event.then((name) => {
//     console.log(`The name is ${name}`)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log("Finally we are done. whatever the result")
// })





const newevent = new Promise((resolve, reject) => {
    var nothing = "nothing"
    if ( nothing === "nothing") {
        setTimeout(() => resolve(), 8000)
    }else {
        reject()
    }
})

// newevent.
// then(() => {
//     console.log("Done after sometime")
// })
// .catch((err) => {
//     console.log(err)
// } ).finally(() => {
//     console.log("Done regardless of results")
// })

// console.log("Waiting huh?")
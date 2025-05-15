console.log("Want to do something? ")

const getData = async () => {
    console.log("Starting async/await func")
    try{
        await setTimeout(() => console.log("Done after sometime"), 7000);
    }catch(err) {
        console.log(err);
    }

    console.log("If its taking time ...consider reading a book")
}

getData()  




const p1 = new Promise(res => setTimeout(() => res("A"), 1000));
const p2 = new Promise(res => setTimeout(() => res("B"), 1500));

async function runAll() {
  const [a, b] = await Promise.all([p1, p2]);
  console.log(a, b); // Both values after both are done
}

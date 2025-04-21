// chaining built-in method
const animal = "ayam, bebek, sapi, unta";
// ayam, bebek, domba, unta
console.log(animal.split(",").toSpliced(2, 1, " domba").join())
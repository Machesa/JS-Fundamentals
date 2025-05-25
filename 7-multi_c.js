const x = parseInt(process.argv[2]);

console.log(isNaN(x) ? "Missing number of occurrences" : "");

for (let i = 0; i < x; i++) {
  console.log("C is fun");
}

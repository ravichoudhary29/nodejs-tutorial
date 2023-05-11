// Prerequisites: HTML, CSS and JS.
console.log("Hello World");
// console.log(global);

// we use CommonJS module with nodeJS:

// 1. For operating system:-
// const os = require("os");

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// 2. file and folder

// console.log(__dirname);
// console.log(__filename);

// const path = require("path");

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

// 3. Math operation(import from local file)

const math = require("./math");
console.log(math.add(4, 7));

const { add, subtract, multiply, divide } = require("./math");
console.log(add(7, 5));
console.log(subtract(7, 5));
console.log(multiply(7, 5));
console.log(divide(7, 5));

const name = "Anubhav";
console.log("name :", name);
console.log(__dirname)
//Every file in Node.js is wrapper inside and anonymous func which looks like this

// (function (exports, require, module, __filename, __dirname ) {
//   const name = "Anubhav";
//   console.log("name", name);
// });

// hence all the variables and functions becomes private inside this file
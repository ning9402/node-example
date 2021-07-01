let lodash = require("lodash");
//let foo = lodash.round(4.006, 2);

let name = "ning";

name = lodash.upperFirst(name);
console.log(name);

//lower case everything
name = lodash.lowerCase(name);
console.log(name);

//Turns the start of each word uppercase
name = lodash.startCase(name);
console.log(name);

//upper case everything
name = lodash.upperCase(name);
console.log(name);

// name = name.toLowerCase();
// name = lodash.upperFirst(name);

// const fixNamess = (caps) => {
//   results = caps.toLowerCase();
//   results = lodash.upperFirst(results);
//   return results;
// };

// //console.log(foo);
// console.log(fixNamess(name));

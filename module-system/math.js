const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

const test = (a, b) => (a, b) / (a, b);

// module.exports = {
//   test,
//   add,
//   sub,
// };

module.exports.test = test;

console.log(module);

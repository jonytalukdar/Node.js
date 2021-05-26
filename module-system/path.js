const path = require('path');

const myCurrentPath = __filename;

console.log(path.basename(myCurrentPath));
console.log(path.extname(myCurrentPath));

let pathObject = {
  dir: 'user/local',
  name: 'test',
  ext: '.js',
};

console.log(path.format(pathObject));
console.log(path.isAbsolute(myCurrentPath));
console.log(path.isAbsolute('./math.js'));

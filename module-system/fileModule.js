const fs = require('fs');

const testObj = {
  name: 'joney talukdar',
  age: 21,
  address: {
    city: 'tangail',
    country: 'BD',
  },
};

const data = JSON.stringify(testObj);

fs.writeFile('./test.json', data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('file write successfull');
  }
});

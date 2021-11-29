const { v4: uuidv4 } = require("uuid");

const person = {
  id: uuidv4(),
  name: "Christian",
  age: 31,
};

module.exports = person;

//ES6 syntax
//export default person;

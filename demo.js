const person = require("./person");
const Car = require("./car");
const path = require("path");
const fs = require("fs");
const http = require("http");

//ES6 syntax
//import person from "./person"

/*
console.log(person);

const volvo = new Car("Volvo", "V60", "2018");

console.log(volvo);
volvo.presentation();*/

//-----Node core modules------//

//current file
//console.log(__filename);

//current directory
//console.log(__dirname);

//------Path module methods--------//

//Basename - gets filename
console.log(path.basename(__filename));

//Dirname - get directory name
console.log(path.dirname(__filename));

//Extension - gets the file type
console.log(path.extname(__filename));

//Parse - creates a path object from path
console.log(path.parse(__filename));

//Join - Concatenates paths
console.log(path.join(__dirname, "test", "hello.html"));

//-----Filesystem module methods-----//

//Create folder
/*fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) {
    throw err;
  }
  console.log("Folder created");
});*/

//Create file and write to it, if file exists it overwrites the files content
/*fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hejsan hoppsan svejsan",
  (err) => {
    if (err) {
      throw err;
    }
    console.log("File created!");
  }
);*/

//Write to existing file
/*fs.appendFile(
  path.join(__dirname, "/test", "hello.txt"),
  " lillebror!",
  (err) => {
    if (err) {
      throw err;
    }
    console.log("File written to!");
  }
);

//Read file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});*/

//const filePath = path.join(__dirname, "/test", "hello.txt")

//Rename file
/*fs.rename(
  filePath,
  path.join(__dirname, "/test", "helloWorld.txt"),
  (err) => {
    if (err) {
      throw err;
    }
    console.log("File renamed!");
  }
);*/

//-----Http module-------//

//Create server object
http
  .createServer((req, res) => {
    res.write("Hello from my first web server wohhoooo!");
    res.end();
  })
  .listen(5000, () => console.log("Server is up and running wohhooooo!"));

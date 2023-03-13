const myData = {
  name: "Anubhav",
  Profession: "Developer",
};
// console.log("name:", myData.name);

// Converting obj to Json
const jsonData = JSON.stringify(myData);
// console.log(jsonData);
// console.log(jsonData.name); // cannot access like this

// Converting Json to obj
const obj = JSON.parse(jsonData);
// console.log(obj);

// Task
// 1. add this json data to another file using command
// 2. get the added data by using command

const fs = require("fs");

fs.writeFile("mockData.json", jsonData, (err) => {
  console.log("data added ");
});

const data = fs.readFile("mockdata.json", "utf-8", (err, data) => {
  console.log("read successfully:", JSON.parse(data));
});

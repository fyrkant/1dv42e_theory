"use strict";
const faker = require("faker");
const _ = require("lodash");
const fs = require("fs");

let data = [];

_.times(10000,
  () => data.push({
    name: faker.name.findName(),
    email: faker.internet.email()
  }));

fs.writeFile("data.json", JSON.stringify(data));

console.log(data);

"use strict";
const faker = require("faker");
const _ = require("lodash");
const fs = require("fs");

let data = [];

_.times(1000,
  () => data.push({
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    bio: faker.lorem.sentence(),
    image: faker.image.avatar()
  }));

fs.writeFile("data.json", JSON.stringify(data));

console.log(data);

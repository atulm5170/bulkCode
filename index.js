

// using faker to fake data
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// MySQL connection
const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'sigmaClass',
      password: 'atul@1234'
});

// create random user
let createRandomUser = () => {
      return [
            faker.string.uuid(),
            faker.internet.username(),
            faker.internet.email(),
            faker.internet.password()
      ];
};

// insert query
let q = "INSERT INTO userClass (id, username, email, password) VALUES ?";

let data = [];
for (let i = 0; i < 100; i++) {
      data.push(createRandomUser());
}

// run query
connection.query(q, [data], (err, result) => {
      if (err) throw err;
      console.log(result);
      connection.end();
});
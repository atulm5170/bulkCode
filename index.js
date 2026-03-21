// const { faker } = require('@faker-js/faker');

const mysql = require('mysql2');

const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'sigmaClass',
      password: 'atul@1234'
});

try {
      connection.query("SELECT * FROM temp", (err, result) => {
            if (err) throw err;
            console.log(result);
            connection.end();
      });
} catch (err) {
      console.log(err);
}

// let getRandomUser = () => {
//       return {
//             Id: faker.string.uuid(),
//             username: faker.internet.username(),
//             email: faker.internet.email(),
//             password: faker.internet.password(),
//       };
// }

// console.log(getRandomUser());
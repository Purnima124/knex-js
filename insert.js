const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Purnima@123",
      database: "simpleknex",
    },
  });

function insert_data() {
    knex.schema.hasTable("users").then(function (exists) {
      if (exists) {
        console.log({ Success: `data inserted into users table.` });
        return knex("users").insert({
          first_name: "purnima",
          last_name: "Ganesh",
        });
      } else {
        console.log({ Sorry: `users table not found` });
      }
    });
  }
insert_data()  
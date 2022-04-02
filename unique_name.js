const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Purnima@123",
      database: "simpleknex",
    },
  });
function unique_name() {
    knex.schema.hasTable("users").then(function (exists) {
      if (exists) {
        console.log({ Success: `alter table successfully...` });
        return knex.schema.alterTable("users", function (t) {
          t.unique("first_name");
        });
      } else {
        console.log({ Sorry: `users table not found` });
      }
    });
  }
unique_name()
  
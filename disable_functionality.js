const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Purnima@123",
      database: "simpleknex",
    },
  });
  
function drop_unique_name() {
    knex.schema.hasTable("users").then(function (exists) {
      if (exists) {
        console.log({ Success: `alter unique_name successfully...` });
        return knex.schema.alterTable("users", function (t) {
          t.dropUnique("name");
        });
      } else {
        console.log({ Sorry: `users table not found` });
      }
    });
  }
drop_unique_name()
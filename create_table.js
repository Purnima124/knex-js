const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Purnima@123",
      database: "simpleknex",
    },
  });
  
  // Create table
  function create_table() {
    knex.schema.hasTable("users").then(function (exists) {
      if (!exists) {
        console.log({ Success: `users table created successfully.` });
        return knex.schema.createTable("users", function (t) {
          t.increments("id").primary();
          t.string("first_name", 100);
          t.string("last_name", 100);
        });
      } else {
        console.log({ Sorry: `users table already exist!` });
      }
    });
  }

create_table()


const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Purnima@123",
      database: "facebook",
    },
  });
  
function drop_table() {
    knex.schema.hasTable("signup").then(function (exists) {
      if (exists) {
        console.log({ Success: `users table deleted successfully.` });
        return knex.schema.dropTable("signup");
      } else {
        console.log({ Sorry: `users table not found.` });
      }
    });
  }
  drop_table()
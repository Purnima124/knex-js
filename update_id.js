const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Purnima@123",
      database: "simpleknex",
    },
  });
function update_data(id) {
    knex.schema.hasTable("users").then(function (exists) {
      if (exists) {
        console.log({ Success: `users data updated successfully.` });
        return knex("users")
          .update({ first_name: "purnima", last_name: "Ganesh" })
          .where("id", id);
      } else {
        console.log({ Sorry: `users table not found` });
      }
    });
  }
update_data()
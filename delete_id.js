const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Purnima@123",
      database: "simpleknex",
    },
  });
  
function delete_by_id(id) {
    knex.schema.hasTable("users").then(function (exists) {
      if (exists) {
        console.log({ Success: `data deleted by id:${id} successfully.` });
        return knex("users").where("id", id).del();
      } else {
        console.log({ Sorry: `users table not found` });
      }
    });
  }
delete_by_id()
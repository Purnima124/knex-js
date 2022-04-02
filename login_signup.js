var fs=require('fs')
const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Purnima@123",
      database: "facebook",
    },
  });
console.log("welcome to login and sign up page")
var a=require("readline-sync")
var user=a.question("what u want to do login or sign up:")
if (user=="signup"){
  var user_name=a.question("enter the user_name :")
  var password1=a.question("enter ur password:")
  if (password1.match(/[A-Z]/m) && password1.match(/[a-z]/m) && password1.match(/[0-9]/m) &&  password1.match(/[$#&@]/m)){
    var password2=a.question("confirm ur password:")
    if (password1==password2){
      console.log("congrates")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      var dob=a.question("enter ur dob:")
      var gender=a.question("enter ur gender f/m :")
      obj={user_name:user_name,password1:password1,dob:dob,gender:gender}
      knex.schema.hasTable("signup").then(function (exists) {
        if (!exists) {
          knex.schema.createTable("signup", function (t) {
            t.increments("id").primary();
            t.string("user_name", 100);
            t.string("password1", 100);
            t.string("dob", 100);
            t.string("gender", 100); 
          }).then((data)=>{
            console.log('table created..')
          }).catch((err)=>{console.log(err)})
        } else {
          knex("signup").insert(obj)
          .then((data)=>{
            console.log('signed up success..')
          }).catch((err)=>{console.log(err)})        
        }
      });
    }else{console.log("Passwords didn't match.")}   
  }else{console.log("weak password")}
}else{  
  if(user=="login"){
    var Name=a.question("enter the usre_name ")
    var Password=a.question("enter the password ")
    knex.from('signup').select('*')
      .then((data)=>{
        // console.log(data)
        const found=data.find(function(user){
          if(user.user_name==Name && user.password1==Password){
              return user
          }
        })
        if (found){
          console.log('You logged in :', found)
        }else{console.log('data not matched')}
      }).catch((err)=>{console.log(err)})
  }else{console.log("your information is rong")}
}


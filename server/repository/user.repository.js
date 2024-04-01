const connection = require("../config/database.config");

let getUsers = (username, password) => {
    const query = `
        SELECT a.*, r.name AS role_name
        FROM account a
        INNER JOIN role r ON a.role_id = r.id
        WHERE a.username = '${username}' AND a.password = '${password}'
    `;
    console.log(query);
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    })
};

let insertUser = (user) => {
    let query = 
    "INSERT INTO account (full_name,email,password,username,role_id) VALUES "
     + "('" + user.full_name + "','" +user.email+ "','" +user.password+ "','" +user.username+ "', '2');";
    console.log(query);
     return new Promise((resolve, reject) => {
        connection.query(query,(err, result)=> {
            if(err) {
                return reject(err)
            }
            resolve(result)
        })
    })
}

module.exports = { getUsers, insertUser}
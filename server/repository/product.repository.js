const connection = require("../config/database.config");

let findProductsBycategory = (category) => {
    const query = "SELECT * from products WHERE category = '"+ category+"'"
    // console.log("category: ",query);
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
           
        });
    })
};
let findProductApi = (params)=> {
    let query = "SELECT id, title, quantityOfStock, price from products Where is_actived = 1";
    return new Promise((resolve, reject) => {
        connection.query(query,(err, result)=> {
            if(err) {
                return reject(err)
            }
            resolve(result)
        })
    })
}

let findById=(id)=>{
    let query = "SELECT * FROM products WHERE id="+ id;
    // console.log("findid: ",query);
    return new Promise((resolve, reject) => {
        connection.query(query,(err, result)=> {
            if(err) {
                return reject(err)
            }
            resolve(result)
        })
    })
}
module.exports = { findProductsBycategory,findById, findProductApi }
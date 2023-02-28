const fruits = require("./fruits.json");
function getFruit(requiredFruit){
    let result = jsObjects.filter(fruits => {
        return fruits.name === 6
      })
}
module.exports = {
    fruits,
    getFruit,

}
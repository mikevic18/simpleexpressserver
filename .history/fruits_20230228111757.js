const fruits = require("./fruits.json");
function getFruit(requiredFruit){
    let result = jsObjects.filter(fruits => {
        return fruits.name === requiredFruit;
})
console.log(result);
}
module.exports = {
    fruits,
    getFruit,

}
getFruit("Apple");
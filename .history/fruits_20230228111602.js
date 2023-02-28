const fruits = require("./fruits.json");
function getFruit(requiredFruit){
    let result = jsObjects.filter(fruits => {
        return fruits.name === requiredFruit;
})
}
module.exports = {
    fruits,
    getFruit,

}
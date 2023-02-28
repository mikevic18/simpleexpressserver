const fruits = require("./fruits.json");
function getFruit(requiredFruit){
    let result = fruits.filter(fruit => {
        return fruit.name === requiredFruit;
})
console.log(result);
}
module.exports = {
    fruits,
    getFruit,

}
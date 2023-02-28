const fruits = require("./fruits.json");
function getFruit(requiredFruit){
    let result = fruits.filter(fruits => {
        return fruits.name === requiredFruit;
})
console.log(result);
}
module.exports = {
    fruits,
    getFruit,

}
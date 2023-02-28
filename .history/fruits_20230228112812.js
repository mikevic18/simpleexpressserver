const fruits = require("./fruits.json");
function getFruit(requiredFruit){
    var result = [];

    fruits.forEach(function(o){if (o.na == requiredFruit) result.push(o);} );

    return result? result[0] : null; 
}
module.exports = {
    fruits,
    getFruit,

}
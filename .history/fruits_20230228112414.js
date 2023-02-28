const fruits = require("./fruits.json");
function getFruit(requiredFruit){
    var result = [];

    requiredFruit.forEach(function(o){if (o.b == value) result.push(o);} );

    return result? result[0] : null; 
}
module.exports = {
    fruits,
    getFruit,

}
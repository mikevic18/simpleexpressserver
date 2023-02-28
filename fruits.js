const fruits = require("./fruits.json");

const getFruit = (fruitName) => {
    return fruits.find((fruit) => fruit.name.toLowerCase() == fruitName);
};

const getMaxId = () => {
    const ids = fruits.map((fruit) => fruit.id);
    return Math.max(...ids);
};

module.exports = {
    fruits,
    getFruit,
    getMaxId,
};

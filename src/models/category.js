/* eslint-disable func-names */

const data = require('../../data/categories.json');

function Category() {
}

module.exports = Category;

Category.find = function () {
  return data;
};

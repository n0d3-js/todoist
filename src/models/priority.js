/* eslint-disable func-names */

const data = require('../../data/priorities.json');

function Priority() {
}

module.exports = Priority;

Priority.find = function () {
  return data;
};

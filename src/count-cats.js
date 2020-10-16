const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let newArr = matrix.flat(8);
  let count = 0;
  for (let i = 0; i < newArr.length; i ++){
    if ( newArr[i] === "^^" ){
      count++;
    };
  };
  return count;
};

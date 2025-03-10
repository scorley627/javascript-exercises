const fibonacci = function(num) {
  if (num < 0) return "OOPS";

  let arr = [0, 1];
  while (arr.length <= num)
    arr.push(arr.slice(-2).reduce((total, num) => total + num));
  return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;

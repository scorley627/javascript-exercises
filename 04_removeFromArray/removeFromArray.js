const removeFromArray = function(array, ...values) {
  let newArray = [];
  for (const element of array)
    if (!values.includes(element)) newArray.push(element);
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

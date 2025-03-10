const palindromes = function (text) {
  text = text.replace(/[^\w]/g, "").toLowerCase();

  let idx1 = 0;
  let idx2 = text.length - 1;
  while (idx1 < idx2) {
    if (text.charAt(idx1) != text.charAt(idx2)) return false;
    ++idx1;
    --idx2;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;

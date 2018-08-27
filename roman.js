exports.findRoman = function findRoman(num) {
  if (!+num) return false;
  var digits = String(+num).split(""),
    key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX"
    ],
    romanNumber = "",
    i = 3;
  while (i--) romanNumber = (key[+digits.pop() + i * 10] || "") + romanNumber;
  return Array(+digits.join("") + 1).join("M") + romanNumber;
};

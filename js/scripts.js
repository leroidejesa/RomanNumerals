// var romanNumeral = function(numeral) {
//   var symbols = { 1: "I", 4:"IV", 5:"V", 9:"IX", 10:"X"};
//   var answer = "";
//   if (numeral <= 3) {
//     for (var i = 0; i < numeral; i++) {
//       answer += "I";
//     }
//   } else if ((numeral === parseInt(symbols[1]) || (numeral === parseInt(symbols[4]) || (numeral === parseInt(symbols[5]) || (numeral === parseInt(symbols[9]) || (numeral === parseInt(symbols[10])) {
//     Object.keys(symbols).forEach(function(number) {
//     answer += symbols[number]
//   }
//   } else if ((numeral > 5) && (numeral < 9)) {
//       answer += symbols[5]
//       var remainder = numeral - 5
//       if (remainder <= 3) {
//         for (var i = 0; i <= remainder; i++) {
//           answer += "I";
//         }
//       }
//     }
//   });
//   return answer;
// };



var romanNumeral = function(numeral) {
  var symbols = { 1: "I", 4:"IV", 5:"V", 9:"IX", 10:"X"};
  var answer = "";
  var num = numeral;
  if (numeral <= 3) {
    for (var i = 0; i < numeral; i++) {
      answer += "I";
    }
    return answer;
  } else if ((num > 3) && (num <= 10)) {
    Object.keys(symbols).forEach(function(number) {
      if (num === parseInt(number)) {
        answer += symbols[number];
      } else if ((num > 5) && (num < 9)) {
        answer += symbols[5];
        num -= 5;
        if (num <= 3) {
          for (var i = 0; i < num; i++) {
            answer += "I";
          }
        }
      }
    })
    return answer;
  }
}

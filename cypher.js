function caesarCypher(message, shift) {

  if (shift === undefined) {
    shift = -3;
  }

  function lowerLetter(value, shift) {
    value += shift;
    if(value < 97) {
      value += 26;
    } else if(value > 122) {
      value -= 26;
    }
    return String.fromCharCode(value);
  }

  function upperLetter(value, shift) {
    value += shift;
    if(value < 65) {
      value += 26;
    } else if(value > 90) {
      value -= 26;
    }
    return String.fromCharCode(value);
  }

  var letters = message.split('')

  var new_letters = letters.map(function(char) {
    value = char.charCodeAt(0);
    if (value >= 97 && value <= 122) {
      value = lowerLetter(value, shift);
    } else if (value >= 65 && value <= 90) {
      value = upperLetter(value, shift);
    } else {
      value = String.fromCharCode(value);
    }
    return value
  })

  return new_letters.join('');
}

console.log(caesarCypher("pb uhdo qdph lv grqdog gxfn"));

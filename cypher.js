var caesarCypher = (function() {

  var caesar_shift = 3;
  my_public_obj = {};

  function caesarBuilder (shift) {
    return function (message) {

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
  }

  my_public_obj.cypher = caesarBuilder(-caesar_shift);
  my_public_obj.uncypher = caesarBuilder(caesar_shift);

  return my_public_obj;

})();

console.log(caesarCypher.cypher("pb uhdo qdph lv grqdog gxfn"));



const toUpper = word => word.toUpperCase();
const toLower = word => word.toLowerCase();

function convertToConditionalUpperCase(words) {
  return words.map(word => (word.length > 5 ? toUpper(word) : toLower(word)));
}

exports.convertToConditionalUpperCase = convertToConditionalUpperCase;

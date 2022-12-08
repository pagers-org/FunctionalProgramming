function getUpperCaseCondition(word) {
  return word.length > 5;
}

function convertToConditionalUpperCase(words) {
  let capitalized = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    capitalized.push(
      getUpperCaseCondition(word) ? word.toUpperCase() : word.toLowerCase()
    );
  }

  return capitalized;
}

exports.convertToConditionalUpperCase = convertToConditionalUpperCase;

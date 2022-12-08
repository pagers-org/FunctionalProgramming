function convertToConditionalUpperCase(words) {
  return words.map(word => getConditionalCapitalizedWord(word));
}

function getConditionalCapitalizedWord(word) {
  if (getWordCondition(word)) {
    return word.toUpperCase();
  } else {
    return word.toLowerCase();
  }
}

function getWordCondition(word) {
  return word.length > 5;
}

/**
 * 이 함수는 매개변수로 전달된 words를 복사 없이 그대로 참조하고 있습니다.
 * 문제점은 실제로 words의 값을 변경하면 부수효과가 나타납니다. (암묵적 입력)
 * 이를 해결하기 위해 words을 복사하여 사용하도록 수정할 수도 있습니다.
 * 계산 추출하기 -> words[i].length > 5 는 이 함수의 비지니스 로직입니다.
 * 이를 함수로 추출하여 의도를 드러내도록 수정할 수 있습니다.
 *
 * map을 이용하여 고차함수로도 수정할 수 있습니다.
 */

exports.convertToConditionalUpperCase = convertToConditionalUpperCase;

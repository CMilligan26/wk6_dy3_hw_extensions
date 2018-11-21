const AnagramFinder = function (word) {
  this.word = word;
  this.wordSplit = this.splitWord(word.toUpperCase());
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  wordMatch = [];
  for (let word of otherWords) {
    if (word === this.word) {break;};
    if (word.length !== this.word.length) {break;};
    otherWord = this.splitWord(word.toUpperCase());
    let wordCheck = true;
    for (let letter of this.wordSplit) {
      wordCheck = otherWord.some(otherLetter => otherLetter === letter);
      if (wordCheck === false) {break;};
    };
    if (wordCheck !== false) {wordMatch.push(word);};
  };
  return wordMatch;
};


AnagramFinder.prototype.splitWord = function (word) {
  return word.split('');
};

module.exports = AnagramFinder;

const AnagramFinder = function (word) {
  this.word = word;
  this.wordSplit = this.splitWord(word.toUpperCase());
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const wordMatch = [];
  for (const word of otherWords) {
    if (this.checkWordQualifies(word)) {break;};
    const otherWord = this.splitWord(word.toUpperCase());
    let wordCheck = true;
    for (const letter of this.wordSplit) {
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

AnagramFinder.prototype.checkWordQualifies = function (word) {
  if (word === this.word || word.length !== this.word.length) {return true;};
};

module.exports = AnagramFinder;

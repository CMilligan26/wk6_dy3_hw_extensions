const AnagramFinder = function (word) {
  this.word = word;
  this.wordSplit = this.splitWord(word.toUpperCase());
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  let wordMatch = this.wordsThatQualify(otherWords);

  for (letter of this.wordSplit) {
    wordMatch = wordMatch.filter(word => word.toUpperCase().includes(letter));
  };

  return wordMatch;
};

AnagramFinder.prototype.splitWord = function (word) {
  return word.split('');
};

AnagramFinder.prototype.wordsThatQualify = function (words) {
  let wordsThatQualify = [];
  for (const word of words) {
    if (word !== this.word && word.length === this.word.length) {
      wordsThatQualify.push(word);
    };
  };
  return wordsThatQualify;
};

module.exports = AnagramFinder;

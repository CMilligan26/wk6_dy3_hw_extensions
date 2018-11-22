const AnagramFinder = function (word) {
  this.word = word;
  this.wordSplit = word.toUpperCase().split('');
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  let wordMatch = this.wordsThatQualify(otherWords);
  for (letter of this.wordSplit) {
    wordMatch = wordMatch.filter(word => word.toUpperCase().includes(letter));
  };
  return wordMatch;
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

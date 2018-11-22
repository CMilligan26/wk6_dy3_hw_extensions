const IsogramFinder = function (word) {
  this.wordSplit = word.toUpperCase().split('');
};

IsogramFinder.prototype.isIsogram = function () {
  return this.wordSplit.every(letter => this.moreThanOneOccurence(letter));
};

IsogramFinder.prototype.moreThanOneOccurence = function (letterToCheck) {
  const findLetters = this.wordSplit.filter(letter => letter === letterToCheck);
  return findLetters.length === 1;
};

module.exports = IsogramFinder;

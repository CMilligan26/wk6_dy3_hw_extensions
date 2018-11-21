const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase().split('')
}

PangramFinder.prototype.isPangram = function () {
  fixedPhrase = this.fixPhrase();
  return this.alphabet.every(letter => fixedPhrase.includes(letter));
}

PangramFinder.prototype.fixPhrase = function () {
  const test = this.phrase.filter(character => this.alphabet.includes(character));
  return test;
};

module.exports = PangramFinder;

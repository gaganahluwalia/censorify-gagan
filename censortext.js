var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];
function censor(inStr) {
  for (idx in censoredWords) {
    inStr = inStr.replace(censoredWords[idx], "****");
  }
  for (idx in customCensoredWords) {
    inStr = inStr.replace(customCensoredWords[idx], "****");
  }
  return inStr;
}
function addCensoredWord(word){
  customCensoredWords.push(word);
}
function getCensoredWords(){
  return censoredWords.concat(customCensoredWords);
}

function removeCensoredWords(word){
  var stdWordIndex = censoredWords.indexOf(word);
  if(stdWordIndex >= 0) {
    censoredWords.splice(stdWordIndex, 1);
  }
  var cusWordIndex = customCensoredWords.indexOf(word);
  if(cusWordIndex >= 0) {
    customCensoredWords.splice(cusWordIndex, 1);
  }
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;
exports.removeCensoredWords = removeCensoredWords;
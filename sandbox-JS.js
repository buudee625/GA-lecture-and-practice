const test1 = ["this","is","a","sentence"]

function sentencify(word) {
    return word.join(" ")[0].toUpperCase() + word.join(" ").slice(1) + "."
  }

console.log(sentencify(test1));
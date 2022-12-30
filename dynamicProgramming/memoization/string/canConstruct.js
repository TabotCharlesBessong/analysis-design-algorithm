
const canConstruct = (word,arr) => {
  if (word === '') return true
  for (let w of arr) {
    if(word.indexOf(w) === 0) {
      const suffix = word.slice(w.length)
      if (canConstruct(suffix,arr)) return true
    }
  }
  return false 
}

console.log('====================================')
console.log(canConstruct('mylove',['my','yl','ol','love']))
console.log(
	canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeee", ["e", "ee", "eee", "eeee"])
);

console.log('====================================')


const canConstructMemo = (word, arr,memo={}) => {
  if (word in memo) return memo[word]
	if (word === "") return true;
	for (let w of arr) {
		if (word.indexOf(w) === 0) {
			const suffix = word.slice(w.length);
			if (canConstruct(suffix, arr,memo)) {
        memo[word] = true
        return true
      }
		}
	}
	return false;
};

console.log("==================Memoized form==================");
console.log(canConstructMemo("mylove", ["my", "yl", "ol", "love"]));
console.log(canConstructMemo('eeeeeeeeeeeeeeeeeeeeeeeeeeeee',['e','ee','eee','eeee']))
console.log("==================Memoized form==================");
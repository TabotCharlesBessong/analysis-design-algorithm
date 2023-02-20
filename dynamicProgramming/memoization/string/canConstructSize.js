
const canConstruct = (word, arr) => {
	if (word === "") return 1;
  let count = 0
	for (let w of arr) {
		if (word.indexOf(w) === 0) {
			const howMany = canConstruct(word.slice(w.length),arr)
      count += howMany
		}
	}
	return count;
};

console.log("====================================");
console.log(canConstruct("mylove", ["my", "yl", "ol", "love"]));
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeee", ["e", "ee", "eee", "eeee"]));

console.log("====================================");

const canConstructMemo = (word, arr, memo = {}) => {
	if (word in memo) return memo[word];
	if (word === "") return 1;
  let count = 0
	for (let w of arr) {
		if (word.indexOf(w) === 0) {
			// const suffix = word.slice(w.length);
			const howMany = canConstructMemo(word.slice(w.length), arr , memo);
			count += howMany;
		}
	}
	return count;
};

console.log("==================Memoized form==================");
console.log(canConstructMemo("mylove", ["my", "yl", "ol", "love"]));
console.log(
	canConstructMemo("eeeeeeeeeeeeeeeeeeeeeee", ["e", "ee", "eee", "eeee"])
);
console.log("==================Memoized form==================");
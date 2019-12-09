const input = require('fs').readFileSync('./input.txt', 'utf8');


const getLetterMapping = (word)=>{
	return word.split('').reduce((r, letter)=>{
		if(!r[letter]) r[letter] = 0;
		r[letter] += 1;
		return r;
	}, {});
};

const hasCount = (mapping, count)=>Object.values(mapping).includes(count);

let twice=0,thrice=0;

input.split('\n').map((word)=>{
	const mapping = getLetterMapping(word);
	if(hasCount(mapping, 2)) twice++;
	if(hasCount(mapping, 3)) thrice++;
});


const result = twice*thrice;


console.log(result);
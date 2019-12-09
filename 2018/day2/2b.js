const input = require('fs').readFileSync('./input.txt', 'utf8');


const countDifferences = (word1, word2)=>{
	return word1.split('').reduce((diffCount, letter1, idx)=>{
		if(letter1 !== word2[idx]) diffCount++;
		return diffCount
	}, 0)
};

const removeDifferences = (word1, word2)=>{
	return word1.split('').filter((letter1, idx)=>{
		return letter1 == word2[idx];
	}).join('');
}

const findValidIds = (ids)=>{
	let foundId2;
	const foundId1 = ids.find((id1)=>{
		foundId2 = ids.find((id2)=>countDifferences(id1, id2) == 1);
		return !!foundId2;
	})
	return [foundId1, foundId2];
};


const ids = input.split('\n');
const validIds = findValidIds(ids);
const part2 = removeDifferences(...validIds)



console.log('Part 2:', part2);
const input = require('fs').readFileSync('./input.txt', 'utf8');

let current = 0, idx=0;
const result = new Set();

const freqs = input.split('\n').map(Number);

while(1){
	current += freqs[idx];

	if(result.has(current)) break;
	result.add(current);
	idx = (idx + 1)%freqs.length;
}

console.log('Part 2: ', current);
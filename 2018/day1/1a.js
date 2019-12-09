const input = require('fs').readFileSync('./input.txt', 'utf8');

const part1 = input.split('\n').map(Number).reduce((r, a)=>r+a, 0);

console.log('Part 1: ', part1);


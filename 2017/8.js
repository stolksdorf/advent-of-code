const input = require('./8.input.js');

let simple = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`;

let registers = {};

const buildInstructions = (instructions)=>{
	return instructions.split('\n').map((line)=>{
		const parts = line.split(' ');
		return {
			reg     : parts[0],
			val     : parts[2] * (parts[1] == 'inc' ? 1 : -1),
			target  : parts[4],
			op      : parts[5],
			compare : parts[6]
		}
	})
};
const testInstruction = (int)=>{
	const targetReg = registers[int.target] || 0;
	const ops = {
		'==' : (a,b)=>a==b,
		'!=' : (a,b)=>a!=b,
		'>'  : (a,b)=>a>b,
		'<'  : (a,b)=>a<b,
		'<=' : (a,b)=>a<=b,
		'>=' : (a,b)=>a>=b,
	};
	return ops[int.op](targetReg, int.compare);
};

const run = (rawInput)=>{
	registers = {};
	const instructions = buildInstructions(rawInput);
	instructions.map((int)=>{
		if(testInstruction(int)){
			registers[int.reg] += int.val;
		}
	});
	const maxRegVal = ()=>Object.values(registers)
		.reduce((result, num)=>(num > result ? num : result), -Infinity);

	return maxRegVal();
};

console.log('Part 1', run(simple));


const run2 = (rawInput)=>{
	let overallMax = -Infinity
	registers = {};
	const instructions = buildInstructions(rawInput);

	instructions.map((int)=>{
		if(testInstruction(int)){
			registers[int.reg] += int.val;

			if(getOverallMax){
				const currentMax = maxRegVal();
				if(currentMax > overallMax) overallMax = currentMax;
			}
		}
	});
	return overallMax;
};


console.log('Part 2', run2(input));

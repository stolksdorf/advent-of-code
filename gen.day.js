const fse = require('fs-extra');

const [_, __, year, day] = process.argv;


if(!year || !day) throw 'Usage: genday [year] [day]';


if(!fse.pathExistsSync(`./${year}`)){
	fse.ensureDirSync(`./${year}`);
	fse.ensureDirSync(`./${year}/input`);
	fse.ensureDirSync(`./${year}/output`);
	fse.writeFileSync(`./${year}/utils.js`, '');
	console.log(`Created folder ./${year}`);
}

if(!fse.pathExistsSync(`./${year}/day_${day}.js`)){
	fse.writeFileSync(`./${year}/day_${day}.js`,
		`const {input, output} = require('./utils.js')(${year},${day});\nconst {raw, lines} = input();\n\noutput();`,

	);
	console.log(`Created file ./${year}/day_${day}.js`);
}

console.log('done.');
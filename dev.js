const nodemon = require('nodemon');

const [_, __, year, day] = process.argv;

nodemon({
	script : `${year}/day_${day}.js`,
	ext    : 'js json',
}).on('restart', (files) => {
	console.log('---------');
});
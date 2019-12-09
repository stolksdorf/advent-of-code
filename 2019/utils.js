const request = require('sync-request');
const fse = require('fs-extra');




module.exports = (year, day)=>{
	return {
		input : ()=>{
			let session;
			try{
				session = fse.readFileSync('./session', 'utf8');
			}catch(err){
				throw `Could not load session. Grab the cookie from the adventof code site and store it in a file called 'session'`
			}
			let raw='';
			if(fse.pathExistsSync(`./${year}/input/input_${day}.txt`)){
				raw = fse.readFileSync(`./${year}/input/input_${day}.txt`, 'utf8');
			}else{
				console.log('fetching...');
				let {body, statusCode}= request(`GET`, `https://adventofcode.com/${year}/day/${day}/input`,{
					headers : {
						'Cookie': `session=${session}`
					}
				});
				if(statusCode !== 200) throw body.toString('utf8');

				raw = body.toString('utf8');
				fse.writeFileSync(`./${year}/input/input_${day}.txt`, raw);
			}
			return {raw, lines:raw.split('\n')}
		},
		output : (res)=>{
			fse.writeFileSync(`./${year}/output/output_${day}.txt`, JSON.stringify(res));
		}

	}
}
var soap = require('soap');
var url = 'http://localhost:8001/wsdl?wsdl';
var args = { firstName: 'test' };

(async () => {
	const client = await soap.createClientAsync(url);
	await client.sayHello(args, (res) => {
		console.log(res);
	});
})();

/*
import benchmark from './benchmark';
const iterations: number = 10;

// just some testing utils
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function soap(): Promise<void> {
	await wait(2000);
}

benchmark('test-x', iterations, soap);
*/

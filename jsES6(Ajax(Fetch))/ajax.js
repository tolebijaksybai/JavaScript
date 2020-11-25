const url = 'https://jsonplaceholder.typicode.com/users/';

async function Info() {
	let promise = await fetch(url);
	promise = await promise.json()
	for (key in promise) {
		console.log(promise[key]);
	}
}

Info();
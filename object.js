const person = {
	name: 'Marinka',
	age: '25',
	isProgrammer: false,
	hobbies: ['reading', 'dancing', 'skating', 'getting slim and eating'],
	[1 + 3]: 'Calculated value',
	greet() {
		console.log('Hi, there!')
	}
}

console.log(person);

// delete key
delete person[4];

//change value of key
person.isProgrammer = true;
console.log(person);

//iteration in object
//for (let key in person) {
//	console.log(key);
//}

const keys = Object.keys(person)

console.log(keys)

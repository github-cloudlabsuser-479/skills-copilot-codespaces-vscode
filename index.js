const nestedData = [
    [{ name: 'John' }, { name: 'Jane' }, { name: 'Bob' }],
    [{ name: 'Alice' }, { name: 'Eve' }, { name: 'Charlie' }]
];

const names = nestedData.flatMap(arr => arr.map(item => item.name));
console.log(names);
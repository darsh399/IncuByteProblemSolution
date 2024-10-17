const { add } = require('./Calculator');

const testCases = [
    { input: "", expected: 0 },
    { input: "1", expected: 1 },
    { input: "1,5", expected: 6 },
    { input: "1\n2,3", expected: 6 },
    { input: "//;\n1;2", expected: 3 },
    { input: "//:\n1:2:3", expected: 6 },
];

testCases.forEach(({ input, expected }, index) => {
    const result = add(input);
    console.log(`Test case ${index + 1}: ${result === expected ? 'Pased' : 'Failed'}`);
});

try {
    add("-1,2");
} catch (e) {
    console.log(e.message); // return negative number
}

try {
    add("-1,-2");
} catch (e) {
    console.log(e.message); // return multiple negative error
}

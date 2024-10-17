const { add } = require('./Calculator');


const input = "1,2,3"; // Send different inputs from here
try {
    const result = add(input);
    console.log(`The result of adding "${input}" is: ${result}`);
} catch (error) {
    console.error(error.message);
}
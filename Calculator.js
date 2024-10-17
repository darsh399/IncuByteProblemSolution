function add(numbers) {
    if (!numbers) return 0; // Will return 0 if numbers not contains or empty
    if (numbers.length === 1) return Number(numbers); // Will return same number if only one number available

        
        let delimiter = ','; // Default delimiter
        if (numbers.startsWith('//')) {
            const parts = numbers.split('\n');
            delimiter = parts[0].substring(2); // find and remove delimeters length
            numbers = parts[1]; // final number
        }

        numbers = numbers.replace(/\n/g, delimiter);

        const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));

        //negative numbers
        const negativeNumbers = numArray.filter(num => num < 0);
        if (negativeNumbers.length > 0) {
            throw new NegativeNumberError(negativeNumbers); // Use the correct error class
        }
    
        // Return the sum and find out NaN.
        return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
    }
    
module.exports = { add };

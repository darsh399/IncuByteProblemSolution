function add(numbers) {
    if (!numbers) return 0; // Will return 0 if numbers not contains or empty
    if (numbers.length === 1) return Number(numbers); // Will return same number if only one number available

        
        let delimiter = ','; // Default delimiter
        if (numbers.startsWith('//')) {
            const parts = numbers.split('\n');
            delimiter = parts[0].substring(2); // find and remove delimeters length
            numbers = parts[1]; // final number
        }
}
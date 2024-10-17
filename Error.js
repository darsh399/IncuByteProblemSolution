class NegativeNumberError extends Error {
    constructor(negatives) {
        super(`Negative numbers not allowed: ${negatives.join(', ')}`);
        this.name = 'NegativeNumberError';
    }
}

module.exports = { NegativeNumberError };
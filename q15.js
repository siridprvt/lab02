class Game {
    constructor() {
        this.targetNumber = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
    }

    startNewGame() {
        this.targetNumber = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
    }

    checkGuess(guess) {
        this.attempts++;
        if (guess > this.targetNumber) {
            return 'lower';
        } else if (guess < this.targetNumber) {
            return 'higher';
        } else {
            return `Correct! It took you ${this.attempts} attempts.`;
        }
    }
}

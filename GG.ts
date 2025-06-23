import * as readline from 'readline';

class GuessTheNumberGame {
  private secretNumber: number;
  private attempts: number;
  private rl: readline.Interface;

  constructor() {
    this.secretNumber = Math.floor(Math.random() * 100) + 1; // Random number (1-100)
    this.attempts = 0;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  start(): void {
    console.log("Welcome to Guess the Number! (1-100)");
    this.askForGuess();
  }

  private askForGuess(): void {
    this.rl.question("Enter your guess: ", (input) => {
      const guess = parseInt(input.trim());

      if (isNaN(guess)) {
        console.log("Please enter a valid number!");
        this.askForGuess();
        return;
      }

      this.attempts++;
      this.checkGuess(guess);
    });
  }

  private checkGuess(guess: number): void {
    if (guess === this.secretNumber) {
      console.log(`🎉 Correct! You guessed it in ${this.attempts} attempts.`);
      this.rl.close();
    } else if (guess < this.secretNumber) {
      console.log("⬆️ Too low! Try again.");
      this.askForGuess();
    } else {
      console.log("⬇️ Too high! Try again.");
      this.askForGuess();
    }
  }
}

// Start the game
const game = new GuessTheNumberGame();
game.start();

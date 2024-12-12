import random_word

def hangman():
    secret_word = random_word.randomness()
    word_length = len(secret_word)
    chances = word_length + 2
    guessed_letters = []
    correct_guesses = ['_'] * word_length

    print(f"You have {chances} chances to guess the word.")

    while chances > 0 and '_' in correct_guesses:
        print("\nCurrent word: " + ' '.join(correct_guesses))
        guess = input("Guess a letter: ").lower()

        if len(guess) != 1 or not guess.isalpha():
            print("Invalid input, please enter a single letter.")
            continue

        if guess in guessed_letters:
            print("You already guessed that letter. Try again.")
            continue

        guessed_letters.append(guess)

        if guess in secret_word:
            print(f"'{guess}' is in the word.")
            for index, letter in enumerate(secret_word):
                if letter == guess:
                    correct_guesses[index] = guess
        else:
            chances -= 1
            print(f"'{guess}' is not in the word. You have {chances} chances left.")

    if '_' not in correct_guesses:
        print(f"Congratulations! You've guessed the word: {secret_word}")
    else:
        print(f"Game over! The word was: {secret_word}")

hangman()

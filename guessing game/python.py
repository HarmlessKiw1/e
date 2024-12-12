import random

def ran_num(num):
    return random.randint(1, num) 

print("Enter a whole number 1-50 \n")
secret_num = ran_num(50)

guess = ""
guess_count = 0
guess_limit = 6

while guess != secret_num:
    if guess_count < guess_limit:
        try:
            guess = int(input("Enter your guess: "))
            guess_count += 1
        except ValueError:
            print("Invalid input.")
            continue
    else:
        print("\nOut of guesses, you lose!")
        print(f"\nThe number was {secret_num}!\n")
        break

    if guess < secret_num:
        print("Too low!")
    elif guess > secret_num:
        print("Too high!")
    else:
        print("You win!")
        break

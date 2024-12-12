import random
import string

def gen_pass(len):
    chars = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(chars) for x in range(len))

def main():
    
    while True:
        try:
            len = int(input("Enter password length: "))
            if len <= 0:
                raise ValueError("Length must be positive.")
            break
        except ValueError as e:
            print("Invalid input: Please enter a positive integer.")
    while True:
        try:
            num_pass = int(input("Enter amount of passwords: "))
            if num_pass <= 0:
                raise ValueError("Number of passwords must be positive.")
            break
        except ValueError as e:
            print("Invalid input: Please enter a positive integer.")
    for x in range(num_pass):
        password = gen_pass(len)
        print(password)

if __name__ == "__main__":
    main()

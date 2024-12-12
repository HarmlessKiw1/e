import csv
import json

# First Name
while True:
    fname = input('Enter your first name: ')
    if not fname.isalpha():
        print("Invalid input, please enter only letters")
    else:
        break

fname = fname.capitalize()

# Last Name
while True:
    lname = input('Enter your last name: ')
    if not lname.isalpha():
        print("Invalid input, please enter only letters")
    else:
        break

lname = lname.capitalize()

# Phone Number
while True:
    phone_num = input('Enter your phone number: ')
    if len(phone_num) == 10 and phone_num.isdigit():
        phone_num = f"({phone_num[:3]}) {phone_num[3:6]}-{phone_num[6:]}"
        break
    else:
        print("Invalid input, please enter exactly and only 10 numbers.")

# First Name, Last Name, and Phone Number dictionary
name = [
    {"first_name": fname, "last_name": lname, "phone_num": phone_num}
]

# Create CSV file with the inputted values
with open('name.csv', mode='w', newline='') as csvfile:
    fieldnames = name[0].keys()
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(name)

# Read data from CSV and write to JSON
with open('name.csv', mode='r') as csvfile:
    reader = csv.DictReader(csvfile)
    data = [row for row in reader]

# Create JSON file from the CSV file data
with open('name.json', 'w') as jsonfile:
    json.dump(data, jsonfile, indent=4)
from flask import Flask, render_template, request

# Flask things
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/check', methods=['POST'])



# checks if number is odd or even
def check_num():
    number = int(request.form['number'])
    if number % 2 == 0:
        result = f"{number} is Even"
        print(result)
    else:
        result = f"{number} is Odd"
        print(result)
    return render_template('index.html', result=result)

# runs app
if __name__ == '__main__':
    app.run(debug=True)
# save this as app.py
from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello, World aaa!"


@app.route("/test")
def test1():
    return "test12345"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050, debug=True)

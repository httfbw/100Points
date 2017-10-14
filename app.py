from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = "change"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/learn/")
def learn():
    return render_template("learn.html")


@app.route("/teach/")
def teach():
    return render_template("teach.html")


if __name__ == "__main__":
    app.run(debug=True)

import datetime

from flask import Flask, render_template, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = "change"
CORS(app)

vocabulary = {"2017.10.14":
        [
            {"question": "Haus", "answer": "house"},
            {"question": "Baum", "answer": "tree"},
            {"question": "Computer", "answer": "computer"},
            {"question": "Ente", "answer": "duck"},
            {"question": "Hund", "answer": "dog"},
            {"question": "Katze", "answer": "cat"},
            {"question": "Schule", "answer": "school"},
            {"question": "Apfel", "answer": "apple"},
            {"question": "Banane", "answer": "banana"},
            {"question": "Pfirsich", "answer": "peach"}
        ]
    }

statistics = [
    {"name": "Person A", "points": 40},
    {"name": "Person B", "points": 30},
    {"name": "Person C", "points": 100}
]

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/learn/")
def learn():
    return render_template("learn.html")


@app.route("/teach/")
def teach():
    return render_template("teach.html")


@app.route("/api/vocabulary/", methods=["GET"])
def get_vocabulary():
    return jsonify(vocabulary[str(datetime.datetime.now().strftime("%Y.%m.%d"))])


@app.route("/api/vocabulary/", methods=["POST"])
def post_vocabulary():
    date = str(datetime.datetime.now().strftime("%Y.%m.%d"))

    # TODO: Check whether all fields have a value
    # fields = ["question1", "question1", "question1", "question1", "question1", "question1", "question1", "question1", "question1", ]

    vocabulary[date] = [
        {"question": request.form.get("question1"), "answer": request.form.get("answer1")},
        {"question": request.form.get("question2"), "answer": request.form.get("answer2")},
        {"question": request.form.get("question3"), "answer": request.form.get("answer3")},
        {"question": request.form.get("question4"), "answer": request.form.get("answer4")},
        {"question": request.form.get("question5"), "answer": request.form.get("answer5")},
        {"question": request.form.get("question6"), "answer": request.form.get("answer6")},
        {"question": request.form.get("question7"), "answer": request.form.get("answer7")},
        {"question": request.form.get("question8"), "answer": request.form.get("answer8")},
        {"question": request.form.get("question9"), "answer": request.form.get("answer9")},
        {"question": request.form.get("question10"), "answer": request.form.get("answer10")}

    ]
    return jsonify(vocabulary)

@app.route("/api/statistics/", methods=["GET"])
def get_statistics():
    return jsonify(statistics)


@app.route("/api/statistics/", methods=["POST"])
def post_statistics():
    statistics.append({
        "name": request.form.get("name"),
        "points": str(request.form.get("points"))
    })

    # TODO: Sort statistics
    return jsonify(statistics)

if __name__ == "__main__":
    app.run(debug=True)

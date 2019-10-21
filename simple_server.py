from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def in():
    return render_template('example.html')

@app.route("/filter.html")
def fl():
    return render_template('filter.html')

@app.route("/catalog.html")
def ct():
    return render_template('catalog.html')

@app.route("/example.html")
def ex():
    return render_template('example.html')



if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port="80")
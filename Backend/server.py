from flask import Flask, render_template, request
import json

app = Flask(__name__)


@app.route('/notebook')
def notebook():
    f = open("./Jsons/0.json", 'r')
    data = json.load(f)
    f.close()
    return data

@app.route('/smartphone')
def smartphone():
    f = open("./Jsons/1.json", 'r')
    data = json.load(f)
    f.close()
    return data

@app.route('/smartwatch')
def smartwatch():
    f = open("./Jsons/2.json", 'r')
    data = json.load(f)
    f.close()
    return data

@app.route('/TV')
def TV():
    f = open("./Jsons/3.json", 'r')
    data = json.load(f)
    f.close()
    return data

@app.route('/speaker')
def speaker():
    f = open("./Jsons/4.json", 'r')
    data = json.load(f)
    f.close()
    return data

@app.route('/headphone')
def headphone():
    f = open("./Jsons/5.json", 'r')
    data = json.load(f)
    f.close()
    return data

@app.route('/earphone')
def earphone():
    f = open("./Jsons/6.json", 'r')
    data = json.load(f)
    f.close()
    return data

@app.route('/desktop')
def desktop():
    f = open("./Jsons/7.json", 'r')
    data = json.load(f)
    f.close()
    return data

@app.route('/gaming')
def gaming():
    f = open("./Jsons/8.json", 'r')
    data = json.load(f)
    f.close()
    return data

@app.route('/refrigerator')
def refrigerator():
    f = open("./Jsons/9.json", 'r')
    data = json.load(f)
    f.close()
    return data

@app.route('/washmachine')
def washmachine():
    f = open("./Jsons/10.json", 'r')
    data = json.load(f)
    f.close()
    return data

@app.route('/robotcleaner')
def robotcleaner():
    f = open("./Jsons/11.json", 'r')
    data = json.load(f)
    f.close()
    return data

@app.route('/digital')
def digital():
    f = open("./Jsons/12.json", 'r')
    data = json.load(f)
    f.close()
    return data

@app.route('/keyboard')
def keyboard():
    f = open("./Jsons/13.json", 'r')
    data = json.load(f)
    f.close()
    return data

@app.route('/mouse')
def mouse():
    f = open("./Jsons/14.json", 'r')
    data = json.load(f)
    f.close()
    return data

@app.route('/phone_acce')
def phone_acce():
    f = open("./Jsons/15.json", 'r')
    data = json.load(f)
    f.close()
    return data

@app.route('/relativePC')
def relativePC():
    f = open("./Jsons/16.json", 'r')
    data = json.load(f)
    f.close()
    return data

@app.route('/aircon')
def aircon():
    f = open("./Jsons/17.json", 'r')
    data = json.load(f)
    f.close()
    return data

@app.route('/kickboard')
def kickboard():
    f = open("./Jsons/18.json", 'r')
    data = json.load(f)
    f.close()
    return data


@app.route('/search')
def search():
    key = request.args.get('key', '243')
    print(key)
    return "key = " + key

if __name__ == "__main__":
    app.run(debug=True)
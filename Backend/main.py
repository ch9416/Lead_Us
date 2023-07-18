from flask import Flask, render_template, request
import pymysql
import pandas as pd

app = Flask(__name__)

conn = pymysql.connect(host='localhost', user='root', password='sk125874!!', db='mydb', charset='utf8')
cur = conn.cursor()
item = ["노트북", "스마트폰", "스마트워치", "TV", " 스피커", "헤드폰", "이어폰", "데스크탑", "게이밍", "냉장고", "세탁기", "로봇청소기", "가전/디지털", "키보드", "마우스", "폰악세사리", "PC주변기기", "에어컨", "킥보드"]
item_en = ["notebook", "smartphone", "smartwatch", "TV", "speaker", "headphone", "earphone", "desktop", "gaming", "refrigerator", "washmachine", "robotcleaner", "digital", "keyboard", "mouse", "phone_acce", "relativePC", "aircon", "kickboard"]

#카테고리별로 json제작
for i in range(len(item)):
    cur.execute('select c.category, p.img, p.name, n.cur_price, n.old_price, n.percent, n.return_price, n.return_percent from now_selling n, products p, category c where n.products_name = p.name and p.name = c.products_name and c.category = %s', (item[i]))
    res = cur.fetchall()
    globals()[item_en[i]], category, img, name, cur_price, old_price, percent, return_price, return_percent = [], [], [], [], [], [], [], [], []
    for x in res:
        globals()[item_en[i]].append({'category' : x[0], 'img' : x[1], 'name' : x[2], 'cur_price' : x[3], 'old_price' : x[4], 'percent' : x[5], 'return_price' : x[6], 'return_percent': x[7]})
        category.append(x[0])
        img.append(x[1])
        name.append(x[2])
        cur_price.append(x[3])
        old_price.append(x[4])
        percent.append(x[5])
        return_price.append(x[6])
        return_percent.append(x[7])
    df = pd.DataFrame(zip(name, img, cur_price, old_price, category, percent, return_price, return_percent))
    df.columns = ['name', 'img', 'cur_price', 'old_price', 'category', 'percent', 'return_price', 'return_percent']
    globals()[item_en[i]+'_js'] = df.to_json(orient='records', force_ascii=False)

cur.execute('select * from time')
tim = cur.fetchall()
@app.route('/<name>', methods=['GET', 'POST'])
def home(name):
    if request.method == 'POST':
        value = request.form['ee']
        name = res[int(value)][2]
        time = []
        price = []
        for x in tim:
            if x[0] == name:
                time.append(x[1])
                price.append(x[2])
        return render_template("product.html", name=name, time=time, price=price)
    return render_template("test.html", data=list)


conn.commit()
conn.close()


@app.route('/users')
def users():
    return {"members": [{ "id" : 1, "name" : "yerin" }, { "id" : 2, "name" : "dalkong" }]}

#카테고리별로 리액트에 json전달
@app.route('/notebook')
def notebook():
    return notebook_js

@app.route('/smartphone')
def smartphone():
    return smartphone_js

@app.route('/smartwatch')
def smartwatch():
    return smartwatch_js

@app.route('/TV')
def TV():
    return TV_js

@app.route('/speaker')
def speaker():
    return speaker_js

@app.route('/headphone')
def headphone():
    return headphone_js

@app.route('/earphone')
def earphone():
    return earphone_js

@app.route('/desktop')
def desktop():
    return desktop_js

@app.route('/gaming')
def gaming():
    return gaming_js

@app.route('/refrigerator')
def refrigerator():
    return refrigerator_js

@app.route('/washmachine')
def washmachine():
    return washmachine_js

@app.route('/robotcleaner')
def robotcleaner():
    return robotcleaner_js

@app.route('/digital')
def digital():
    return digital_js

@app.route('/keyboard')
def keyboard():
    return keyboard_js

@app.route('/mouse')
def mouse():
    return mouse_js

@app.route('/phone_acce')
def phone_acce():
    return phone_acce_js

@app.route('/relativePC')
def relativePC():
    return relativePC_js

@app.route('/aircon')
def aircon():
    return aircon_js

@app.route('/kickboard')
def kickboard():
    return kickboard_js


if __name__ == "__main__":
    app.run(debug=True)
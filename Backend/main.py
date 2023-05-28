from flask import Flask, render_template, request
import pymysql
import pandas as pd

app = Flask(__name__)

conn = pymysql.connect(host='localhost', user='root', password='!aa47287846', db='mydb', charset='utf8')
cur = conn.cursor()

cur.execute('select c.category, p.img, p.name, n.cur_price, n.old_price, n.percent, n.return_price, n.return_percent from now_selling n, products p, category c where n.products_name = p.name and p.name = c.products_name and c.category = "노트북"')
res = cur.fetchall()
cur.execute('select * from time')
tim = cur.fetchall()

notebook, category, img, name, cur_price, old_price, percent, return_price, return_percent = [], [], [], [], [], [], [], [], []
for x in res:
    notebook.append({'category' : x[0], 'img' : x[1], 'name' : x[2], 'cur_price' : x[3], 'old_price' : x[4], 'percent' : x[5], 'return_price' : x[6], 'return_percent': x[7]})
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
notebook_js = df.to_json(orient='records', force_ascii=False)


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


@app.route('/notebook')
def infos():
    return notebook_js


if __name__ == "__main__":
    app.run(debug=True)
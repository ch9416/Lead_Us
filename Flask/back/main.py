from flask import Flask, render_template, request
import pymysql
import pandas as pd

app = Flask(__name__)

conn = pymysql.connect(host='localhost', user='root', password='!aa47287846', db='mydb', charset='utf8')
cur = conn.cursor()

cur.execute('select n.dis, p.img, p.name, n.price, n.id from now_selling n, products p where n.products_name = p.name')
res = cur.fetchall()
cur.execute('select * from time')
tim = cur.fetchall()

list, dis, img, name, price, id = [], [], [], [], [], []
for x in res:
    list.append({'dis' : x[0], 'img' : x[1], 'name' : x[2], 'price' : x[3], 'id' : x[4]})
    dis.append(x[0])
    img.append(x[1])
    name.append(x[2])
    price.append(x[3])
    id.append(x[4])


df = pd.DataFrame(zip(name, img, price, dis, id))
df.columns = ['name', 'img', 'price', 'dis', 'id']
js = df.to_json(orient='records', force_ascii=False)


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
    return {"members": [{ "id" : 1, "name" : "yerin" },
    					{ "id" : 2, "name" : "dalkong" }]}

@app.route('/infos')
def infos():
    return js


if __name__ == "__main__":
    app.run(debug=True)
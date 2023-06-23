import pymysql
import pandas as pd
import json
from datetime import date


conn = pymysql.connect(host='localhost', user='root', password='!aa47287846', db='mydb', charset='utf8')
cur = conn.cursor()
item = ["노트북", "스마트폰", "스마트워치", "TV", " 스피커", "헤드폰", "이어폰", "데스크탑", "게이밍", "냉장고", "세탁기", "로봇청소기", "가전/디지털", "키보드", "마우스", "폰악세사리", "PC주변기기", "에어컨", "킥보드"]
item_en = ["notebook", "smartphone", "smartwatch", "TV", "speaker", "headphone", "earphone", "desktop", "gaming", "refrigerator", "washmachine", "robotcleaner", "digital", "keyboard", "mouse", "phone_acce", "relativePC", "aircon", "kickboard"]

#카테고리별로 json제작, Jsons 폴더에 저장
for i in range(len(item)):
    f = open('./Jsons/%d.json' %i, 'w')
    cur.execute('select c.category, p.img, p.name, n.cur_price, n.old_price, n.percent, n.return_price, n.return_percent from now_selling n, products p, category c where n.products_name = p.name and p.name = c.products_name and c.category = %s', (item[i]))
    res = cur.fetchall()
    globals()[item_en[i]], category, img, name, cur_price, old_price, percent, return_price, return_percent, t_date, t_price = [], [], [], [], [], [], [], [], [], [], []
    for x in res:
        globals()[item_en[i]].append({'category' : x[0], 'img' : x[1], 'name' : x[2], 'cur_price' : x[3], 'old_price' : x[4], 'percent' : x[5], 'return_price' : x[6], 'return_percent': x[7]})
        category.append(x[0])
        img.append(x[1])
        name.append(x[2])
        cur_price.append(x[3])
        old_price.append(x[4])
        percent.append(x[5])
        return_price.append(x[6])
        return_percent.append(x[7])#

#json에 시간별 가격 추가
    for y in name:
        cur.execute('select time, price from time where products_name = %s', y)
        tim_data = cur.fetchall()
        data = []
        d_price = []
        for z in tim_data:
            data.append(z[0].isoformat())
            d_price.append(z[1])
        t_price.append(d_price)
        t_date.append(data)



    df = pd.DataFrame(zip(name, img, cur_price, old_price, category, percent, return_price, return_percent, t_price, t_date))
    df.columns = ['name', 'img', 'cur_price', 'old_price', 'category', 'percent', 'return_price', 'return_percent', 't_price', 't_date']
    globals()[item_en[i]+'_js'] = df.to_json(orient='records', force_ascii=False)
    json.dump(globals()[item_en[i]+'_js'], f)
    f.close()


conn.commit()
conn.close()
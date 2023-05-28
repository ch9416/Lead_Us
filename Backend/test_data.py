import pymysql
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()

driver.get("https://crwlnoti.shop/discount/")

prices = driver.find_elements(By.CLASS_NAME, "prod-link")
imgs = driver.find_elements(By.CLASS_NAME, "thumbnail")
names = driver.find_elements(By.CLASS_NAME, "product-name")
dis = []
img = []
name = []
price = []


for x in imgs:
    i = x.find_element(By.TAG_NAME, "img")
    img.append(i.get_attribute('src'))

for x in prices:
    try:
        t = x.find_element(By.CLASS_NAME, "price.prod-info")
        price.append(t.text[:t.text.find('원')])
    except Exception as error:
        r = x.find_element(By.CLASS_NAME, "used.prod-info")
        price.append(r.text[:r.text.find('원')])

for x in names:
    name.append(x.text)

for x in imgs:
    try:
        tt = x.find_element(By.CLASS_NAME, "discount-over")
        dis.append(tt.text)
    except Exception as error:
        dis.append("재고있음")

"""
list = []
for x in range(len(name)):
    list.append({'name': name[x], 'img': img[x], 'price': price[x], 'dis': dis[x]})
"""

conn = pymysql.connect(host='localhost', user='root', password='!aa47287846', db='mydb', charset='utf8')
cur = conn.cursor()
now = time

cur.execute("truncate now_selling")


for i in range(len(name)):
    try:
        cur.execute("insert into products (name, img) values (%s, %s)", (name[i], img[i]))
    except Exception as es:
        print("이미 존재하는 상품입니다.")

for i in range(len(name)):
    cur.execute("insert into now_selling (id, products_name, price, dis) values (%s, %s, %s, %s)", (i, name[i], price[i], dis[i]))

for i in range(len(name)):
    try:
        cur.execute("insert into time (products_name, price, time) values (%s, %s, %s)", (name[i], price[i], now.strftime('%Y-%m-%d')))
    except Exception as es:
        cur.execute("select price from time where products_name = %s and time = %s", (name[i], now.strftime('%Y-%m-%d')))
        np = cur.fetchall()
        if int(np[0][0].replace(',', '').strip()) > int(price[i].replace(',', '').strip()):
            print("가격변동")
            cur.execute("update time set price = %s where products_name = %s and time = %s", (price[i], name[i], now.strftime('%Y-%m-%d')))


conn.commit()
conn.close()

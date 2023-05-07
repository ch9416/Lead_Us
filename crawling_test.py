from selenium import webdriver
from selenium.webdriver.common.by import By
import pandas as pd

#selenium 크롬 사용
driver = webdriver.Chrome()
#크롤노티 특가 사이트
driver.get("https://crwlnoti.shop/discount/")

#현재 가격 긁어오기
prices = driver.find_elements(By.CLASS_NAME, "prod-link")
#이미지가 있는 div 긁어오기
imgs = driver.find_elements(By.CLASS_NAME, "thumbnail")
#상품이름 긁어오기
names = driver.find_elements(By.CLASS_NAME, "product-name")
dis = []
img = []
name = []
price = []

#이미지가 있는 div에서 img 태그의 src부분만 긁어와서 리스트에 넣기
for x in imgs:
    i = x.find_element(By.TAG_NAME, "img")
    img.append(i.get_attribute('src'))

#가격 긁어온 거에서 가격 추출. price.prod-info는 현재가, used.prod-info는 중고가 리스트에 넣기
for x in prices:
    try:
        t = x.find_element(By.CLASS_NAME, "price.prod-info")
        price.append(t.text[:t.text.find('원')])
    except Exception as error:
        r = x.find_element(By.CLASS_NAME, "used.prod-info")
        price.append(r.text[:r.text.find('원')])

#긁어온 이름 리스트에 넣기
for x in names:
    name.append(x.text)

#이미지가 있는 div에서 discount-over class가 있으면 재고가 없는것. 확인해서 없으면 리스트에 '재고있음'을 넣고 아니면 div 내용물넣음
for x in imgs:
    try:
        tt = x.find_element(By.CLASS_NAME, "discount-over")
        dis.append(tt.text)
    except Exception as error:
        dis.append("재고있음")

#pandas이용해서 json파일로 변환
df = pd.DataFrame(zip(name, img, price, dis))
df.columns = ['name', 'img', 'price', 'dis']
js = df.to_json(orient='records', force_ascii=False)
print(js)
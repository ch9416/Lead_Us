from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import sqlite3
import csv

# 크롬 옵션 설정
chrome_options = Options()
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")

# WebDriver 객체 생성
driver = webdriver.Chrome(options=chrome_options)

# Coupang 웹사이트 접속, component=&q= 이후 검색할 제품명 입력
url = "https://www.coupang.com/np/search?component=&q=맥북"
driver.get(url)

# 상품명 크롤링
product_names = driver.find_elements(By.CLASS_NAME, "name")

# CSV 파일 생성 및 상품명 저장
with open("products.csv", "w", newline="", encoding="utf-8") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["상품명"])
    for name in product_names:
        product_name = name.text
        writer.writerow([product_name])


''''
#다음 페이지로
driver.find_element(By.XPATH, "//*[@id='searchOptionForm']/div[2]/div[2]/div[5]/a[3]/span").click()
'''

'''

# 데이터베이스 연결
conn = sqlite3.connect("products.db")
cursor = conn.cursor()

# 테이블 생성
cursor.execute("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)")

# 상품명 데이터베이스에 저장
for name in product_names:
    product_name = name.text
    cursor.execute("INSERT INTO products (name) VALUES (?)", (product_name,))

# 변경사항 커밋
conn.commit()

# 데이터베이스 연결 해제
conn.close()

'''


# WebDriver 종료
driver.quit()
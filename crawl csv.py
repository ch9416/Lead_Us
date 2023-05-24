import csv
import time
import pandas as pd
import re
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import StaleElementReferenceException, NoSuchElementException, TimeoutException

# 검색어 입력
i = input("검색어를 입력하세요 : ")
# 크롬 옵션 설정
chrome_options = Options()
chrome_options.add_argument("--disable-blink-features=AutomationControlled")
chrome_options.add_argument("--disable-infobars")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-gpu")

# User-Agent 설정
chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36")

# 크롬 드라이버 인스턴스 생성
driver = webdriver.Chrome(options=chrome_options)

# 웹페이지 접속
url = "https://www.coupang.com/np/search?component=&q=" + i
driver.get(url)

# 쿠팡 크롤링 방지 우회를 위한 대기
time.sleep(3)

# deliveryFilterOption-rocket_wow 라벨을 클릭
rocket_option = driver.find_element(By.CLASS_NAME, "service-filter-rocket_all")
driver.execute_script("arguments[0].click();", rocket_option)
# 쿠팡 크롤링 방지 우회를 위한 대기
time.sleep(5)


# 상품명, 가격 정보 및 링크 크롤링
data = []
while True:
    try:
        products = driver.find_elements(By.CLASS_NAME, "search-product-link")
        for product in products:
            product_name = product.find_element(By.CLASS_NAME, "name").text
            product_original_price = "가격 정보 없음"
            product_discounted_price = "가격 정보 없음"
            product_link = product.get_attribute("href")
            used_product_info = product.find_elements(By.CLASS_NAME, "used-product-info")

            try:
                price_element = product.find_element(By.CLASS_NAME, "price")
                if price_element.find_elements(By.CLASS_NAME, "base-price"):
                    product_original_price = price_element.find_element(By.CLASS_NAME, "base-price").text
                if price_element.find_elements(By.CLASS_NAME, "price-value"):
                    product_discounted_price = price_element.find_element(By.CLASS_NAME, "price-value").text
            except NoSuchElementException:
                pass

            # 할인 퍼센트 계산
            if product_original_price != "가격 정보 없음" and product_discounted_price != "가격 정보 없음":
                original_price_num = int(product_original_price.replace(",", "").replace("원", ""))
                discounted_price_num = int(product_discounted_price.replace(",", "").replace("원", ""))
                discount_percent = ((original_price_num - discounted_price_num) / original_price_num) * 100
                discount_percent = round(discount_percent, 2)
                discount_percent_str = f"{discount_percent}%"
            else:
                discount_percent_str = "할인 없음"

            used_product_info_data = []
            if used_product_info:
                try:
                    second_strong_tag = used_product_info[0].find_elements(By.TAG_NAME, "strong")[1]
                    used_product_info_data.append(second_strong_tag.text)
                    if product_original_price != "가격 정보 없음":
                        discounted_price_num = int(product_discounted_price.replace(",", "").replace("원", ""))
                        second_info_num = int(second_strong_tag.text.replace(",", "").replace("원", ""))
                        percent_diff = ((discounted_price_num - second_info_num) / discounted_price_num) * 100
                        percent_diff = round(percent_diff, 2)
                        used_product_info_data.append(f"{percent_diff}%")
                    else:
                        used_product_info_data.append("할인 전 가격 정보 없음")
                except IndexError:
                    used_product_info_data.extend(["정보 없음", "할인 전 가격 정보 없음"])

            data.append([product_name, product_original_price, product_discounted_price, discount_percent_str, product_link] + used_product_info_data)

        # 다음 버튼 클릭
        next_button = driver.find_element(By.CSS_SELECTOR, ".btn-next")
        if "disabled" in next_button.get_attribute("class"):
            break
        else:
            time.sleep(3)
            next_button.click()

        # 페이지 로딩 대기
        WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, "search-product-link")))
    except (StaleElementReferenceException, NoSuchElementException):
        continue
    except TimeoutException:
        print("페이지 로딩 오류.")
        break


# 크롬 드라이버 종료
driver.quit()

# 데이터를 DataFrame으로 변환
df = pd.DataFrame(data, columns=["상품명", "할인 전 가격", "할인된 가격", "할인 퍼센트", "링크", "반품 상품 가격", "반품 할인 퍼센트"])

# CSV 파일로 저장 (UTF-8 인코딩)
csv_filename = "coupang_products.csv"
df.to_csv(csv_filename, index=False, encoding="utf-8-sig")

print(f"데이터가 {csv_filename} 파일로 저장되었습니다.")

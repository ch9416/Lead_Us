import subprocess
import shutil
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Chrome 웹드라이버 경로 설정

# 크롬 옵션 설정
chrome_options = Options()
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")

# WebDriver 객체 생성
driver = webdriver.Chrome( options=chrome_options)

# Coupang 웹사이트 접속
url = "https://www.coupang.com/np/search?component=&q=%EB%A7%A5%EB%B6%81&channel=user"
driver.get(url)


#쿠팡 크롤링 방지 우회

"""
driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", ) => undefined }) 
"""
# 디버거 크롬 동작
subprocess.Popen(r'C:\Program Files\Google\Chrome\Application\chrome.exe --remote-debugging-port=9222')

option = Options()
option.add_experimental_option("debuggerAddress", "127.0.0.1:9222")

# 상품명 크롤링 함수
def crawl_product_names():
    product_names = driver.find_elements(By.CLASS_NAME, "name")
    for name in product_names:
        print(name.text)

# 초기 페이지 크롤링
crawl_product_names()

# "다음" 버튼 클릭 및 페이지 크롤링
while True:
    try:
        # "다음" 버튼 클릭
        next_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.LINK_TEXT, "다음"))
        )
        next_button.click()

        # 페이지 로딩 대기
        time.sleep(20)  # 필요한 만큼 대기 시간을 조정합니다.

        # 페이지 크롤링
        crawl_product_names()
    except Exception as e:
        print(e)
        break

# WebDriver 종료
driver.quit()

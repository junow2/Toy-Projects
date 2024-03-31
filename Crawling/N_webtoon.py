from selenium import webdriver 
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By


# 크롬 드라이버 자동 업데이트를 위한 모듈 
# from webdriver_manager.chrome import ChromeDriverManager

# 네이버 웹툰 페이지 열기 
Nw_url = "https://comic.naver.com/webtoon/weekday"
chromdriver_url = '다운받은 풀더/chromedriver'

# 브라우저 꺼짐 방지 옵션
chrome_options = Options()
# chrome_options.add_experimental_option("detach", True)

# 불필요한 에러 메시지 삭제
chrome_options.add_experimental_option('excludeSwitches', ['enable-logging'])

# 크롬 드라이버 최신 버전 설정
# service = Service(executable_path=ChromeDriverManager().install())

# 웹페이지 해당 주소 이동  
driver = webdriver.Chrome(options=chrome_options)
driver.get(Nw_url)

titles = driver.find_elements(By.CLASS_NAME, "ContentTitle__title--e3qXt")
# titles1 = driver.find_elements_by_css_selector('#container > div.component_wrap.type2 > div.WeekdayMainView__daily_all_wrap--UvRFc > div:nth-child(1) > ul > li:nth-child(12) > div > a > span')
titles2 = driver.find_elements(By.CSS_SELECTOR, '#container > div.component_wrap.type2 > div.WeekdayMainView__daily_all_wrap--UvRFc > div:nth-child(1) > ul > li:nth-child(12) > div > a > span')

li = []

for title in titles:
    li.append(title.text)

print(li)


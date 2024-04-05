from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
import time

get_url = "https://www.billboard.com/charts/billboard-200"
opt = Options()

# 브라우저 꺼짐 방지 옵션 - 개발용
opt.add_experimental_option("detach", True) 
# 불필요한 에러 메시지 삭제 
opt.add_experimental_option('excludeSwitches', ['enable-logging'])

driver = webdriver.Chrome(options=opt)
driver.get(get_url)

driver.get("https://www.billboard.com/charts/billboard-200")

driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")
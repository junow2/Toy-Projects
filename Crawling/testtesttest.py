from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys

import pandas as pd
import time

from t4 import adult_cert, gameInfo_scrap
from t3 import scrap_gameList

opt = Options()

# 브라우저 꺼짐 방지 옵션 - 개발용
# opt.add_experimental_option("detach", True) 
# 불필요한 에러 메시지 삭제 
opt.add_experimental_option('excludeSwitches', ['enable-logging'])

driver = webdriver.Chrome(options=opt)
driver_eng = webdriver.Chrome(options=opt)

# 스팀 게임 목록 
driver.get("https://store.steampowered.com/search/?supportedlang=english%2Ckoreana&filter=topsellers&ndl=1")

# 사이트를 한국어로 전환
driver.find_element(By.XPATH, '//*[@id="language_pulldown"]').click()
driver.find_element(By.XPATH, '//*[@id="language_dropdown"]/div/a[4]').click()

# 언어 전화 로딩 대기
time.sleep(3)

# 리스트에서 게임만 선택 - DLC, 사운드트랙 등 필요없는 요소들 제거 
# driver.find_element(By.XPATH, '//*[@id="additional_search_options"]/div[5]/div[1]/div').click()
# driver.find_element(By.XPATH, '//*[@id="additional_search_options"]/div[5]/div[1]/div').send_keys(Keys.ENTER)
element = driver.find_element(By.XPATH, '//*[@id="additional_search_options"]/div[4]/div[1]/div')
driver.execute_script("arguments[0].click();", element)
driver.find_element(By.XPATH, '//*[@id="narrow_category1"]/div[1]/span').click()

#제거 대기
time.sleep(2)

# 게임 목록 크롤링
# gameList = scrap_gameList(driver)

# print(gameList)

# 성인 인증 미리 받기 
# adult_cert(driver, driver_eng)

# 

# gameList_df = pd.DataFrame(gameList)

# print(gameList_df)

testc = gameInfo_scrap(driver, driver_eng, 'https://store.steampowered.com/app/990080/_/')

for k, v in testc.items():
   print(k, v)
#t_df = pd.DataFrame(testc)
#print(t_df)
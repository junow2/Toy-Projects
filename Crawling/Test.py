from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# 스팀 상점 페이지 주소 (한국어&영어)
get_url = "https://store.steampowered.com/search/?supportedlang=english%2Ckoreana&filter=topsellers&ndl=1"

opt = Options()

# 브라우저 꺼짐 방지 옵션 - 개발용
opt.add_experimental_option("detach", True) 
# 불필요한 에러 메시지 삭제 
opt.add_experimental_option('excludeSwitches', ['enable-logging'])

# 웹페이지 실행 
driver = webdriver.Chrome(options=opt)
driver.get(get_url)

# 언어 전화 로딩 대기
time.sleep(2)

# driver.execute_script('ChangeLanguage("Korean")')
# driver.find_element_by_xpath('//*[@id="language_pulldown"]').click()
# 사이트를 한국어로 전환
driver.find_element(By.XPATH, '//*[@id="language_pulldown"]').click()
driver.find_element(By.XPATH, '//*[@id="language_dropdown"]/div/a[4]').click()

driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")
time.sleep(2)
gameList = list()

gameRows = driver.find_element(By.ID, 'search_resultsRows')
games = gameRows.find_elements(By.TAG_NAME, 'a')

for i in range(len(gameList), len(games)):
    # title = games[i].find_element(By.CLASS_NAME, 'title').text
    # url = games[i].get_attribute('href')
    releaseDate = games[i].find_element(By.CLASS_NAME, 'col.search_released responsive_secondrow')

    my_game = {
        # 'title': title,
        # 'url': url,
        'date': releaseDate
    }
    gameList.append(my_game)

print(gameList)
# print(len(gameList))

# 현재 높이 저장 
# curpageHeight = driver.execute_script('return document.body.scrollHeight')

# print(curpageHeight)
# 
# time.sleep(2)
# 
# driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")
# newpageHght = driver.execute_script('return document.body.scrollHeight')
# print(newpageHght)

# def scrap(driver): 
#     gameLi = list()
#     doScroll = True
# 
#     # 현재 높이 저장
#     curpageHeight = driver.execute_script('return document.body.scrollHeight')
# 
#     # 로딩할 페이지가 있는동안 
#     while(doScroll):
#         # 페이지 끝으로 이동
#         driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")
# 
#         # 로딩 대기 
#         time.sleep(1)
# 
#         # 새로 이동한 높이
#         newpageHght = driver.execute_script('return document.body.scrollHeight')
# 
#         if curpageHeight == newpageHght:
#             doScroll  = False
#             print("Page End")
#             break
# 
#         curpageHeight = newpageHght
# 
# scrap(driver)
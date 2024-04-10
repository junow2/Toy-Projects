from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException
import time


opt = Options()

# 브라우저 꺼짐 방지 옵션 - 개발용
opt.add_experimental_option("detach", True) 
# 불필요한 에러 메시지 삭제 
opt.add_experimental_option('excludeSwitches', ['enable-logging'])

d1 = webdriver.Chrome(options=opt)
# d2 = webdriver.Chrome(options=opt)

url = 'https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/'
tagLi = []
scrLi = []
d1.get(url)

#try:
#    tags = d1.find_element(By.CLASS_NAME,'glance_tags.popular_tags').find_elements(By.CLASS_NAME,'app_tag')
#except NoSuchElementException:
#    tags = None
#
#for tag in tags:
#    if tag.text != '':
#        tagLi.append(tag.text)
#
#tagLi.remove('+')
#print(tagLi)

# title = d1.find_element(By.ID, 'appHubAppName').text
# print(title)

# 썸네일 크롤링 = 사이트 ? 

# 개발사 / 배급사 
# company = d1.find_element(By.XPATH, '//*[@id="developers_list"]/a').text
# publisher = d1.find_element(By.XPATH, '//*[@id="game_highlights"]/div[1]/div/div[3]/div[4]/div[2]/a').text
# 
# print(company)
# print(publisher)

# info = d1.find_element(By.CLASS_NAME, 'game_description_snippet').text
# print(info)

screenshot = d1.find_elements(By.CLASS_NAME, 'highlight_strip_item.highlight_strip_screenshot')
for scr in screenshot:
    scrLi.append(scr.find_element(By.TAG_NAME, 'img').get_attribute('src'))

print(scrLi)
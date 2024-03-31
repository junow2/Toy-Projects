import requests
from bs4 import BeautifulSoup

url = "https://comic.naver.com/webtoon"
html = requests.get(url, 'html.parser').text
print(html)
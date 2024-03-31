from bs4 import BeautifulSoup
import requests
import pandas as pd

h = 'https://comic.naver.com/webtoon/weekdayList?week='
day = ['mon', 'tue', 'wed', 'thu','fri','sat','sun','dailyplus']
df = pd.DataFrame(columns=['days','title', 'author', 'rating', 'url'])

for i in day:
    page = requests.get(h+i) # mon, tue, ... , dailyplus
    soup = BeautifulSoup(page.text, 'page.parser')

    data = soup.find('div', {'class': 'list_area daily_img'})
    data = data.findAll('dl') #
    days = i

    for l in data:
        title = l.find('dt').text.replace('\n', '').strip()
        author=l.find('dd',{'class': 'desc'}).text.replace('\n', '').replace('\t', '')
        rating=l.find('strong').text
        url = 'https://comic.naver.com' + l.find('dt').find('a')['href']
        
        df = pd.concat([df, pd.DataFrame([[days, title, author, rating, url]],
        columns=['days', 'title', 'author','rating','url'])])
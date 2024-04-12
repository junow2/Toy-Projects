import pymysql

# 1. MySQL 연결 
conn = pymysql.connect(host='127.0.0.1', user='root', password='', db='gameDB', charset='utf8')

# 2. 커서 생성하기 
cur = conn.cursor() 

# 3. 테이블 만들기 - 0 출력 시 성공
cur.execute("CREATE TABLE userTable (id int(10), title varchar(50), studio varchar(50), publisher varchar(50), tag varchar(50), game_info TEXT NULL, platform varchar(25))" )

# 4. 테스트 데이터 입력 - 1 출력 시 성공
# cur.execute("INSERT INTO userTable VALUES(1, '호그와트 레거시', {'Avalanche Software', 'Warner Bros. Games', {'마법', '판타지', '오픈 월드', '싱글 플레이어', '어드벤처'}, "Game_Info_Text",   "Steam"  )")


## TO-DO
# 태그 목록을 MySQL에 어떻게 집어넣는지. 




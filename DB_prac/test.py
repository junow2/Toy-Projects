import pymysql

# 1. MySQL 연결 
conn = pymysql.connect(host='127.0.0.1', user='root', password='0000', db='gamedb', charset='utf8')

# 2. 커서 생성하기 
cur = conn.cursor() 

# 3. 테이블 만들기 - 0 출력 시 성공
# cur.execute("CREATE TABLE userTable (id int(10), title varchar(50), studio varchar(50), publisher varchar(50), tag varchar(50), game_info TEXT NULL, platform varchar(25))" )

# mysql> CREATE TABLE gameInfo(
#     -> id INT(11),
#     -> title varchar(50),
#     -> studio varchar(50),
#     -> publisher varchar(50),
#     -> tag JSON,
#     -> info TEXT NOT NULL,
#     -> platform varchar(25)
#     -> );

# 4. 테스트 데이터 입력 - 1 출력 시 성공
id = 2 
tt = '호그와트 레거시'
sd = 'Avalanche Software'
pb = 'Warner Bros. Games'
tg = ['마법', '판타지', '오픈 월드', '싱글 플레이어', '어드벤처']
inf = "호그와트 레거시는 몰입형 오픈월드 액션 RPG입니다. 이제 여러분도 꿈에 그리던 마법 세계에 직접 영향을 끼칠 수 있습니다. 마법 세계에서 펼쳐지는 모험의 주인공이 되어보세요."
pf = 'Steam'

cur.execute("INSERT INTO gameinfo VALUES(id, tt, sd, pb, tg, inf, pf)")

# [MySQL 커서].execute(id, title, studio, publisher, tag, info, platform)


# id = 1
# 이터널 리턴
# Nimble Neuron
# Kakao Games Europe B.V.
# ['무료 플레이', '애니매이션', 'MOBA', '멀티플레이어']
# '이터널 리턴은 쿼터뷰 스타일의 무료 배틀로얄 게임입니다. 제작, 사냥, 전투 그리고 멋진 캐릭터들을 경험해보시고 생존을 위한 전략적인 판단, 화려한 전투 플레이로 영원히 반복되는 실험에서 최후의 생존자가 되십시오.'
# Steam 
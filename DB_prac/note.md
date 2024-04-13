파이썬과 MYSQL 연동을 위해 pymysql 라이브러리 사용 

```sql
CREATE DATABASE gameDB;
```

## gameDB에 들어가야 하는 정보들 
게임 한글/영문 이름 
개발사 / 배급사 
태그 
썸네일 (IMG) - 얘는 MongoDB를 이용하여 따로 관리
발매일 
게임 소개글 
플랫폼
스크린샷 ?? 

### 썸네일 
https://steamcdn-a.akamaihd.net/steam/apps/<APP_ID>/library_600x900_2x.jpg

게임별 고유 ID를 APP_ID에 넣으면 600*900 사진을 구할 수 있다. 

## gameDB MySQL TABLE
```sql
CREATE TABLE gameInfo(
    id INT(11),
    title varchar(50),
    studio varchar(50),
    publisher varchar(50),
    tag JSON,
    info TEXT NULL,
    platform varchar(25)
);
```
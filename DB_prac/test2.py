import pymysql

def insert_crawling_data_to_mysql(host, user, password, database, crawling_data):
    """
    Inserts crawling data into a MySQL database.

    Args:
        host (str): The hostname or IP address of the MySQL server.
        user (str): The username for the MySQL server.
        password (str): The password for the MySQL server.
        database (str): The name of the database to use.
        table_name (str): The name of the table to insert the data into.
        crawling_data (list): A list of dictionaries containing the crawling data.

    Returns:
        None
    """
    # Create a connection to the MySQL database
    with pymysql.connect(
        host="127.0.0.1",
        user="root",
        password="0000",
        database="gamedb"
    ) as conn:
        with conn.cursor() as cursor:
            # Prepare the SQL query
            sql = "INSERT INTO gameinfo (id, title, studio, publisher, tag, info, platform) VALUES (%s, %s, %s, %s, %s, %s, %s)"

            # Loop through the crawling data and insert it into the database
            for data in crawling_data:
                id = data['id']
                title = data['title']
                studio = data['studio']
                publisher = data['publisher']
                tag = data['tag']  # Assuming 'tag' is a Python dictionary
                info = data['info']
                platform = data['platform']

                # Execute the SQL query with the data
                cursor.execute(sql, (id, title, studio, publisher, str(tag), info, platform))

            # Commit the changes
            conn.commit()
import json
import random
from database.db import mongo
from bson import json_util

# Вернет json документ, собранный  из коллекции с типом объектов {type}

def choice_random_post(type):
    # коллекция post является базой данных для всех имеющихся постов
    # с помощью find выбираем только посты с типом политика
    data_news = list(mongo.db.post.find({'type': type}))
    random_arr = random.sample(data_news, 1)
    random_data = random_arr[0]
    collection_messages = mongo.db.messages
    data_messages = list(collection_messages.find({'type': type}))

    # если рандомный пост из коллекции всех политических постов уже содержится в истории сообщений, удаляем из локальной копии массива
    # этот пост и заново рандомно выбираем другой пост до тех пор, пока его не окжается в истории переписки
    while random_data in data_messages:
        if len(data_news) <= 1:
            data_messages.append(
                {'format': 'Mem', 'url': 'https://sun9-66.userapi.com/impg/IY-gT6tTLFdFJ94YbVH36u5BhPr9LVAIoVXBaQ/U-9KevUHEOM.jpg?size=869x426&quality=96&proxy=1&sign=a1256ea92ce1b67f05767b09adf901fc&type=album' , 'type' : 'Science'})
            return json.dumps(data_messages, default=json_util.default)
        else:
            data_news.remove(random_data)
            random_arr = random.sample(data_news, 1)
            random_data = random_arr[0]

    collection_messages.insert_one(random_data)
    # создание list из коллекци messages без аргументов в функции find(), т.е переменная содержит все записи из коллекции.
    data_messages = list(collection_messages.find({'type': type}))
    return json.dumps(data_messages, default=json_util.default)

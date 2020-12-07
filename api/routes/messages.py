import json
import random
from flask import Blueprint
from database.db import mongo
from bson import json_util

messages = Blueprint('messages', __name__)

@messages.route('/data')
def get_data():
    data_messages = list(mongo.db.messages.find())
    return json.dumps(data_messages,default=json_util.default)

@messages.route('/get_message')
def insert_in_message():
    # коллекция post является базой данных для всех имеющихся постов
    data_news = list(mongo.db.post.find())
    random_arr = random.sample(data_news,1)
    random_data = random_arr[0]
    collection_messages = mongo.db.messages
    data_messages = list(collection_messages.find())

    #если рандомный пост из коллекции всех постов уже содержится в истории сообщений, удаляем из локальной копии массива
    #этот пост и заново рандомно выбираем другой пост до тех пор, пока его не окжается в истории переписки
    while random_data in data_messages:
        if len(data_news) <= 1:
            data_messages.append({'format' : 'empty' , 'name' : 'Oops... database empty'})
            return json.dumps(data_messages,default=json_util.default)
        else:
            data_news.remove(random_data)
            random_arr = random.sample(data_news,1)
            random_data = random_arr[0]

    collection_messages.insert_one(random_data)
    #создание list из коллекци messages без аргументов в функции find(), т.е переменная содержит все записи из коллекции.
    data_messages = list(collection_messages.find())
    return json.dumps(data_messages,default=json_util.default)

@messages.route('/data_politics')
def get_data_politics():
    data_messages = list(mongo.db.messages.find({'type' : 'Politics'}))
    return json.dumps(data_messages,default=json_util.default)

@messages.route('/get_message_politics')
def insert_in_message_politics():
    # коллекция post является базой данных для всех имеющихся постов
    #с помощью find выбираем только посты с типом политика
    data_politics_post = list(mongo.db.post.find({'type' : 'Politics'}))
    random_arr = random.sample(data_politics_post,1)
    random_data = random_arr[0]
    collection_messages = mongo.db.messages
    data_messages = list(collection_messages.find({'type' : 'Politics'}))

    #если рандомный пост из коллекции всех политических постов уже содержится в истории сообщений, удаляем из локальной копии массива
    #этот пост и заново рандомно выбираем другой пост до тех пор, пока его не окжается в истории переписки
    while random_data in data_messages:
        if len(data_politics_post) <= 1:
            data_messages.append({'format' : 'empty' , 'name' : 'Oops... database empty'})
            return json.dumps(data_messages,default=json_util.default)
        else:
            data_politics_post.remove(random_data)
            random_arr = random.sample(data_politics_post,1)
            random_data = random_arr[0]

    collection_messages.insert_one(random_data)
    #создание list из коллекци messages без аргументов в функции find(), т.е переменная содержит все записи из коллекции.
    data_messages = list(collection_messages.find())
    return json.dumps(data_messages,default=json_util.default)


@messages.route('/data_art')
def get_data_art():
    data_messages = list(mongo.db.messages.find({'type' : 'Politics'}))
    return json.dumps(data_messages,default=json_util.default)

@messages.route('/get_message_art')
def insert_in_message_art():
    # коллекция post является базой данных для всех имеющихся постов
    #с помощью find выбираем только посты с типом политика
    data_news = list(mongo.db.post.find({'type' : 'Art'}))
    random_arr = random.sample(data_news,1)
    random_data = random_arr[0]
    collection_messages = mongo.db.messages
    data_messages = list(collection_messages.find({'type' : 'Art'}))

    #если рандомный пост из коллекции всех политических постов уже содержится в истории сообщений, удаляем из локальной копии массива
    #этот пост и заново рандомно выбираем другой пост до тех пор, пока его не окжается в истории переписки
    while random_data in data_messages:
        if len(data_news) <= 1:
            data_messages.append({'format' : 'empty' , 'name' : 'Oops... database empty'})
            return json.dumps(data_messages,default=json_util.default)
        else:
            data_news.remove(random_data)
            random_arr = random.sample(data_news,1)
            random_data = random_arr[0]

    collection_messages.insert_one(random_data)
    #создание list из коллекци messages без аргументов в функции find(), т.е переменная содержит все записи из коллекции.
    data_messages = list(collection_messages.find())
    return json.dumps(data_messages,default=json_util.default)











@messages.route('/delete')
def delete_all():
    mongo.db.messages.delete_many({"format" : "Mem"})
    mongo.db.messages.delete_many({"format" : "Video"})
    return "delete"
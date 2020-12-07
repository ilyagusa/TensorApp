import json
import random
from flask import Blueprint
from database.db import mongo
from bson import json_util
from routes.func_for_route import choice_random_post

messages = Blueprint('messages', __name__)


@messages.route('/data')
def get_data():
    data_messages = list(mongo.db.messages.find())
    return json.dumps(data_messages, default=json_util.default)


@messages.route('/get_message')
def insert_in_message():
    # коллекция post является базой данных для всех имеющихся постов
    data_news = list(mongo.db.post.find())
    random_arr = random.sample(data_news, 1)
    random_data = random_arr[0]
    collection_messages = mongo.db.messages
    data_messages = list(collection_messages.find())

    # если рандомный пост из коллекции всех постов уже содержится в истории сообщений, удаляем из локальной копии массива
    # этот пост и заново рандомно выбираем другой пост до тех пор, пока его не окжается в истории переписки
    while random_data in data_messages:
        if len(data_news) <= 1:
            data_messages.append(
                {'format': 'Mem', 'url': 'https://sun9-66.userapi.com/impg/IY-gT6tTLFdFJ94YbVH36u5BhPr9LVAIoVXBaQ/U-9KevUHEOM.jpg?size=869x426&quality=96&proxy=1&sign=a1256ea92ce1b67f05767b09adf901fc&type=album', 'type': 'Science'})
            return json.dumps(data_messages, default=json_util.default)
        else:
            data_news.remove(random_data)
            random_arr = random.sample(data_news, 1)
            random_data = random_arr[0]

    collection_messages.insert_one(random_data)
    # создание list из коллекци messages без аргументов в функции find(), т.е переменная содержит все записи из коллекции.
    data_messages = list(collection_messages.find())
    return json.dumps(data_messages, default=json_util.default)


@messages.route('/data_politics')
def get_data_politics():
    data_messages_politics = list(mongo.db.messages.find({'type': 'Politics'}))
    return json.dumps(data_messages_politics, default=json_util.default)


@messages.route('/get_message_politics')
def insert_in_message_politics():
    return choice_random_post("Politics")


@messages.route('/data_art')
def get_data_art():
    data_messages_art = list(mongo.db.messages.find({'type': 'Art'}))
    return json.dumps(data_messages_art, default=json_util.default)


@messages.route('/get_message_art')
def insert_in_message_art():
    return choice_random_post("Art")


@messages.route('/data_science')
def get_data_science():
    data_messages_science = list(mongo.db.messages.find({'type': 'Science'}))
    return json.dumps(data_messages_science, default=json_util.default)


@messages.route('/get_message_science')
def insert_in_message_science():
    return choice_random_post("Science")


@messages.route('/data_music')
def get_data_music():
    data_messages_music = list(mongo.db.messages.find({'type': 'Music'}))
    return json.dumps(data_messages_music, default=json_util.default)


@messages.route('/get_message_music')
def insert_in_message_music():
    return choice_random_post("Music")


@messages.route('/delete')
def delete_all():
    mongo.db.messages.delete_many({"format": "Mem"})
    mongo.db.messages.delete_many({"format": "Video"})
    return "delete"

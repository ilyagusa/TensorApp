import json
import random
from flask import Blueprint
from database.db import mongo
from bson import json_util

messages = Blueprint('messages', __name__)

@messages.route('/data')
def get_data():
    data_messages = list(mongo.db.messages.find({"format":"image"}))
    return json.dumps(data_messages,default=json_util.default)

@messages.route('/get_message')
def insert_in_message():
    data_news = list(mongo.db.news.find({"format":"image"}))
    random_arr = random.sample(data_news,1)
    random_data = random_arr[0]
    collection_messages = mongo.db.messages
    data_messages = list(collection_messages.find({"format":"image"}))

    while random_data in data_messages:
        if len(data_news) <= 1:
            data_messages.append({'format' : 'empty' , 'name' : 'Oops... database empty'})
            return json.dumps(data_messages,default=json_util.default)
        else:
            data_news.remove(random_data)
            random_arr = random.sample(data_news,1)
            random_data = random_arr[0]

    collection_messages.insert_one(random_data)
    data_messages = list(collection_messages.find({"format":"image"}))
    return json.dumps(data_messages,default=json_util.default)

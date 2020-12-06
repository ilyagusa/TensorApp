import json
from flask import Blueprint
from database.db import mongo
from bson import json_util

video = Blueprint('video', __name__)

@video.route('/data')
def get_data():
    data_video = list(mongo.db.news.find({"format":"mp4"}))
    return json.dumps(data_video,default=json_util.default)
    
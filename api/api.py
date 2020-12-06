import time
import json
from flask import Flask
from flask import Blueprint
from flask_cors import CORS, cross_origin
from flask_pymongo import PyMongo
from bson import json_util
from routes.image import image
from routes.video import video
from routes.messages import messages
from database.db import initialize_db
from database.db import mongo

def create_app():
    app = Flask(__name__)
    app.config["MONGO_URI"] = "mongodb+srv://ilyagusa:BBUCix57dICRfZqv@mydata.zvsdf.mongodb.net/data_news?retryWrites=true&w=majority"
    app.register_blueprint(image, url_prefix='/data_image')
    app.register_blueprint(video, url_prefix='/data_video')
    app.register_blueprint(messages, url_prefix='/messages')
    CORS(app)
    initialize_db(app)
        
    return app
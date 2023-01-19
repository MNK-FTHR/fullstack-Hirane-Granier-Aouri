from flask import Flask, jsonify, request
import json

app = Flask(__name__)

class Car:
    def __init__(self, name, price, image):
        self.name = name
        self.price = price
        self.image = image


fakeDB = []

@app.route("/", methods=["GET"])
def hello():
    return jsonify({"Hello": "World"}) 

@app.route("/add", methods=['POST'])
def add():
    fakeDB.append(Car(json.loads(request.data)['name'],json.loads(request.data)['price'],json.loads(request.data)['image']))
    return jsonify(json.loads(request.data))

# @app.route("/show", methods=['GET'])
#     dataParsing = []
#     for car in fakeDB:
#         data.append
#     return jsonify(json.loads(request.data))
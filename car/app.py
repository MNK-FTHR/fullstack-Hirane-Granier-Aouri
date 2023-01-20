from flask import Flask,jsonify,redirect,request,make_response
from car import db,CarModel
import json

app =Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:admin@db:3306/lesson?serverVersion=8&charset=utf8mb4'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.before_first_request
def create_table():
    db.create_all()

@app.route('/car/create' , methods = ['POST'])
def create():
    data = json.loads(request.data)
    alreadyExist = CarModel.query.filter_by(id=data['id']).first()
    if alreadyExist:
        return f"This Car already exist"
    id = data['id']
    name = data['name']
    price = data['price']
    image = data['image']
    car = CarModel(id=id, name=name, price=price, image = image)
    db.session.add(car)
    db.session.commit()
    return make_response(jsonify({'car': car}), 200)

@app.route('/cars')
def RetrieveDataList():
    cars = CarModel.query.all()
    return make_response(jsonify({'cars': cars}), 200)

@app.route('/car/<int:id>')
def RetrieveSingleCar(id):
    car = CarModel.query.filter_by(id=id).first()
    if car:
        return make_response(jsonify({'car': car}), 200)
    return f"Car with id ={id} Doenst exist"

@app.route('/car/<int:id>/delete', methods=['DELETE'])
def delete(id):
    car = CarModel.query.filter_by(id=id).first()
    if car:
        db.session.delete(car)
        db.session.commit()
        return f"Car with id = {id} has been deleted"
    return f"Car with id = {id} does not exist"

app.run(host='localhost', port=5000)
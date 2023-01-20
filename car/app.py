from flask import Flask,jsonify,redirect,request,make_response
from car import db,CarModel
import json

app =Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

def formatClassToJSONable(datas, multiple=False):
    if multiple == True:
        readableData = []
        for data in datas:
                readableData.append({'id': data.id, 'car_id': data.car_id, 'name': data.name, 'price': data.price, 'image': data.image})
        return readableData
    else:
        return {'id': data.id, 'car_id': datas.car_id, 'name': datas.name, 'price': datas.price, 'image': datas.image}


@app.before_first_request
def create_table():
    db.create_all()

@app.route('/car/create' , methods = ['POST'])
def create():
    data = json.loads(request.data)
    alreadyExist = CarModel.query.filter_by(car_id=id).first()
    if alreadyExist:
        f"This Car already exist"
    car_id = data['car_id']
    name = data['name']
    price = data['price']
    image = data['image']
    car = CarModel(car_id=car_id, name=name, price=price, image = image)
    db.session.add(car)
    db.session.commit()
    readableData = formatClassToJSONable(car)
    return make_response(jsonify({'car': readableData}), 200)

@app.route('/car')
def RetrieveDataList():
    cars = CarModel.query.all()
    readableData = formatClassToJSONable(cars, True)
    return make_response(jsonify({'cars': readableData}), 200)

@app.route('/car/<int:id>')
def RetrieveSingleCar(id):
    car = CarModel.query.filter_by(car_id=id).first()
    if car:
        readableData = formatClassToJSONable(car)
        return make_response(jsonify({'car': readableData}), 200)
    return f"Car with id ={id} Doenst exist"

@app.route('/car/<int:id>/update',methods = ['UPDATE'])
def update(id):
    car = CarModel.query.filter_by(car_id=id).first()
    if request.method == 'POST':
        if car:
            db.session.delete(car)
            db.session.commit()
 
            name = request.form['name']
            age = request.form['age']
            position = request.form['position']
            car = CarModel(car_id=id, name=name, price=price, image=image)
 
            db.session.add(car)
            db.session.commit()
            
            readableData = formatClassToJSONable(car)
            return make_response(jsonify({'car': readableData}), 200)
        return f"Car with id = {id} Does nit exist"
 
    return jsonify(car = car)

@app.route('/car/<int:id>/delete', methods=['DELETE'])
def delete(id):
    car = CarModel.query.filter_by(car_id=id).first()
    if car:
        db.session.delete(car)
        db.session.commit()
        return f"Car with id = {id} has been deleted"
    abort(404)
 
    return f"Car with id = {id} has been deleted"

app.run(host='localhost', port=5000)
from flask import Flask,jsonify,redirect,request,make_response
from car import db,CarModel
import json

app =Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
readableData = []
@app.before_first_request
def create_table():
    db.create_all()

@app.route('/car/create' , methods = ['POST'])
def create():
    data = json.loads(request.data)
    car_id = data['car_id']
    name = data['name']
    price = data['price']
    image = data['image']
    car = CarModel(car_id=car_id, name=name, price=price, image = image)
    db.session.add(car)
    db.session.commit()
    return make_response(jsonify({'car_id': car_id, 'name': name, 'price': price, 'image': image}), 200)

@app.route('/car')
def RetrieveDataList():
    cars = CarModel.query.all()
    for car in cars:
        readableData.append({'car_id': car.car_id, 'name': car.name, 'price': car.price, 'image': car.image})
    return make_response(jsonify({'cars': readableData}), 200)

@app.route('/car/<int:id>')
def RetrieveSingleCar(id):
    car = CarModel.query.filter_by(car_id=id).first()
    if car:
        return jsonify(car = car)
    return f"Car with id ={id} Doenst exist"

@app.route('/car/<int:id>/update',methods = ['GET','POST'])
def update(id):
    car = CarModel.query.filter_by(car_id=id).first()
    if request.method == 'POST':
        if car:
            db.session.delete(car)
            db.session.commit()
 
            name = request.form['name']
            age = request.form['age']
            position = request.form['position']
            car = CarModel(car_id=id, name=name, price=price, image = image)
 
            db.session.add(car)
            db.session.commit()
            return redirect(f'/car/{id}')
        return f"Car with id = {id} Does nit exist"
 
    return jsonify(car = car)

@app.route('/car/<int:id>/delete', methods=['GET','POST'])
def delete(id):
    car = CarModel.query.filter_by(car_id=id).first()
    if request.method == 'POST':
        if car:
            db.session.delete(car)
            db.session.commit()
            return redirect('/car')
        abort(404)
 
    return f"Car with id = {id} has been deleted"

app.run(host='localhost', port=5000)
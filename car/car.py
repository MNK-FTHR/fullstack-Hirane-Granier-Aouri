from flask_sqlalchemy import SQLAlchemy
import json

db = SQLAlchemy()
 
class CarModel(db.Model):
    __tablename__ = "car"
    
    car_id: int
    name: str
    price: int
    image: str

    id = db.Column(db.Integer, primary_key=True)
    car_id = db.Column(db.Integer(),unique = True)
    name = db.Column(db.String())
    price = db.Column(db.Integer())
    image = db.Column(db.String())
 
    def __init__(self, car_id,name,price,image):
        self.car_id = car_id
        self.name = name
        self.price = price
        self.image = image
 
    def __repr__(self):
        return f"{self.name}:{self.car_id}"

    # def toJSON(self):
    #     return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)

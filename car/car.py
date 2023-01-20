from flask_sqlalchemy import SQLAlchemy
import json
from dataclasses import dataclass
db = SQLAlchemy()

@dataclass
class CarModel(db.Model):
    __tablename__ = "car"
    
    id: id
    name: str
    price: int
    image: str

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    price = db.Column(db.Integer())
    image = db.Column(db.String())
 
    def __init__(self, id,name,price,image):
        self.id = id
        self.name = name
        self.price = price
        self.image = image
 
    def __repr__(self):
        return f"{self.name}:{self.id}"


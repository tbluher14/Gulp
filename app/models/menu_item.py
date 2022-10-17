
from .db import db

class MenuItem(db.Model):
  __tablename__ = 'menu_items'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50), nullable=False)
  price = db.Column(db.Integer, nullable=False)
  image_url = db.Column(db.String(200), nullable=False)
  business_id = db.Column(db.Integer, db.ForeignKey("businesses.id"),  nullable=False)

  business_menu = db.relationship('Business', back_populates="menu_item")


  def to_dict(self):
    return {
      "id" : self.id,
      "name" : self.name,
      "price" : self.price,
      "image_url" : self.image_url,
      "business_id" : self.business_id,
    }

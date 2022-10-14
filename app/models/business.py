from .db import db

class Business(db.Model):
  __tablename__ = 'businesses'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50), nullable=False)
  address = db.Column(db.String(100), nullable=False)
  city = db.Column(db.String(50), nullable=False)
  state = db.Column(db.String(50), nullable=False)
  country = db.Column(db.String(50), nullable=False)
  zip_code = db.Column(db.String(5), nullable=False)
  website = db.Column(db.String(500), nullable=False)
  phone = db.Column(db.String(10), nullable=False)
  description = db.Column(db.String(2000), nullable=False)
  owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

  owner = db.relationship("User", back_populates="business_owner")
  reviews = db.relationship('Review', back_populates='business_reviews', cascade='all, delete')
  menu_item = db.relationship("MenuItem", back_populates='business_menu', cascade='all, delete')

  def to_dict(self):
    return {
      "id" : self.id,
      "name" : self.name,
      "address" : self.address,
      "city" : self.city,
      "state" : self.state,
      "country" : self.country,
      "zip_code" : self.zip_code,
      "website" : self.website,
      "phone" : self.phone,
      "description" : self.description,
      "owner_id" : self.owner_id,
    }


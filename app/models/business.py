from .db import db

class Business(db.Model):
  __tablename__ = 'businesses'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50), nullable=False)
  address = db.Column(db.String(100), nullable=False)
  city = db.Column(db.String(50), nullable=False)
  state = db.Column(db.String(50), nullable=False)
  country = db.Column(db.String(50), nullable=False)
  zipCode = db.Column(db.String(5), nullable=False)
  website = db.Column(db.String(500), nullable=False)
  phone = db.Column(db.String(10), nullable=False)
  description = db.Column(db.String(2000), nullable=False)
  open = db.Column(db.String, nullable=False)
  close = db.Column(db.String, nullable=False)
  am_pm_open = db.Column(db.String, nullable=False)
  am_pm_close = db.Column(db.String, nullable=False)
  image= db.Column(db.String(500), nullable=False)
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
      "zipCode" : self.zipCode,
      "website" : self.website,
      "phone" : self.phone,
      "image": self.image,
      "open": self.open,
      "close": self.close,
      "description" : self.description,
      "owner_id" : self.owner_id,
    }

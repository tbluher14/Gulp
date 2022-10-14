from .db import db

class Review(db.Model):
  __tablename__ = 'reviews'

  id = db.Column(db.Integer, primary_key=True)
  review = db.Column(db.String(50), nullable=False)
  rating = db.Column(db.Integer, nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  business_id = db.Column(db.Integer, db.ForeignKey("businesses.id"), nullable=False)

  user_review = db.relationship('User', back_populates='reviews_owner')
  business_reviews = db.relationship('Business', back_populates='reviews')

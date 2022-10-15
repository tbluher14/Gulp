from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Review, Business, db
from ..forms.review_form import CreateReviewForm

review_routes = Blueprint('reviews', __name__)

#****************************************************************************************************
# Get Reviews Route
@review_routes.route('/', methods=['GET'])
def get_all_reviews():
  reviews = Review.query.all()
  print('THIS IS REVIEWS', reviews)
  return {'reviews': [review.to_dict() for review in reviews]}

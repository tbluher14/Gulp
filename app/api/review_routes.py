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


@review_routes.route('/create_review', methods=['POST'])
@login_required
def create_review():
  form = CreateReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
      reviewData = Review(
        user_id=current_user.id,
        business_id=form.data['business_id'],
        review=form.data['review'],
        rating=form.data['rating'],
      )
      db.session.add(reviewData)
      db.session.commit()
      return jsonify(reviewData.to_dict()), 200
  else:
      print('THIS IS THE FORM', form.errors)
      return {'errors': form.errors}, 401

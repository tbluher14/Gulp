from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Business

business_routes = Blueprint('businesses', __name__)


@business_routes.route('/all-businesses', methods=['GET'])
def get_all_businesses():
  businesses = Business.query.all()
  print('THIS IS BUSINESS', businesses)
  return {'businesses': [business.to_dict() for business in businesses]}


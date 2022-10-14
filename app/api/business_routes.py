from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Business

business_routes = Blueprint('businesses', __name__)


@business_routes.route('/', methods=['GET'])
def get_all_businesses():
  businesses = Business.query.all()
  print('THIS IS BUSINESS', businesses)
  return {'businesses': [business.to_dict() for business in businesses]}

@business_routes.route('/create_business', methods=['POST'])
def create_business():
  pass

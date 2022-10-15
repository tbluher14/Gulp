from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Business
from ..forms.business_form import CreateBusinessForm

business_routes = Blueprint('businesses', __name__)


@business_routes.route('/', methods=['GET'])
def get_all_businesses():
  businesses = Business.query.all()
  print('THIS IS BUSINESS', businesses)
  return {'businesses': [business.to_dict() for business in businesses]}

@business_routes.route('/create_business', methods=['POST'])
@login_required
def create_business():
  form = CreateBusinessForm()

  if form.validate_on_submit():
    data = Business()

    form.populate_obj(data)

    business_routes.session.add(data)
    business_routes.session.commit()
    return data.to_dict()

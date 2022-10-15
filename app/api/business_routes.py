from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Business, db
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

  form["csrf_token"].data = request.cookies["csrf_token"]

  if form.validate_on_submit():

    print('THIS IS THE FORM', form)

    print('THIS IS THE FORM DATA', form.data)

    businessData = Business(
      owner_id=current_user.id,
      name=form.data['name'],
      address=form.data['address'],
      city=form.data['city'],
      state=form.data['state'],
      country=form.data['country'],
      zipCode=form.data['zipCode'],
      website=form.data['website'],
      phone=form.data['phone'],
      description=form.data['description'],
    )

    # form.populate_obj(data)

    db.session.add(businessData)
    db.session.commit()
    return jsonify(businessData.to_dict()), 200
  else:
    print('THIS IS THE FORM', form.errors)
    return {'errors': form.errors}, 401

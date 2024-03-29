from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Business, db
from ..forms.business_form import CreateBusinessForm

business_routes = Blueprint('businesses', __name__)

#****************************************************************************************************
# Get Business Route
@business_routes.route('/', methods=['GET'])
def get_all_businesses():
  businesses = Business.query.all()
  # print('THIS IS BUSINESS', businesses)
  return {'businesses': [business.to_dict() for business in businesses]}

#****************************************************************************************************
# Create Business Route
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
      open=form.data['open'],
      close=form.data['close'],
      am_pm_open=form.data['am_pm_open'],
      am_pm_close=form.data['am_pm_close'],
      image=form.data['image'],
      description=form.data['description'],
    )


    db.session.add(businessData)
    db.session.commit()
    return jsonify(businessData.to_dict()), 200
  else:
    # print('THIS IS THE FORM', form.errors)
    return {'errors': form.errors}, 401


#****************************************************************************************************
# Edit Business Route
@business_routes.route('/<int:business_id>', methods=['PUT'])
@login_required
def edit_business(business_id):
  form = CreateBusinessForm()
  form["csrf_token"].data = request.cookies["csrf_token"]


  if form.validate_on_submit():
    business = Business.query.get(business_id)

    print('THIS IS THE FORM FOR EDIT BIZ', form)
    print('THIS IS EDIT BUSINESS BUSINESS,', business)

    business.owner_id=current_user.id
    business.name=form.data['name']
    business.address=form.data['address']
    business.city=form.data['city']
    business.state=form.data['state']
    business.country=form.data['country']
    business.zipCode=form.data['zipCode']
    business.website=form.data['website']
    business.phone=form.data['phone']
    business.description=form.data['description']
    business.open=form.data['open']
    business.close=form.data['close']
    business.am_pm_open=form.data['am_pm_open']
    business.am_pm_close=form.data['am_pm_close']
    business.image=form.data['image']


    # print('THIS IS DB SESSION', db.session)
    # db.session.add(businessData)
    db.session.commit()
    return jsonify(business.to_dict()), 200
  else:
    print('THIS IS THE FORM ERRORS FOR EDIT BIZ', form.errors)
    return {'errors': form.errors}, 401

#****************************************************************************************************
# delete Business route
@business_routes.route('/<int:business_id>', methods=['DELETE'])
@login_required
def delete_business(business_id):
  business = Business.query.get(business_id)
  db.session.delete(business)
  db.session.commit()
  return {'message': 'Business deleted'}


#****************************************************************************************************
# search business route
@business_routes.route("/search")
def search_businesses():
    query_name = request.args.get("name")
    businesses = Business.query.filter(Business.name.ilike(f"%{query_name}%")).all()
    return {"businesses": [business.to_dict() for business in businesses]}

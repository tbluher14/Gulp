from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, MenuItem, Business, db
from ..forms.menu_item_form import CreateMenuItemForm


menu_item_routes = Blueprint('menu_items', __name__)

#****************************************************************************************************
# Get Menu Items Route
@menu_item_routes.route('/', methods=['GET'])
def get_all_menu_items():
  menu_items = MenuItem.query.all()
  print('THIS IS MENU ITEMS', menu_items)
  return {'menu_items': [menu_item.to_dict() for menu_item in menu_items]}

@menu_item_routes.route('<int:menu_item_id>', methods=['DELETE'])
@login_required
def delete_menu_item(menu_item_id):
  menu_item = MenuItem.query.get(menu_item_id)
  db.session.delete(menu_item)
  db.session.commit()
  return {'message': 'Menu Item deleted'}


@menu_item_routes.route('/create_menu_item', methods=['POST'])
@login_required
def create_menu_item():
  form = CreateMenuItemForm()

  form["csrf_token"].data = request.cookies["csrf_token"]

  if form.validate_on_submit():
    menuItemData = MenuItem(
      name=form.data['name'],
      price =form.data['price'],
      image_url = form.data['image_url'],
      business_id= form.data['business_id']
    )
    db.session.add(menuItemData)
    db.session.commit()
    return jsonify (menuItemData.to_dict()), 200
  else:
    return {'errors': form.errors}, 401

from app.models import db, MenuItem


# Adds a demo user, you can add other users here if you want
def seed_menu_items():
  item_one = MenuItem(
      name='Test1', price=10, image_url='something.jpeg', business_id=1)
  item_two = MenuItem(
      name='Test2', price=20, image_url='something.jpeg', business_id=2)
  item_three = MenuItem(
      name='Test3', price=15, image_url='something.jpeg', business_id=3)

  db.session.add(item_one)
  db.session.add(item_two)
  db.session.add(item_three)

  db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_menu_items():
  db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
  db.session.commit()

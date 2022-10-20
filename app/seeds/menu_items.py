from app.models import db, MenuItem


x = range(1,32)
# Adds a demo user, you can add other users here if you want
def seed_menu_items():
  for n in x:
    item_one = MenuItem(
        name='Deluxe Burger', price="10", image_url='https://images.unsplash.com/photo-1632203171982-cc0df6e9ceb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=528&q=80', business_id=n)
    item_two = MenuItem(
        name='Bacon Burger', price="15", image_url="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80", business_id=n)
    item_three = MenuItem(
      name='Bacon Burger & Fries', price="20", image_url='https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', business_id=n)
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

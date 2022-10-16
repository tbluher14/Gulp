from app.models import db, Business

def seed_businesses():
  test_one = Business(
    name='Los Tacos No. 1', address='3899 Cooks Mine Road', city='Gallup', state='New Mexico', country='United States',
    zipCode='87301', website='google.com', phone='0587256349', description='The authentic taste comes from family recipes and from fresh, simple and tasteful ingredients straight from home. In every taco from LOS TACOS No. 1 there is a bit of true Mexican culture and flavor.', owner_id=1)
  test_two = Business(
    name='Cutlets', address='3965 Crestview Terrace', city='Laredo', state='Texas', country='United States',
    zipCode='78041', website='google.com', phone='9871266789', description='The fabric of Cutlets was born out of love and respect for these humble deli creations, met with a desire to bring quality ingredients to the table. Simply put, we’re here to bring you a sandwich experience you can feel good about.', owner_id=2)
  test_three = Business(
    name='Smoke & Fire', address='3300 Hickory Street', city='Salt Lake City', state='Utah', country='United States',
    zipCode='84104', website='google.com', phone='0198413789', description="Salt Lake City's beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking.", owner_id=3)

  db.session.add(test_one)
  db.session.add(test_two)
  db.session.add(test_three)

  db.session.commit()

def undo_businesses():
  db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
  db.session.commit()

from app.models import db, Business

def seed_businesses():
  test_one = Business(
    name='Test1', address='Test1', city='Test1', state='Test1', country='Test1',
    zipCode='12345', website='google.com', phone='0123456789', description='Test1', owner_id=1)
  test_two = Business(
    name='Test2', address='Test2', city='Test2', state='Test2', country='Test2',
    zipCode='12345', website='google.com', phone='0123456789', description='Test2', owner_id=2)
  test_three = Business(
    name='Test3', address='Test3', city='Test3', state='Test3', country='Test3',
    zipCode='12345', website='google.com', phone='0123456789', description='Test3', owner_id=3)

  db.session.add(test_one)
  db.session.add(test_two)
  db.session.add(test_three)

  db.session.commit()

def undo_businesses():
  db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
  db.session.commit()

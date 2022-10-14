from app.models import db, Review


# Adds a demo user, you can add other users here if you want
def seed_reviews():
  review_one = Review(
    review='Test1', rating=5, user_id=1, business_id=1)
  review_two = Review(
      review='Test2', rating=3, user_id=2, business_id=2)
  review_three = Review(
      review='Test3', rating=2, user_id=3, business_id=3)

  db.session.add(review_one)
  db.session.add(review_two)
  db.session.add(review_three)

  db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
